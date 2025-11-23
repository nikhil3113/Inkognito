"use client";

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Loader2 } from "lucide-react";

import FormFields from "@/components/FormFields";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { signupWithProfile } from "@/lib/actions/auth";
import { signIn } from "@/lib/auth-client";

// Add confirmPassword and refine for match
const userSchema = z
  .object({
    email: z.string().email({ message: "Please enter a valid email address" }),
    username: z
      .string()
      .min(3, { message: "Username must be at least 3 characters" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Please confirm your password" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type UserFormData = z.infer<typeof userSchema>;

export default function SignUpPage() {
  const [error, setError] = useState("");
  const [loading, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(data: UserFormData) {
    setError("");
    startTransition(async () => {
      const result = await signupWithProfile(data);

      if (!result.success) {
        setError(result.error || "Signup failed");
        return;
      }

      // Auto sign in after signup
      await signIn.email(
        { email: data.email, password: data.password },
        {
          onSuccess() {
            router.push("/dashboard");
          },
          onError() {
            setError(
              "Signup successful but sign-in failed. Please try signing in manually."
            );
          },
        }
      );
    });
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 px-4 py-12">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Create an account
          </CardTitle>
          <CardDescription className="text-center">
            Enter your information below to get started
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormFields
                name="email"
                control={form.control}
                label="Email"
                type="email"
                placeholder="name@example.com"
              />
              <FormFields
                name="username"
                control={form.control}
                label="Username"
                type="text"
                placeholder="johndoe"
              />
              <FormFields
                name="password"
                control={form.control}
                label="Password"
                type="password"
                placeholder="••••••••"
              />
              <FormFields
                name="confirmPassword"
                control={form.control}
                label="Confirm Password"
                type="password"
                placeholder="••••••••"
              />

              {error && (
                <div className="bg-destructive/15 text-destructive text-sm p-3 rounded-md flex items-center gap-2">
                  <span className="font-medium">Error:</span> {error}
                </div>
              )}

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating account...
                  </>
                ) : (
                  "Sign Up"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="text-primary hover:underline font-medium"
            >
              Sign in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

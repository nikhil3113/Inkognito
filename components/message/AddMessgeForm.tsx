"use client";

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import FormFields from "@/components/FormFields";
import { addMessageAction } from "@/lib/actions/messages";
import Link from "next/link";

const messageSchema = z.object({
  content: z
    .string()
    .min(1, { message: "Message cannot be empty" })
    .max(2000, { message: "Message is too long (max 2000 characters)" }),
  referralName: z.string().optional(),
});

type MessageFormData = z.infer<typeof messageSchema>;

interface AddMessageFormProps {
  userId: string;
  userName: string;
  referralLink: string | null;
}

export function AddMessageForm({
  userId,
  userName,
  referralLink,
}: AddMessageFormProps) {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<MessageFormData>({
    resolver: zodResolver(messageSchema),
    defaultValues: {
      content: "",
      referralName: "",
    },
  });

  async function onSubmit(data: MessageFormData) {
    setError("");
    setSuccess(false);
    startTransition(async () => {
      const result = await addMessageAction({
        userId,
        content: data.content,
        referralName: data.referralName,
        referralLink: referralLink,
      });

      if (!result.success) {
        setError(result.error || "Failed to send message");
        return;
      }

      setSuccess(true);
      form.reset();

      setTimeout(() => {
        router.push("/");
      }, 2000);
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormFields
          name="content"
          control={form.control}
          label="Your Message"
          type="textarea"
          placeholder={`Write your anonymous message to ${userName}...`}
          description="This message will be sent anonymously. Be kind and respectful."
        />

        <FormFields
          name="referralName"
          control={form.control}
          label="Your Name (Optional)"
          type="text"
          placeholder="Leave blank to stay anonymous"
          description="If you want to reveal your identity, enter your name here."
        />

        {error && (
          <div className="bg-destructive/15 text-destructive text-sm p-3 rounded-md flex items-center gap-2">
            <span className="font-medium">Error:</span> {error}
          </div>
        )}

        {success && (
          <div className="bg-green-500/15 text-green-600 dark:text-green-400 text-sm p-3 rounded-md flex items-center gap-2">
            <span className="font-medium">Success!</span> Your message has been
            sent anonymously. Redirecting...
          </div>
        )}

        <Button type="submit" className="w-full" disabled={loading || success}>
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : success ? (
            "Message Sent!"
          ) : (
            "Send Anonymous Message"
          )}
        </Button>

        <Link href={"/signup"}>
          <Button className="bg-blue-700 hover:bg-blue-500">
            Create your own link?
          </Button>
        </Link>
      </form>
    </Form>
  );
}

import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { AddMessageForm } from "@/components/message/AddMessgeForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { headers } from "next/headers";

interface PageProps {
  params: Promise<{
    profileUrl: string;
  }>;
  searchParams: Promise<{
    ref?: string;
  }>;
}

export default async function AddMessagePage({
  params,
  searchParams,
}: PageProps) {
  const { profileUrl } = await params;
  const { ref } = await searchParams;

  const headersList = await headers();
  const referer = headersList.get("referer");

  const user = await prisma.user.findUnique({
    where: { profileUrl },
    select: {
      id: true,
      name: true,
      profileUrl: true,
    },
  });

  if (!user) {
    notFound();
  }

  const referralLink = referer ? referer : decodeURIComponent(ref || "");

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 px-4 py-12">
      <Card className="w-full max-w-2xl shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Send Anonymous Message
          </CardTitle>
          <CardDescription className="text-center">
            Send a message to{" "}
            <span className="font-semibold text-foreground">{user.name}</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AddMessageForm
            userId={user.id}
            userName={user.name}
            referralLink={referralLink}
          />
        </CardContent>
      </Card>
    </div>
  );
}

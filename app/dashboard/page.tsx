import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { GetMessagesForUser } from "@/lib/actions/messages";
import { MessageList } from "@/components/message/MessageList";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Share2 } from "lucide-react";
import { prisma } from "@/lib/prisma";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    redirect("/signin");
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
  });

  if (!user) {
    redirect("/signin");
  }
  const result = await GetMessagesForUser(session.user.id);

  const shareUrl = `${process.env.BETTER_AUTH_URL || "http://localhost:3000"}/${
    user.profileUrl
  }/add`;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-2xl">Your Dashboard</CardTitle>
          <CardDescription>
            View all anonymous messages sent to you
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-col items-start md:items-center gap-4 p-4 bg-muted rounded-lg">
            <div className="flex-1">
              <p className="text-sm font-medium mb-1">Your Message Link:</p>
              <code className="text-xs bg-background px-2 py-1 rounded border">
                {shareUrl}
              </code>
            </div>
            <Button asChild variant="outline" size="sm" className="gap-2">
              <Link href={`/${user.profileUrl}/add`} target="_blank">
                <Share2 className="h-4 w-4" />
                Share
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Messages ({result.messages.length})</CardTitle>
          <CardDescription>
            {result.messages.length === 0
              ? "No messages yet. Share your link to start receiving messages!"
              : "Your anonymous messages"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {result.success ? (
            <MessageList messages={result.messages} />
          ) : (
            <p className="text-destructive">{result.message}</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

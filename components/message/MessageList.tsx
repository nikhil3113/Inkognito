"use client";

import { Card, CardContent } from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";

interface Message {
  id: string;
  content: string;
  referralName: string | null;
  createdAt: Date;
}

interface MessageListProps {
  messages: Message[];
}

export function MessageList({ messages }: MessageListProps) {
  if (messages.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        <p className="text-lg">No messages yet</p>
        <p className="text-sm mt-2">
          Share your link to receive anonymous messages!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <Card key={message.id} className="border-l-4 border-l-primary/50">
          <CardContent className="pt-6">
            <p className="text-base leading-relaxed mb-3">{message.content}</p>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>
                {message.referralName ? (
                  <>
                    From:{" "}
                    <span className="font-medium">{message.referralName}</span>
                  </>
                ) : (
                  <span className="italic">Anonymous</span>
                )}
              </span>
              <span>
                {formatDistanceToNow(new Date(message.createdAt), {
                  addSuffix: true,
                })}
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

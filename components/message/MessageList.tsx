"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";
import { Ghost, Clock, User, Quote } from "lucide-react";

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
      <div className="flex flex-col items-center justify-center py-16 px-4 text-center space-y-6">
        <div className="relative">
          <div className="absolute -inset-4 bg-primary/20 blur-xl rounded-full" />
          <div className="relative bg-background p-6 rounded-full shadow-sm border border-muted">
            <Ghost className="h-12 w-12 text-muted-foreground/50" />
          </div>
        </div>
        <div className="max-w-md space-y-2">
          <h3 className="text-xl font-semibold tracking-tight">
            Your inbox is empty... for now
          </h3>
          <p className="text-muted-foreground">
            Silence is golden, but messages are better. Share your unique link
            on your story to start the conversation!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {messages.map((message) => (
        <Card
          key={message.id}
          className="group relative flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-muted/60 bg-card/50 backdrop-blur-sm"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-75 group-hover:opacity-100 transition-opacity" />

          <CardHeader className="pb-2">
            <Quote className="h-8 w-8 text-primary/10 rotate-180 mb-2" />
          </CardHeader>

          <CardContent>
            <p className="text-lg font-medium leading-relaxed text-foreground/90">
              {message.content}
            </p>
          </CardContent>

          <CardFooter className="pt-4 border-t border-muted/50 bg-muted/20 mt-auto">
            <div className="flex w-full items-center justify-between text-xs text-muted-foreground">
              {/* Sender Identity */}
              <div className="flex items-center gap-2">
                {message.referralName ? (
                  <div className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded-full">
                    <User className="h-3 w-3" />
                    <span className="font-semibold truncate max-w-[100px]">
                      {message.referralName}
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5 text-rose-600 dark:text-rose-400 bg-rose-500/10 px-2 py-1 rounded-full">
                    <Ghost className="h-3 w-3" />
                    <span className="font-semibold">Anonymous</span>
                  </div>
                )}
              </div>

              {/* Timestamp */}
              <div
                className="flex items-center gap-1.5 opacity-70"
                title={message.createdAt.toLocaleString()}
              >
                <Clock className="h-3 w-3" />
                <span>
                  {formatDistanceToNow(new Date(message.createdAt), {
                    addSuffix: true,
                  })}
                </span>
              </div>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Signout } from "./Signout";

export async function Appbar() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <header className="w-full bg-background border-b shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-xl text-primary"
        >
          <span className="tracking-tight">InkognIto </span>
        </Link>

        {session ? (
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarFallback>
                {session.user.name?.[0]?.toUpperCase() ?? "U"}
              </AvatarFallback>
            </Avatar>
            <Button asChild variant="default" size="sm">
              <Link href="/dashboard">Dashboard</Link>
            </Button>
            <Signout />
          </div>
        ) : (
          <div className="flex gap-2">
            <Button asChild variant="outline" size="sm">
              <Link href="/signin">Sign in</Link>
            </Button>
            <Button asChild size="sm">
              <Link href="/signup">Sign up</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}

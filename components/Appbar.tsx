import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Signout } from "./Signout";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
          <span className="tracking-tight">InkognIto</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4">
          {session ? (
            <>
              <Avatar>
                <AvatarFallback>
                  {session.user.name?.[0]?.toUpperCase() ?? "U"}
                </AvatarFallback>
              </Avatar>
              <Button asChild variant="default" size="sm">
                <Link href="/dashboard">Dashboard</Link>
              </Button>
              <Signout />
            </>
          ) : (
            <>
              <Button asChild variant="outline" size="sm">
                <Link href="/signin">Sign in</Link>
              </Button>
              <Button asChild size="sm">
                <Link href="/signup">Sign up</Link>
              </Button>
            </>
          )}
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 p-0">
              <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-2 px-6 py-4 border-b">
                  <span className="font-bold text-xl text-primary">
                    InkognIto
                  </span>
                </div>
                <div className="flex-1 flex flex-col gap-2 px-6 py-4">
                  {session ? (
                    <>
                      <div className="flex items-center gap-3 mb-4">
                        <Avatar>
                          <AvatarFallback>
                            {session.user.name?.[0]?.toUpperCase() ?? "U"}
                          </AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{session.user.name}</span>
                      </div>
                      <Button asChild variant="default" className="w-full mb-2">
                        <Link href="/dashboard">Dashboard</Link>
                      </Button>
                      <Signout />
                    </>
                  ) : (
                    <>
                      <Button asChild variant="outline" className="w-full mb-2">
                        <Link href="/signin">Sign in</Link>
                      </Button>
                      <Button asChild className="w-full">
                        <Link href="/signup">Sign up</Link>
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

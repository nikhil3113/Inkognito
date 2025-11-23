"use client";

import { signOut } from "@/lib/auth-client";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export function Signout() {
  const router = useRouter();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={async () => {
        await signOut();
        router.push("/");
      }}
    >
      Sign out
    </Button>
  );
}

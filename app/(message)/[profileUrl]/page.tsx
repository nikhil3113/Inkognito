import { prisma } from "@/lib/prisma";
import { notFound, redirect } from "next/navigation";

interface PageProps {
  params: Promise<{
    profileUrl: string;
  }>;
}

export default async function ProfilePage({ params }: PageProps) {
  const { profileUrl } = await params;

  const user = await prisma.user.findUnique({
    where: { profileUrl },
  });

  if (!user) {
    notFound();
  }

  // Redirect to the add message page
  redirect(`/${profileUrl}/add`);
}
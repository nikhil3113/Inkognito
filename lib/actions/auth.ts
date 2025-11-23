"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

function generateProfileUrl(username: string) {
  return username.toLowerCase().replace(/\s+/g, "-");
}

async function getUniqueProfileUrl(username: string) {
  const baseUrl = generateProfileUrl(username);
  let profileUrl = baseUrl;
  let exists = await prisma.user.findUnique({ where: { profileUrl } });

  while (exists) {
    profileUrl = `${baseUrl}-${Math.floor(Math.random() * 10000)}`;
    exists = await prisma.user.findUnique({ where: { profileUrl } });
  }

  return profileUrl;
}

export async function signupWithProfile(data: {
  email: string;
  username: string;
  password: string;
}) {
  try {
    // Check if user exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ email: data.email }],
      },
    });

    if (existingUser) {
      if (existingUser.email === data.email) {
        return { success: false, error: "Email already exists" };
      }
    }

    // Generate unique profile URL
    const profileUrl = await getUniqueProfileUrl(data.username);

    console.log("Data for signup:", data, "Profile URL:", profileUrl);

    // Use better-auth's internal signup
    const result = await auth.api.signUpEmail({
      body: {
        email: data.email,
        password: data.password,
        name: data.username,
      },
    });

    if (result) {
      // Update user with username and profileUrl
      await prisma.user.update({
        where: { email: data.email },
        data: {
          profileUrl: profileUrl,
        },
      });

      return { success: true };
    }

    return { success: false, error: "Signup failed" };
  } catch (error: any) {
    console.error("Signup error:", error);
    return { success: false, error: error.message || "An error occurred" };
  }
}

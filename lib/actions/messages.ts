"use server";

import { prisma } from "../prisma";

export async function addMessageAction(data: {
  userId: string;
  content: string;
  referralName?: string;
  referralLink?: string | null;
}) {
  try {
    if (!data.content || data.content.trim().length === 0) {
      return { success: false, error: "Message cannot be empty" };
    }

    if (data.content.length > 2000) {
      return {
        success: false,
        error: "Message is too long (max 2000 characters)",
      };
    }

    const user = await prisma.user.findUnique({
      where: { id: data.userId },
    });

    if (!user) {
      return { success: false, error: "User not found" };
    }

    await prisma.message.create({
      data: {
        content: data.content.trim(),
        userId: data.userId,
        referralName: data.referralName?.trim() || null,
        refferralLink: data.referralLink || null,
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Add message error:", error);
    return {
      success: false,
      error: "Failed to send message. Please try again.",
    };
  }
}

export async function GetMessagesForUser(userId: string) {
  try {
    const messages = await prisma.message.findMany({
      where: {
        userId: userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return {
      success: true,
      message: "Messages retrieved successfully.",
      messages: messages,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Failed to retrieve messages.",
      messages: [],
    };
  }
}

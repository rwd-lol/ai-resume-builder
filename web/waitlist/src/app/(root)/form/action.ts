"use server";

import { getAdmin } from "@/appwrite";
import { ID, Query } from "node-appwrite";

export async function waitlist(
  state: { error: string },
  formData: FormData
): Promise<{ error: string }> {
  const formEmail = formData.get("email") as string;

  if (!formEmail) {
    return { error: "Email is required." };
  }

  const dbId = process.env.APPWRITE_DATABASE;
  const collectionId = process.env.APPWRITE_COLLECTION;

  if (!dbId || !collectionId) {
    return { error: "Database configuration is missing." };
  }

  const { database } = await getAdmin();

  try {
    const existing = await database.listDocuments(dbId, collectionId, [
      Query.equal("email", formEmail),
    ]);

    if (existing.total > 0) {
      return { error: "This email is already on the waitlist." };
    }

    await database.createDocument(
      dbId,
      collectionId,
      ID.unique(),
      { email: formEmail }
    );

    return {
      error: ""
    };
  } catch (e) {
    return {
      error: e instanceof Error ? e.message : "An unknown error occurred.",
    };
  }
}

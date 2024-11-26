"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function deleteExperience(id: string) {
  try {
    const response = await fetch(`${process.env.API}/experiences/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to edit experience");
    }
  } catch (error) {
    console.warn(error);
  }

  revalidatePath(`/experiences`);
  redirect(`/experiences`);
}

"use server";

import { Experience } from "@/types";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function editExperience(
  experience: Experience,
  formData: FormData
) {
  const title = formData.get("title")?.toString();
  const description = formData.get("description")?.toString();

  // This would be a file upload in a real application and would need to be handled differently
  const imageUrl = experience.imageUrl;

  const template = {
    ...experience,
    title,
    description,
    imageUrl,
  };

  try {
    //Add some loading state to show the user that the request is being processed
    const response = await fetch(
      `${process.env.API}/experiences/${experience.id}`,
      {
        method: "PUT",
        body: JSON.stringify(template),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to edit experience");
    }
  } catch (error) {
    console.warn(error);
  }

  revalidatePath(`/experiences/${experience.id}`);
  redirect(`/experiences/${experience.id}`);
}

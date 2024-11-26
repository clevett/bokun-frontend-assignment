"use server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { v4 as uuidv4 } from "uuid";

export async function createExperience(formData: FormData) {
  const id = uuidv4();
  const title = formData.get("title")?.toString();
  const description = formData.get("description")?.toString();

  // This would be a file upload in a real application
  const imageUrl =
    "https://images.unsplash.com/photo-1501621965065-c6e1cf6b53e2?auto=format&fit=crop&w=1200&q=80";

  const template = {
    id,
    title,
    rating: 9.5,
    description,
    imageUrl,
  };

  try {
    //Add some loading state to show the user that the request is being processed
    const response = await fetch(`${process.env.API}/experiences`, {
      method: "POST",
      body: JSON.stringify(template),
    });

    if (!response.ok) {
      throw new Error("Failed to create experience");
    }
  } catch (error) {
    console.warn(error);
  }

  revalidatePath("/experiences"); // Update cached
  redirect(`/experiences`); // Navigate back to experiences page
}

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

import { Experience } from "@/app/types";
import { Button } from "@/app/components";

export default function ExperienceNew() {
  const router = useRouter();
  const id = uuidv4();

  const [experience, setExperience] = useState({
    id,
    title: "Walking tour",
    rating: 9.5,
    description: "test description",
    imageUrl:
      "https://images.unsplash.com/photo-1501621965065-c6e1cf6b53e2?auto=format&fit=crop&w=1200&q=80",
  });

  const onUpdateTitle = (title: Experience["title"]) => {
    setExperience({ ...experience, title });
  };

  const onUpdateDescription = (description: Experience["title"]) => {
    setExperience({ ...experience, description });
  };

  const onSubmit = () => {
    axios
      .post(`${process.env.NEXT_PUBLIC_API}/experiences`, experience)
      .then((r) => {
        console.log("Success: ", r);
      })
      .catch((error) => {
        //Console log would be removed from production code. Would implement a toast or modal to alter user of any information.
        console.error("Error: ", error);
      })
      .finally(() => {
        router.push(`/experiences`);
      });
  };

  //Note: Much of this code is shared with /edit page and could be refactored to share components.
  return (
    <div className="grid gap-4">
      <h1>{experience.title}</h1>
      <div className="grid gap-6 auto-rows-min">
        <div className="grid justify-center items-center border-dotted border min-h-[500px] min-w-[500px]">
          {/* Skipping implementing this for tech eval. We might add a drag and drop field, button to upload from PC, and on hover effects. */}
          (Edit Image Component)
        </div>
        <div className="grid gap-4 px-4 py-6 auto-rows-min">
          <div className="grid gap-4 grid-flow-col grid-cols-[auto_1fr]">
            <label htmlFor="title">Title</label>
            <input
              className="text-primary p-2"
              name="title"
              onChange={(e) => onUpdateTitle(e.target.value)}
              type="text"
              defaultValue={experience.title}
            />
          </div>
          <div className="grid gap-4 grid-flow-col grid-cols-[auto_1fr]">
            <label htmlFor="description">Description</label>
            <textarea
              className="w-xl text-primary p-2 min-h-[80px]"
              name="description"
              defaultValue={experience.description}
              onChange={(e) => onUpdateDescription(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-flow-col gap-6">
          <Button onClick={onSubmit} style="solid" text="Submit" />
          <Button
            onClick={() => router.push("/experiences")}
            style="outline"
            text="Cancel"
          />
        </div>
      </div>
    </div>
  );
}

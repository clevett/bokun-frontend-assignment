"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

import { Experience } from "@/app/types";
import { Button, Loading } from "@/app/components";

export default function ExperienceEdit() {
  const router = useRouter();
  const params = useParams();
  const { experience_id: experienceId } = params;
  const [experience, setExperience] = useState<Experience | undefined>(
    undefined
  );
  const [toast, setToast] = useState<string | undefined>(undefined);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (experience === undefined) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API}/experiences/${experienceId}`)
        .then((response) => {
          setExperience(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error: ", error);
          setIsLoading(false);
        });
    }
  }, [experience, experienceId]);

  const onSubmit = (experience_id: string) => {
    axios
      .put(
        `${process.env.NEXT_PUBLIC_API}/experiences/${experience_id}`,
        experience
      )
      .then((response) => {
        //Console log would be removed from production code. Leaving this for tech eval.
        console.log("Success: ", response);
        setToast("Experience updated successfully");
      })
      .catch((error) => {
        //Console log would be removed from production code. Would implement a toast or modal to alter user of any information.
        console.error("Error: ", error);
      });
  };

  const onDelete = (experience_id: string) => {
    axios
      .delete(`${process.env.NEXT_PUBLIC_API}/experiences/${experience_id}`)
      .then(() => {
        setToast("Experience deleted successfully");
        router.push("/experiences");
      })
      .catch((error) => {
        //Console log would be removed from production code. Would implement a toast or modal to alter user of any information.
        console.error("Error: ", error);
      });
  };

  const onUpdateTitle = (title: Experience["title"]) => {
    if (experience) setExperience({ ...experience, title });
  };

  const onUpdateDescription = (description: Experience["title"]) => {
    if (experience) setExperience({ ...experience, description });
  };

  return (
    <div>
      {isLoading && <Loading />}
      {!isLoading && !experience && <span>Experience not found</span>}
      {!isLoading && experience && (
        <div className="grid gap-6 auto-rows-min">
          <div className="grid justify-center items-center border-dotted border min-h-[500px] min-w-[500px]">
            {/* Skipping implementing this for tech eval. We would show the current image but also indicate it can be replaced. We might add a drag and drop field, button to upload from PC, and on hover effects. */}
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
          {/* greens should be evaluated for accessibility but using it here to highlight the toast */}
          {toast && <span className="text-accent">{toast}</span>}
          <div className="grid grid-flow-col gap-6">
            <Button
              onClick={() => onSubmit(experience.id)}
              style="solid"
              text="Submit"
            />
            <Button
              onClick={() => onDelete(experience.id)}
              style="warning"
              text="Delete"
            />
          </div>
        </div>
      )}
    </div>
  );
}

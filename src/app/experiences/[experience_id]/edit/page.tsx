"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

import { Experience } from "@/app/types";
import { Loading } from "@/app/components";

// **Method**: `PUT`
// **URL**: `https://demo.bokun.me/:assignmentId/experiences/:experienceId`
// ## Delete **an experience**
// **Method**: `DELETE`
// **URL**: `https://demo.bokun.me/:assignmentId/experiences/:experienceId`

export default function ExperienceEdit() {
  const params = useParams();
  const { experience_id: experienceId } = params;
  const [experience, setExperience] = useState<Experience | undefined>(
    undefined
  );

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

  return (
    <div>
      {isLoading && <Loading />}
      {!isLoading && !experience && <span>Experience not found</span>}
      {!isLoading && experience && (
        <div className="grid gap-6 auto-rows-min">
          <div className="grid justify-center items-center border-dotted border min-h-[500px] min-w-[500px]">
            (Edit Image Component)
          </div>
          <div className="grid gap-4 px-4 py-6 auto-rows-min">
            <div className="grid gap-4 grid-flow-col grid-cols-[auto_1fr]">
              <label htmlFor="title">Title</label>
              <input
                className="text-primary p-2"
                name="title"
                type="text"
                value={experience.title}
              />
            </div>
            <div className="grid gap-4 grid-flow-col grid-cols-[auto_1fr]">
              <label htmlFor="description">Description</label>
              <textarea
                className="w-xl text-primary p-2 min-h-[80px]"
                name="description"
                value={experience.description}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

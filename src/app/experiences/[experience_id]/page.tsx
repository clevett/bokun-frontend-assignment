"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";

import type { Experience } from "@/app/types";

export default function Experience() {
  const router = useRouter();
  const params = useParams();
  const { experience_id: experienceId } = params;
  const [experience, setExperience] = useState<Experience | undefined>(
    undefined
  );

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //Note: In real project scenario this would need to be dynamic as multiple users could updating experiences at the same time
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

  const onEditClick = (experience_id: string) => {
    router.push(`/experiences/${experience_id}`);
  };

  return (
    <div>
      {isLoading && <span>Loading...</span>}
      {!isLoading && !experience && <span>Experience not found</span>}
      {!isLoading && experience && (
        <div className="grid gap-6 auto-rows-min">
          <div className="grid justify-center items-center">
            <Image
              alt={experience.title}
              aria-hidden
              className="rounded-md shadow-lg"
              height={500}
              priority={true}
              src={experience.imageUrl}
              width={500}
            />
          </div>
          <div className="grid gap-4 px-4 py-6 auto-rows-min">
            <div className="grid gap-2 grid-flow-col grid-cols-[auto_min-content]">
              <h1 className="text-5xl capitalize">{experience.title}</h1>
              <button
                className="cursor-pointer border border-accent p-2 rounded-full min-w-[100px] font-bold shadowed hover:bg-accent hover:text-primary "
                onClick={() => onEditClick(experience.id)}
              >
                (edit)
              </button>
            </div>

            <span>Rating: {experience.rating}</span>
            <span>{experience.description}</span>
          </div>
        </div>
      )}
    </div>
  );
}
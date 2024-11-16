"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";

import type { Experiences } from "@/app/types";

export default function Experiences() {
  const router = useRouter();
  const [experiences, setExperiences] = useState<Experiences | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //Note: In real project scenario this would need to be dynamic as multiple users could be adding or updating experiences at the same time
    if (experiences === undefined) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API}/experiences`)
        .then((response) => {
          setExperiences(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error: ", error);
          setIsLoading(false);
        });
    }
  }, [experiences]);

  const onExperienceClick = (experience_id: string) => {
    router.push(`/experiences/${experience_id}`);
  };

  return (
    <section className="grid gap-6">
      <h1 className="text-5xl">Experiences</h1>
      {isLoading && <span>Loading...</span>}
      {!isLoading && !experiences && <span>No experiences found</span>}
      {!isLoading && experiences && experiences.length > 0 && (
        <div className="flex flex-wrap flex-row gap-4 justify-center grid-flow-col">
          {experiences.map((experience, index) => (
            <div
              className="grid gap-2 items-start auto-rows-min border rounded-md max-h-[350px] max-w-[500px] shadow-2xl hover:shadow-2xl transition-shadow cursor-pointer hover:text-accent"
              key={experience.id}
              onClick={() => onExperienceClick(experience.id)}
            >
              <div className="flex items-center justify-center max-h-[250px] overflow-hidden rounded-t-md border-b-2">
                <Image
                  aria-hidden
                  alt={experience.title}
                  height={500}
                  src={experience.imageUrl}
                  width={500}
                  priority={index < 10}
                />
              </div>
              <div className="grid gap-2 auto-rows-min p-4">
                <h2 className="text-2xl">{experience.title}</h2>
                <span>Rating: {experience.rating}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

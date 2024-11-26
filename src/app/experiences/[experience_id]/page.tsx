import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import axios from "axios";
import Image from "next/image";

import { Button } from "@/components";
import type { Experience } from "@/types";

export default function Experience() {
  const router = useRouter();
  const params = useParams();
  const { experience_id: experienceId } = params;
  const [experience, setExperience] = useState<Experience | undefined>(
    undefined
  );

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (experience === undefined) {
      axios
        .get(`${process.env.API}/experiences/${experienceId}`)
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
    router.push(`/experiences/${experience_id}/edit`);
  };

  return (
    <div>
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
              <Button
                className="max-w-64 justify-self-end"
                onClick={() => onEditClick(experience.id)}
                style="outline"
                text="(edit)"
              />
            </div>
            <span>Rating: {experience.rating}</span>
            <span>{experience.description}</span>
          </div>
        </div>
      )}
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components";
import { deleteExperience } from "@/actions";
import type { Experience } from "@/types";

export default async function Experience({
  params,
}: {
  params: { experience_id: string };
}) {
  const { experience_id: experienceId } = await params;

  const response = await fetch(
    `${process.env.API}/experiences/${experienceId}`
  );
  const experience: Experience = await response.json();

  if (!response?.ok) {
    return <span>Experience not found</span>;
  }

  const destroyExperience = deleteExperience.bind(null, experience.id);

  return (
    <div className="grid gap-4 py-4 px-2">
      <Button className="max-w-max" style="outline">
        <Link className="w-full h-full" href={`/experiences`}>
          Back to Experiences
        </Link>
      </Button>
      {experience && (
        <div className="grid gap-6 auto-rows-min lg:px-60">
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
            </div>
            <span>Rating: {experience.rating}</span>
            <span>{experience.description}</span>
          </div>
          <div className="grid grid-flow-col gap-4 lg:gap-10">
            <Button style="outline">
              <Link
                className="w-full h-full"
                href={`/experiences/${experience.id}/edit`}
              >
                Edit
              </Link>
            </Button>
            <Button
              className="justify-self-end"
              style="warning"
              onClick={destroyExperience}
            >
              Delete
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

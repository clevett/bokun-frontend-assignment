import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components";
import type { Experiences } from "@/types";

export default async function Experiences() {
  const response = await fetch(`${process.env.API}/experiences`);
  const experiences: Experiences = await response.json();

  if (!response?.ok) {
    return <span>No experiences found</span>;
  }

  return (
    <section className="grid gap-6">
      <div className="grid grid-flow-col gap-6 auto-cols-max justify-between">
        <h1 className="text-5xl">Experiences</h1>
        <Button>
          <Link className="w-full h-full" href="/experiences/new">
            Create New Experience
          </Link>
        </Button>
      </div>
      {experiences && experiences.length > 0 && (
        <div className="flex flex-wrap flex-row gap-4 justify-center grid-flow-col">
          {experiences.map((experience, index) => (
            <Link
              className="grid gap-2 items-start auto-rows-min border rounded-md max-h-[350px] max-w-[500px] shadow-2xl hover:shadow-2xl transition-shadow cursor-pointer hover:text-accent"
              key={experience.id}
              href={`/experiences/${experience.id}`}
            >
              <div className="flex items-center justify-center max-h-[250px] overflow-hidden rounded-t-md border-b-2">
                <Image
                  alt={experience.title}
                  aria-hidden
                  height={500}
                  priority={index < 10}
                  src={experience.imageUrl}
                  width={500}
                />
              </div>
              <div className="grid gap-2 auto-rows-min p-4">
                <h2 className="text-2xl">{experience.title}</h2>
                <span>Rating: {experience.rating}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}

import { Experience } from "@/types";
import { Form } from "@/components";
import { editExperience } from "@/actions";

export default async function ExperienceEdit({
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

  const updateExperience = editExperience.bind(null, experience);

  return (
    <div>
      {experience && (
        <div className="grid gap-6 auto-rows-min">
          <Form
            cancelHref={`/experiences/${experienceId}`}
            experience={experience}
            onSubmitAction={updateExperience}
          />
        </div>
      )}
    </div>
  );
}

import { Form } from "@/components";
import { createExperience } from "@/actions";

export default function ExperienceNew() {
  return <Form onSubmitAction={createExperience} />;
}

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components";
import { Experience } from "@/types";

export const Form = ({
  cancelHref = "/experiences",
  onSubmitAction,
  experience,
}: {
  cancelHref?: string;
  experience?: Experience;
  onSubmitAction: (formData: FormData) => Promise<void>;
}) => {
  const { title, description, imageUrl } = experience || {};

  return (
    <form
      className="grid gap-4 auto-rows-min py-4 px-2"
      action={onSubmitAction}
    >
      {title && <h1 className="text-5xl">{title}</h1>}

      {imageUrl && (
        <Image
          alt={title ?? "tour image"}
          aria-hidden
          className="rounded-md shadow-lg"
          height={500}
          priority={true}
          src={imageUrl}
          width={500}
        />
      )}

      {!imageUrl && (
        <div className="grid justify-center rounded-md shadow-lg items-center border-dotted border min-h-[250px] min-w-[250px md:min-h-[500px] md:min-w-[500px]">
          {/* Skipping implementing this for tech eval. We might add a drag and drop field with hover effects. */}
          (Add Image Below)
        </div>
      )}

      <div className="grid gap-4 px-2 py-4 md:px-4 md:py-6 auto-rows-min">
        <div className="grid gap-4 grid-flow-col grid-cols-[1fr_2fr]">
          <label htmlFor="image">Image</label>
          <input className="cursor-pointed  " name="imageUrl" type="file" />
        </div>

        <div className="grid gap-4 grid-flow-col grid-cols-[1fr_2fr]">
          <label htmlFor="title">Title</label>
          <input
            className="text-primary p-2"
            defaultValue={title}
            name="title"
            type="text"
          />
        </div>
        <div className="grid gap-4 grid-flow-col grid-cols-[1fr_2fr]">
          <label htmlFor="description">Description</label>
          <textarea
            className="w-xl text-primary p-2 min-h-[80px]"
            defaultValue={description}
            name="description"
          />
        </div>
      </div>
      <div className="grid grid-flow-col gap-6">
        <Button>
          <input className="cursor-pointer w-full h-full" type="submit" />
        </Button>

        <Button style="outline" className="justify-self-end">
          <Link href={cancelHref}>Cancel</Link>
        </Button>
      </div>
    </form>
  );
};

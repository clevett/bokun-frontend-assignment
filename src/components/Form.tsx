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
    <form className="grid gap-4 auto-rows-min" action={onSubmitAction}>
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

      <div className="grid gap-4 px-4 py-6 auto-rows-min">
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

        <Button style="outline">
          <Link href={cancelHref}>Cancel</Link>
        </Button>
      </div>
    </form>
  );
};

"use client";

import { Button } from "@/components";
import Link from "next/link";

export const Form = ({
  action,
}: {
  action: (formData: FormData) => Promise<void>;
}) => {
  return (
    <form className="grid gap-6 auto-rows-min" action={action}>
      <div className="grid justify-center items-center border-dotted border min-h-[500px] min-w-[500px] rounded">
        {/* Skipping a complex implementation for tech eval. We might add a drag and drop field, image preview, and on hover effects. */}
        <input className="cursor-pointed" name="imageUrl" type="file" />
      </div>
      <div className="grid gap-4 px-4 py-6 auto-rows-min">
        <div className="grid gap-4 grid-flow-col grid-cols-[auto_1fr]">
          <label htmlFor="title">Title</label>
          <input
            className="text-primary p-2"
            defaultValue="Walking tour"
            name="title"
            type="text"
          />
        </div>
        <div className="grid gap-4 grid-flow-col grid-cols-[auto_1fr]">
          <label htmlFor="description">Description</label>
          <textarea
            className="w-xl text-primary p-2 min-h-[80px]"
            defaultValue="Beautiful walking tour"
            name="description"
          />
        </div>
      </div>
      <div className="grid grid-flow-col gap-6">
        <Button>
          <input className="cursor-pointer w-full h-full" type="submit" />
        </Button>

        <Button style="outline">
          <Link href="/experiences">Cancel</Link>
        </Button>
      </div>
    </form>
  );
};

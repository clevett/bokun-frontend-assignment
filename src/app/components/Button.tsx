const styles = {
  solid: "",
  outline: "border-accent hover:bg-accent hover:text-primary ",
};

export const Button = ({
  text,
  style = "solid",
}: {
  text: string;
  style?: string;
}) => {
  return (
    <button
      className="cursor-pointer border border-accent p-2 rounded-full min-w-[100px] font-bold shadowed hover:bg-accent hover:text-primary "
      onClick={() => onEditClick(experience.id)}
    >
      (edit)
    </button>
  );
};

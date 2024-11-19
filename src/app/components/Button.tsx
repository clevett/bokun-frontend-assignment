const styles = {
  solid: "bg-accent hover:bg-accent border-primary text-white",
  outline: "border-accent hover:bg-accent hover:text-primary ",
  warning: "bg-red-900 hover:bg-red-700 border-red-900 text-white",
};

// Create this button to demonstrate building a component library. Ideally it would be styled using a Design System as source of truth. In a production setting, I would have created inputs, textareas, and form elements as well.
export const Button = ({
  text,
  style = "solid",
  onClick,
}: {
  text: string;
  style?: keyof typeof styles;
  onClick: () => void;
}) => {
  return (
    <button
      className={`cursor-pointer border p-2 rounded-full min-w-[100px] font-bold shadowed ${styles[style]}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

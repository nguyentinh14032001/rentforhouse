import React from "react";
import { useController } from "react-hook-form";

const Textarea = (props) => {
  const { control, name, children, placeholder, ...rest } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });

  return (
    <textarea
      placeholder={placeholder}
      {...rest}
      {...field}
      className="min-h-[140px] w-full resize-none rounded-xl border px-6 py-4 text-sm font-medium outline-none placeholder:text-text-4 dark:bg-transparent dark:text-white placeholder:dark:text-text-1"
    ></textarea>
  );
};

export default Textarea;

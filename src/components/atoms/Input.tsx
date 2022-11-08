import React from "react";
import { Input as TInput } from "@material-tailwind/react";

function Input({
  handleChange,
  label,
  id,
}: {
  handleChange: Function;
  label: string;
  id:string
}) {
  return (
    <TInput
      id="name"
      variant="outlined"
      label={label}
      className="w-full bg-gray-450"
      onChange={(e) => {
        handleChange({ key: e.target.id, value: e.target.value });
      }}
    />
  );
}

export default Input;

import React from "react";
import { Input as TInput } from "@material-tailwind/react";

function Input({
  handleChange,
  label,
  id,
}: {
  handleChange:any;
  label: string;
  id: string;
}) {
  return (
    <TInput
      id = {id}
      variant="outlined"
      label={label}
      className="w-full bg-gray-450"
      onChange={(e) => {
        handleChange({
          key: `${id}` ?? "name",
          value: e.target.value ?? "",
        });
      }}
    />
  );
}

export default Input;

import React from "react";
import { Option as TOption, Select as TSelect } from "@material-tailwind/react";

function Select({
  handleChange,
  label,
  arrow,
  options,
  id,
}: {
  handleChange: Function;
  label: string;
  arrow?: any;
  options: { value: string; name: string }[];
  id: string;
}) {
  return (
    <TSelect
      variant="outlined"
      label={label}
      className="w-full appearance-none bg-gray-450"
      arrow={arrow ?? null}
      onChange={(e) => {
        handleChange({ key: [id], value: e });
      }}
    >
      {options.map((option) => (
        <TOption key={option.value} value={option.value}>
          {option.name}
        </TOption>
      ))}
    </TSelect>
  );
}

export default Select;

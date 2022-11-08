import React from "react";
import { Button as TButton } from "@material-tailwind/react";

function Button({children}) {
  return (
    <TButton
      type="submit"
      className="w-fit bg-green-primary px-8 py-3 rounded-sm justify-end"
    >
      {children}
    </TButton>
  );
}

export default Button;

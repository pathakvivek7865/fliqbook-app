import { Card as TCard } from "@material-tailwind/react";
import React from "react";

function Card({ children }) {
  return <TCard className="p-5">{children}</TCard>;
}

export default Card;

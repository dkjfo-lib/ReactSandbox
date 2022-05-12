import boxesData from "../boxesData";
import Box from "./Box";
import React from "react";

export default function Main() {
  const [boxes, setBoxes] = React.useState(boxesData);

  const Boxes = boxesData.map((item) => <Box {...item} />);

  Boxes.forEach((element) => {
    console.log(element);
  });

  return <div className="Content">{Boxes}</div>;
}

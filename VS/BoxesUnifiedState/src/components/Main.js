import boxesData from "../boxesData";
import Box from "./Box";
import React from "react";

export default function Main() {
  const [boxes, setBoxes] = React.useState(boxesData);

  const Boxes = boxes.map((item, index) => (
    <Box key={index} id={item.id} on={item.on} toggleBox={ToggleBox} />
  ));

  function ToggleBox(id) {
    console.log(`flip ${id}`);
    setBoxes((prevBoxes) => {
      return prevBoxes.map((item)=>{
        return item.id === id ? {...item, on: !item.on} : item
      })
    });
  }

  return <div className="Content">{Boxes}</div>;
}

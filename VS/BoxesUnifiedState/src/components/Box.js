import React from "react";

export default function Box(props) {
  const style = {
    backgroundColor: props.on ? "#222" : "#668",
  };

  return (
    <div
      className="Box"
      key={props.id}
      style={style}
      onClick={()=>props.toggleBox(props.id)}
    ></div>
  );
}

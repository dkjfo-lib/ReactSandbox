import React from "react";

export default function Box(props) {
  const [localOn, setOn] = React.useState(props.on);

  const style = {
    backgroundColor: localOn ? "#222" : "#668",
  };

  function FlipBoxValue(id) {
    setOn((prevOn) => !prevOn);
  }

  return (
    <div
      className="Box"
      key={props.id}
      style={style}
      onClick={FlipBoxValue}
    ></div>
  );
}

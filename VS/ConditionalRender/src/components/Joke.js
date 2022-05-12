import React from "react";

export default function Joke(props) {
  const [isShown, setIsShown] = React.useState(false);

  function toggleShown() {
    setIsShown((prevIsShown) => !prevIsShown);
  }

  const style = {
    color: isShown ? "#ccc" : "transparent",
  };

  return (
    <div className="Joke">
      {props.setup && <h3>{props.setup}</h3>}
      <p style={style}>{props.punchline}</p>
      <button onClick={toggleShown}>{isShown ? 'hide' : 'show'}</button>
    </div>
  );
}

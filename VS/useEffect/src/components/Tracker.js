import React from "react";

export default function Tracker() {
  const [windowWidth, SetWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function watchWidth() {
      console.log("update state");
      SetWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", watchWidth);

    return () => {
      console.log("unload");
      window.removeEventListener("resize", watchWidth);
    };
  }, []);

  return <p>{windowWidth}</p>;
}

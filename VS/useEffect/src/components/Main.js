import React from "react";
import Tracker from './Tracker';

const Main = () => {
  const [swData, SetSwData] = React.useState({});
  const [count, SetCount] = React.useState(1);
  const [show, SetShow] = React.useState(true);

  React.useEffect(() => {
    fetch(`https://swapi.dev/api/people/${count}`)
      .then((res) => res.json())
      .then((data) => SetSwData(data));
  }, [count]);

  console.log(count);


  return (
    <div>
      <pre>{JSON.stringify(swData, null, 2)}</pre>
      <button onClick={() => SetCount((prevCount) => (prevCount += 1))}>
        Next
      </button>
      <button onClick={() => SetShow((prevShow) => !prevShow )}>
        Show is {show ? "Yes" : "No"}
      </button>
      {show && <Tracker/>}
    </div>
  );
}

export default Main
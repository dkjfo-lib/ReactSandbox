import Character from "./Character";
import React from "react";
import charData from "./charData";
import useSound from "use-sound";

export default function Main() {
  function getRandomId(array) {
    return Math.floor(Math.random() * array.length);
  }

  function generateNewCharacter() {
    const hairColor = getRandomId(charData.hair);
    return {
      visual: {
        dressId: getRandomId(charData.dresses),
        expressionId: getRandomId(charData.expressions),
        hairColorId: hairColor,
        hairFrontId: getRandomId(charData.hair[hairColor].front),
        hairBackId: getRandomId(charData.hair[hairColor].back),
        backgroundId: getRandomId(charData.backgrounds),
      },
      maxHp: 3,
      hp: 0,
    };
  }

  const [character, setCharacter] = React.useState(generateNewCharacter());

  function onHit() {
    play();
    if (character.hp < character.maxHp) {
      setCharacter((prevCharacter) => ({
        ...prevCharacter,
        hp: prevCharacter.hp + 1,
      }));
    }
  }

  function setNewRandomCharacter() {
    setCharacter(generateNewCharacter());
  }

  const [play] = useSound(charData.voices[getRandomId(charData.voices)], {
    volume: 0.5 + Math.random() * 0.5,
    playbackRate: 0.95 + Math.random() * 0.1,
    interrupt: true,
  });

  const nextGirlStyle = {
    backgroundColor: character.hp === charData.maxHp ? "white" : "transparent",
    border: character.hp === charData.maxHp ? "solid" : "none",
    color: character.hp === charData.maxHp ? "black" : "transparent",
  };

  return (
    <div className="content">
      <Character {...character} />
      <div id="B-Breast">
        <button onClick={onHit}>Breast</button>
        <button onClick={onHit}>Breast</button>
      </div>
      <button id="B-Head" onClick={onHit}>
        Head
      </button>
      <button id="B-Face" onClick={onHit}>
        Face
      </button>
      <button
        id="B-Next"
        onClick={setNewRandomCharacter}
        disabled={character.hp < charData.maxHp}
        style={nextGirlStyle}
      >
        next girl
      </button>
    </div>
  );
}

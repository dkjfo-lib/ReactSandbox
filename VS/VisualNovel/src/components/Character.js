import charData from "./charData";
import pinkHeart from "../imgs/UI/PinkHeart.png";
import blueHeart from "../imgs/UI/BlueHeart.png";

export default function Character(props) {
  console.log(props);
  const dress = charData.dresses[props.visual.dressId];
  const expression = charData.expressions[props.visual.expressionId];
  const hairColor = charData.hair[props.visual.hairColorId];
  const hairFront = hairColor.front[props.visual.hairFrontId];
  const hairBack = hairColor.back[props.visual.hairBackId];
  const background = charData.backgrounds[props.visual.backgroundId];

  const hearts = [];
  const allHearts = [];
  for (let i = 0; i < props.maxHp; i++) {
    allHearts.push(<img src={blueHeart} alt="heart-bs" />);
    hearts.push(
      <img
        src={pinkHeart}
        style={{ opacity: i < props.hp ? 1 : 0 }}
        alt="heart-p"
      />
    );
  }

  return (
    <div>
      <div className="char-box">
        <img src={background} alt="char-hair-back" />
        <div className="Heart-box">{allHearts}</div>
        <div className="Heart-box">{hearts}</div>
        <img src={hairBack} alt="char-hair-back" />
        <img src={charData.base} alt="char-body" />
        <img src={dress} alt="char-dress" />
        <img id="expression" src={expression} alt="char-emote" />
        <img src={hairFront} alt="char-hair-front" />
      </div>
    </div>
  );
}

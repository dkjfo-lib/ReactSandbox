import FoodCard from "./FoodCard";
import data from "../data";

export default function Main() {
  const cards = data.map((item) => <FoodCard {...item} />);

  return (
    <div className='Content'>
      {cards}
    </div>
  );
}

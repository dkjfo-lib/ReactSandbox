export default function FoodCard(props) {
  return (
    <a>
      <div className='FoodCard'>
        <img src={`${process.env.PUBLIC_URL}/imgs/${props.img}`} alt='food-icon'/>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
      </div>
    </a>
  );
}

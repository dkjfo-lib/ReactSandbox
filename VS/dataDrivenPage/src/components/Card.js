export default function Card({ timesLeft, img, description, price }) {
  return (
    <nav className="card">
      {timesLeft === 0 && <div className="card-notAvailable">Time is up</div>}
      <div>
        {img && <img className="card-img" src={`${process.env.PUBLIC_URL}/cardImgs/${img}`} alt="cardImg" />}
      </div>
      <div className="card-description">
        <p>{description}</p>
        <p><strong>FROM {price}$</strong> / person</p>
      </div>
    </nav>
  );
}

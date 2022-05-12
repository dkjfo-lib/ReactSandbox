import geo from "../imgs/geo.svg";

export default function Card(props) {
  return (
    <div className="card">
      <img
        className="card-img"
        src={process.env.PUBLIC_URL + "/imgs/" + props.img}
        alt="place-preview"
      />
      <div className="card-description">
        <a
          href={props.geo}
          rel="noopener noreferrer"
          target="_blank"
          title="show on google maps"
        >
          <img src={geo} alt="geo-logo" />
          <p>{props.name}</p>
        </a>
        <p>{props.date}</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

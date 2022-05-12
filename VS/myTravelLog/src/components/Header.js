import world from "../imgs/earth.svg";

export default function Header() {
  return (
    <nav className="header">
      <img src={world} alt="world-logo" />
      <h1>Places I've been at</h1>
    </nav>
  );
}

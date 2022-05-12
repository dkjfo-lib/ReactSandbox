import reactLogo from "../react.svg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <img className="navbar-img" src={reactLogo} alt="logo" />
        <h4 className="navbar-header">ReactFacts</h4>
      </div>
      <div>
        <p>ReactExercise #666</p>
      </div>
    </nav>
  );
}

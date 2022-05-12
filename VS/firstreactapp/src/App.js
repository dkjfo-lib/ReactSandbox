import "./App.css";
import logo from './react.svg';

function Header() {
  return (
    <header>
      <nav className="nav">
        <img className="nav-logo" src={logo} alt="logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <div>
      <h1>Reasons to love REACT</h1>
      <ol>
        <li>Reusable Components!</li>
        <li>Easy syntax</li>
        <li>Awesome support and endless libraries</li>
      </ol>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <small>© 2022 Fedotin development. All rights reserved.</small>
    </footer>
  );
}
function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;

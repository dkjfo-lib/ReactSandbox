import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import data from "./data";

function App() {
  const places = data.map(place => 
    <Card {...place} />
  );

  return (
    <div>
      <Header />
      <div className ="card-holder">
        {places}
      </div>
    </div>
  );
}

export default App;

function Navbar() {
    return (
      <nav className = "SimpleNavbar" >
        <h1>HELLO!</h1>
      </nav>
  )
}

function MainContent() {
    return (
        <div className = "MainContent" >
        <h2>To my awesome page</h2>
        </div>
    )
}

ReactDOM.render(
    <div>
        <Navbar/>
        <MainContent/>
    </div>,
    document.getElementById("root")
);

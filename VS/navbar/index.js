function Navbar(){
    return( 
        <nav>
            <h1>MIKELAND</h1>
            <ul>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

ReactDOM.render(
    <div>
        <Navbar/>
    </div>,
    document.getElementById("root")
)
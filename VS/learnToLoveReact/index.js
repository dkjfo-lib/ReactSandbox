// my pure JS code 
let element = document.getElementById("root")
element.innerHTML += "<h2>it's a pure JS (HELL)</h2>" 

// tutorial pure JS code
const h2 = document.createElement("h2")
h2.textContent = "this is also pure js"
h2.className = "header"
element = document.getElementById("root")
element.append(h2)

// lord and saviour REACT.JS
ReactDOM.render(<h2>it's yo boi, REACT!</h2>,document.getElementById("root"))
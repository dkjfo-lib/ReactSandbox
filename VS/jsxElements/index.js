// this is html element
const h2 = document.createElement("h2");
h2.textContent = "this is also pure js";
h2.className = "header";
let element = document.getElementById("root");
element.append(h2);
console.log(h2);
/* <h2 class="header">this is also pure js</h2> */

// This is js class = jsx
const jsxElement =
(
    <div>
        <h2 className = "header">it's yo boi, REACT!</h2>
        <p>LOVE IT!</p>
    </div>
) 
console.log(jsxElement);
/* 
{
    "type": "div",
    "key": null,
    "ref": null,
    "props": {
        "children": [
            {
                "type": "h2",
                "key": null,
                "ref": null,
                "props": {
                    "className": "header",
                    "children": "it's yo boi, REACT!"
                },
                "_owner": null,
                "_store": {}
            },
            {
                "type": "p",
                "key": null,
                "ref": null,
                "props": {
                    "children": "LOVE IT!"
                },
                "_owner": null,
                "_store": {}
            }
        ]
    },
    "_owner": null,
    "_store": {}
}
*/

// this function can only render SINGLE parent element
ReactDOM.render(jsxElement, document.getElementById("root"));

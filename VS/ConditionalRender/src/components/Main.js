import jokes from "../jokes"
import Joke from "./Joke"

export default function Main(){

    const Jokes = jokes.map((item)=>
        <Joke {...item}/>
    )

    return(
        <div>
            {Jokes}
        </div>
    )
}
import charBase from "../imgs/character/base.png";

function importAll(r) {
    let images = []
    r.keys().map((item, index) => images.push(r(item)))
    return images
}

const costumes = importAll(require.context(`../imgs/character/Costumes`, false, /\.(PNG|png|jpe?g|svg)$/))
const expressions = importAll(require.context(`../imgs/character/Expressions/`, false, /\.(PNG|png|jpe?g|svg)$/));
const hair = [
    {
        front: importAll(require.context(`../imgs/character/hair/Blondie/Front`, false, /\.(PNG|png|jpe?g|svg)$/)),
        back: importAll(require.context(`../imgs/character/hair/Blondie/Back`, false, /\.(PNG|png|jpe?g|svg)$/))
    },
    {
        front: importAll(require.context(`../imgs/character/hair/Brown/Front`, false, /\.(PNG|png|jpe?g|svg)$/)),
        back: importAll(require.context(`../imgs/character/hair/Brown/Back`, false, /\.(PNG|png|jpe?g|svg)$/))
    },
    {
        front: importAll(require.context(`../imgs/character/hair/Dark/Front`, false, /\.(PNG|png|jpe?g|svg)$/)),
        back: importAll(require.context(`../imgs/character/hair/Dark/Back`, false, /\.(PNG|png|jpe?g|svg)$/))
    },
    {
        front: importAll(require.context(`../imgs/character/hair/Pink/Front`, false, /\.(PNG|png|jpe?g|svg)$/)),
        back: importAll(require.context(`../imgs/character/hair/Pink/Back`, false, /\.(PNG|png|jpe?g|svg)$/))
    },
    {
        front: importAll(require.context(`../imgs/character/hair/Silver/Front`, false, /\.(PNG|png|jpe?g|svg)$/)),
        back: importAll(require.context(`../imgs/character/hair/Silver/Back`, false, /\.(PNG|png|jpe?g|svg)$/))
    }
]
const backgrounds =importAll(require.context('../imgs/Noraneko_Backgrounds', false, /\.(PNG|png|jpe?g|svg)$/))

const voices = importAll(require.context('../sounds/voice', false, /\.(mp3)$/))

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    base: charBase,
    hair: hair,
    expressions: expressions,
    dresses: costumes,
    backgrounds:backgrounds,
    voices:voices
}
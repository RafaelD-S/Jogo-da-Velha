import { useState } from "react"
import bolaSVG from '../assets/bola.svg'
import bolaPNG from '../assets/bola.png'
import xSVG from '../assets/x.svg'
import xPNG from '../assets/x.png'


export default function Jogo() {

    const [quadrados, setQuadrados] = useState([
        {
        id: 0,
        valor: ''
        },
        {
        id: 1,
        valor: ''
        },
        {
        id: 2,
        valor: ''
        },
        {
        id: 3,
        valor: ''
        },
        {
        id: 4,
        valor: ''
        },
        {
        id: 5,
        valor: ''
        },
        {
        id: 6,
        valor: ''
        },
        {
        id: 7,
        valor: ''
        },
        {
        id: 8,
        valor: ''
        }
    ])

    // () => console.log(quadrados[e.id].valor)
    // () => setQuadrados[e.id].valor("X")

    const [suaVez, setSuaVez] = useState(true)

    const teste = (id) => {
        setQuadrados(item => item.map(
            e => e.id === id && e.valor === '' && suaVez ? {valor: xSVG} : e.id === id && e.valor === '' && suaVez === false ? {valor: bolaSVG} : e
        ));
        if(suaVez) {
            setSuaVez(false)
        } else {
            setSuaVez(true)
        }
    }

    const resetar = () => {
        setQuadrados()
    }

    return (
        <body>
            <section>
                {quadrados.map((e) => (
                    <figure key={e.id} onClick={() => teste(e.id)}> <img src={e.valor} alt="" /></figure>
                ))}
            </section>
            {<Jogador resetar={resetar}/>}
        </body>
    )
}

export function Jogador({resetar}) {
    return (
        <section>
            <figure>
                {/* <button onClick={resetar}>
                    ↻
                </button> */}
                <figcaption>
                    0
                </figcaption>
                <img src={xSVG} alt="" />
            </figure>
            <article>
                <input type="text" defaultValue='JOGADOR 1'/>
                <input type="text" defaultValue='JOGADOR 2'/>
            </article>
            <figure>
                <figcaption>
                    0
                </figcaption>
                <img src={bolaSVG} alt="" />
            </figure>
        </section>
    )
}
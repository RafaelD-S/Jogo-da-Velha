import { useEffect, useState } from "react"


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
    const[vazio, setVazio] = useState(quadrados)
    const[selecionados, setSeleciondos] = useState(0)

    const [suaVez, setSuaVez] = useState(true)

    
    const teste = (id) => {
        setQuadrados(item => item.map(
            e => e.id === id && e.valor === '' && suaVez ? ({valor: 'X'}) : e.id === id && e.valor === '' && suaVez === false ? {valor: 'O'} : e
        ));
        
        setSeleciondos(selecionados + 1)
        quadrados[id].valor == '' ? suaVez ? setSuaVez(false) : setSuaVez(true) : console.log("fudeu")
    }

    const resetar = () => {
        setQuadrados(vazio)
        setPrimeiroPontos('0')
        setSegundoPontos('0')
        setSeleciondos(0)
    }

    const[aparecerResultado, setAparecerResultado] = useState("100%")
    const[primeiroPontos, setPrimeiroPontos] = useState('0')
    const[segundoPontos, setSegundoPontos] = useState('0')

    const[resultado, setResultado] = useState('')
    
    const vitoria = (vencedor) => {
        setAparecerResultado('0%')
        setSeleciondos(0)
        
        vencedor === 'X' ? setPrimeiroPontos(+primeiroPontos + 1) : vencedor === 'O' ? setSegundoPontos(+segundoPontos + 1) : ''
        
        setTimeout(() => {
            setAparecerResultado('100%')
            setQuadrados(vazio)
        }, 1250)
    }

    useEffect(() => {
        if(
            quadrados[0].valor === quadrados[1].valor 
            && quadrados[0].valor === quadrados[2].valor 
            && quadrados[0].valor != '' 
            ||
            quadrados[0].valor === quadrados[3].valor 
            && quadrados[0].valor === quadrados[6].valor 
            && quadrados[0].valor != '' 
        ) {
            vitoria(quadrados[0].valor)
            setResultado(quadrados[0].valor + " Venceu")
        } else if(
            quadrados[3].valor === quadrados[4].valor 
            && quadrados[3].valor === quadrados[5].valor 
            && quadrados[3].valor != ''
            ||
            quadrados[1].valor === quadrados[4].valor 
            && quadrados[1].valor === quadrados[7].valor 
            && quadrados[1].valor != ''
            ||
            quadrados[0].valor === quadrados[4].valor 
            && quadrados[0].valor === quadrados[8].valor 
            && quadrados[0].valor != ''
            ||
            quadrados[2].valor === quadrados[4].valor 
            && quadrados[2].valor === quadrados[6].valor 
            && quadrados[2].valor != ''
        ) {
            vitoria(quadrados[4].valor)
            setResultado(quadrados[4].valor + " Venceu")
        } else if(
            quadrados[6].valor === quadrados[7].valor 
            && quadrados[6].valor === quadrados[8].valor 
            && quadrados[6].valor != ''
            ||
            quadrados[2].valor === quadrados[5].valor 
            && quadrados[2].valor === quadrados[8].valor 
            && quadrados[2].valor != ''
        ) {
            vitoria(quadrados[8].valor)
            setResultado(quadrados[8].valor + " Venceu")
        } else if(selecionados === 9) {
            vitoria('velha')
            setResultado("Velha")
        }
    }, [quadrados])

    return (
        <body>
            <section>
                {quadrados.map((e) => (
                    <div key={e.id} onClick={() => teste(e.id)}> {e.valor}</div>
                ))}
            <div className="gavetaDeVitoria" style={{bottom: aparecerResultado}}>
                {resultado}
            </div>
            </section>
            {<Jogador resetar={resetar} primeiroPontos={primeiroPontos} segundoPontos={segundoPontos}/>}
        </body>
    )
}

export function Jogador({resetar, primeiroPontos, segundoPontos}) {

    const[primeiroJog, setPrimeiroJog] = useState()
    const[segundoJog, setSegundoJog] = useState()

    return (
        <section>
            <div>
                <button onClick={resetar}>
                    ↻
                </button>
                <h3>
                    {primeiroPontos}
                </h3>
                <h2>
                    X
                </h2>
            </div>
            <article>
                <input type="text" placeholder='JOGADOR 1' onChange={(e) => setPrimeiroJog(e.target.value)}/>
                <input type="text" placeholder='JOGADOR 2' onChange={(e) => setSegundoJog(e.target.value)}/>
            </article>
            <div>
                <h3>
                    {segundoPontos}
                </h3>
                <h2>
                    O
                </h2>
            </div>
        </section>
    )
}
import { useState, useEffect } from "react"

export default function Pokedex(){
    const [id, setId] = useState(1)
    const [pokemon, setPokemon] = useState(null)

    const fetchData = async () => { //funcao assincrona para encontrar dados da API
        try{
            const response = await fetch(`link API: https://pokeapi.co/api/v2/pokemon/${id}`)
            //crase = template string, utilizado para strings que vão mudar de valor no decorrer da redenrização
            const data = await response.json();
            setPokemon(data)
        }catch(error){
            console.error(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [id])
    //useEffect acontece quando é feita a conexão com a API retornando os dados do pokemon a partir do ID


    const nextPokemon = () =>{
        setId(id + 1)
    }

    return(
        <div>
            {pokemon && (
                <div className="pokemon">
                 <h1>Pokemon</h1>
                 <p>{pokemon.name}</p>
                 <p>Peso: {pokemon.weight}g</p>
                 <img src="pokemon.sprites.font-default" alt="Pokemon" />
                 <button onClick={nextPokemon}>Próximo</button>
                 </div>
            )}
       </div>
    )
}
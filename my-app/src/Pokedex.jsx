import { useEffect, useState } from "react"

export function Pokedex() {

    const [dataPokemon, setDataPokemon] = useState('')

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${dataPokemon}`)
        .then((resp) => resp.json())
        .then((json) => console.log(json))
        .catch((error) => console.log(error))
    }, [])

    function handlePokemon(event) {
        setDataPokemon(event.target.value)
        console.log(setDataPokemon)
    }

    return (
        <div>
            <input type="text" onChange={handlePokemon} value={dataPokemon}/>
        </div>
    )
}
import axios from 'axios';
import { useState, useEffect } from 'react';
import './ApiData.scss'

function title(str: string) {
    if(!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function ApiData() {
    const [dados, setDados] = useState<any>(null);
    const [shiny, setShiny] = useState<boolean>(false);
    const [pokemon, setPokemon] = useState<string>("Charmander");

    useEffect(() => {
        if(!pokemon) return;

        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then((response) => setDados(response.data))
        .catch((err) => console.error(err));
        
        }, [pokemon]);
    

    return (
        <>
            <input type="text" onChange={(e) => setPokemon(e.target.value)} placeholder='Digite o nome de um Pokémon...'></input>
            <p className='name'>{dados ? title(dados.name) : "Carregando..."}</p>
            <p className='types'>{dados?.types?.map((t: any, index: number) => (
                <div className={`type ${t.type.name}`}><span key={index}>{t.type.name.toUpperCase()}</span></div>
            ))}</p>
            { dados && (
            <img className="pokemonImage" src={shiny ? dados.sprites.front_shiny : dados.sprites.front_default} onClick={() => setShiny(!shiny)}></img>
            )
            }
        </>
    );
}

export default ApiData;
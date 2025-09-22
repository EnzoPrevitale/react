import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header'
import './Pokemon.scss'
import axios from 'axios';
import PokemonDetail from '../../components/PokemonDetail/PokemonDetail'

function title(str: string) {
    if(!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function Pokemon() {
    const [dados, setDados] = useState<any>(null);
    const [pokemon, setPokemon] = useState<any>(null);

    useEffect(() => {

        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=100000`)
        .then((response) => setDados(response.data))
        .catch((err) => console.error(err));
        
        }, []);

    return (
        <>
        <Header />
        <h1>Todos os Pokémon:</h1>
        {dados?.results?.map((t: any, index: number) => (
            <>
                <div className='pokemonData'>
                    <PokemonDetail name={t.name} />
                </div>
            </>
        ))}
        </>
    );
}
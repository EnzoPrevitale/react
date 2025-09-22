import axios from "axios";
import { useEffect, useState } from "react";
import './PokemonDetail.scss'

function title(str: string) {
    if(!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function PokemonDetail({ name } : { name: string }) {
    const [dados, setDados] = useState<any>(null);
    useEffect(() => {

        axios.get(`https://pokeapi.co/api/v2/pokemon/${ name }`)
        .then((response) => setDados(response.data))
        .catch((err) => console.error(err));
        
        }, []);

    return (
        <div className="pokemonDetail">
            <img src={dados?.sprites?.front_default}></img>
            <div className="pokemonInfo">
                <p>{title(name)}</p>
                <p className="number">{`#${dados?.id}`}</p>
            </div>
        </div>
    );
}
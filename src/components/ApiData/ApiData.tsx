import axios from 'axios';
import { useState, useEffect } from 'react';

function title(str: string) {
    if(!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function ApiData() {
    const [dados, setDados] = useState<any>(null);

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/charmander")
        .then((response) => {
            setDados(response.data);
        })
        .catch((err) => console.error(err));
        }, []);

    if(dados) {
        console.log(dados);
    }

    return (
        <>
            <p>{dados ? title(dados.name) : "Carregando..."}</p>
            <img src=""></img>
        </>
    );
}

export default ApiData;
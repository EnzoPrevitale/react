import axios from 'axios';

function ApiData() {
    let dados:object;
    axios.get("https://pokeapi.co/api/v2/pokemon/")
    .then((response) => {
        dados = response;
        console.log(dados);
    })
    .catch((err) => console.error(err));

    return (
        <>
        </>
    );
}

export default ApiData;
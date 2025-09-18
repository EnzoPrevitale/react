import { useState } from "react";
import './botao.scss';

function Botao() {
    const [cor, setCor] = useState<string>("white");
    return (
        <button className={cor} onClick={() => cor === "white" ? setCor("pink") : setCor("white")}>Botão</button>
    );
}

export default Botao;

import { useEffect } from "react";

type Props = {
    message: string;
}

function Hello({message}:Props){

    useEffect(() => {    //---Ciclo de vida
        //-- chamada para API para buscar os produtos
        console.log('componente iniciou!');
    }, []);

    return(
        <h1>Hello {message}!</h1>
    )
}

export default Hello;
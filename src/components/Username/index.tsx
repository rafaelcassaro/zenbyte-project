import { useState } from "react";
import RedButton from "../RedButton";
import TextCamp from "../TextCamp";

interface UsernameProps {
    getUsername: (user: string) => void;
}

export default function Username({getUsername}: UsernameProps) {
    const [username, setUsername] = useState('');
    
    
    function FormData (e:any)  {
        e.preventDefault();
        getUsername(username);
    }

    const onTyped = (evento:any) => {
        setUsername(evento.target.value)
    }

    return (
        <form onSubmit={FormData}>
            <TextCamp
                className="mx-5 mb-2 text-lg p-1 border-black border-solid border text-gray-900"   
                type='text'
                placeholder='Digite um usuario'
                onChange={onTyped}
            />
            

            <RedButton>Procurar</RedButton>
        </form>
    )
}
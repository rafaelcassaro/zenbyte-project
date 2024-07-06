import { ReactElement } from 'react';

interface BotaoProps {
    children: ReactElement | string;
    onClick?: () => void
}

export default function RedButton (props: BotaoProps){
    return (
        <button onClick={props.onClick}  className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg  min-[200px]:text-xs  md:text-sm px-5 py-2.5 text-center me-2 mb-2">
            {props.children}
        </button>
    )
}

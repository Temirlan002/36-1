import React, { ChangeEvent, FC } from "react";


export interface SouzProps {
    title: string;
    description: string;
    second_description: string;
    age?: number;
    onClick: () => void;
}


const Souz:FC<SouzProps> = ({ title, description, second_description, age, onClick }) => {

    return (
        <div>
            <h1>{ title }</h1>
            <p>{ description }</p>

            <p>{second_description}</p>
            <button onClick={onClick}>click</button>
        </div>
    )
}

export default Souz;
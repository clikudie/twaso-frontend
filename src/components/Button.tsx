import React from 'react'

interface IButtonProps {
    text: string;
    fn: () => void;
}

const Button: React.FC<IButtonProps> = (props) => {
    return (
        <button
            onClick={props.fn}>
            {props.text}
        </button>
    )
}

export default Button

import React from 'react'
import './Button.css';

const Button = ({textGiven, functionGiven}) => {
    return (
        <button className={`btn`} onClick={functionGiven}>
                <h3 className="btn--text"> {textGiven} </h3>
        </button>
    )
}

export default Button

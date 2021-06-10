import React from 'react'
import '../styles/Button.css'

function Button(props) {
    return (
        <>
            <button className="btn">{props.name}</button>
        </>
    )
}

export default Button

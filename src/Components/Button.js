import React from 'react'
import '../styles/Button.css'

function Button(props) {
    return (
        <>
            <button className="btn" onClick={props.click}>{props.name}</button>
        </>
    )
}

export default Button

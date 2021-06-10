import React from 'react'
import '../styles/Header.css'

function Header(props) {
    return (
        <div>
            <h1 className="heading">{props.total} Birthdays Today</h1>
        </div>
    )
}

export default Header

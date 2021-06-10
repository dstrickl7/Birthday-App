import React from 'react'
import '../styles/Card.css'
import Header from './Header';
import Person from './Person';
import Button from './Button';

let totalBdays= ()=>{
    return 6;
}

function Card() {
    return (
        <div className="card">
            <Header total={totalBdays()}/>
            <div className="container">
                <Person name="FirstName LastName" age="29"/>
                <Person name="FirstName LastName" age="29"/>
                <Person name="FirstName LastName" age="29"/>
                <Person name="FirstName LastName" age="29"/>
                <Person name="FirstName LastName" age="29"/>
                <Person name="FirstName LastName" age="29"/>
            </div>
            <div className="btn-container">
                <Button name="Add"/>
                <Button name="Clear All"/>
            </div>
            
        </div>
    )
}

export default Card

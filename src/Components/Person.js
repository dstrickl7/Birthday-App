import React from 'react';
import '../styles/Person.css';

function Person(props) {
    return (
        <>
        
        <div className="person-container">
            <div className="photo-container">
                <img src={props.src} alt={props.name} className="photo" />
            </div>
            <div className="content">
                <h3 className="name">{props.name}</h3>
                <p className="age">{props.age} years</p>
            </div>
                <i className="fas fa-times delete" onClick={props.click} />
        </div>
    </>
    )
}

export default Person

import React from 'react';
import '../styles/Person.css';

function Person(props) {
    return (
        <div className="person-container">
            <span className="photo-container">
                <img src="" alt={props.name} className="photo" />
            </span>
            <div>
                <h3 className="name">{props.name}</h3>
                <p className="age">{props.age}</p>
            </div>
        </div>
    )
}

export default Person

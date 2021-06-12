import React from 'react';
import '../styles/Person.css';
import { people } from '../people'

function Person(props) {
    // const [person, setPerson] = useState(people);
    // people.map((person)=>{
    //     const {id, pic} = person;
    //     return (
    //         
    //     ) 
    // });
    return (
        <div className="person-container">
            <div className="photo-container">
                <img src={props.src} alt={props.name} className="photo" />
            </div>
            <div>
                <h3 className="name">{props.name}</h3>
                <p className="age">{props.age} years</p>
            </div>
        </div>
    )
}

export default Person

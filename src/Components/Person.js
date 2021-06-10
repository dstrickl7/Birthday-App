import React from 'react';
import '../styles/Person.css';
import person from '../styles/person1.jpg'

function Person(props) {
    // const [person, setPerson] = useState(people);
    // let newPeople = people.map((person)=>{
    //     const {id, name, age, birthday, pic} = person;
    //     return (
    //         // key={id}, 
    //         name={name}, age={age}
    //     ) 
    // });
    return (
        <div className="person-container">
            <div className="photo-container">
                <img src={person} alt={props.name} className="photo" />
            </div>
            <div>
                <h3 className="name">{props.name}</h3>
                <p className="age">{props.age} years</p>
            </div>
        </div>
    )
}

export default Person

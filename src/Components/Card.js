import React, { useState } from 'react'
import '../styles/Card.css'
import Header from './Header';
import Person from './Person';
import Button from './Button';
import { people } from '../people'


function Card() {
    const [person, setPerson] = useState(people);
    
    
    let clearAll = () =>{
       
    }

// cycle through array, get each person object,


// get birthdays that match current day
let totalBdays= ()=>{
    return people.length
;}

// cycle through person object, get each data/key pair
let newPeople = people.map((person)=>{
    const {id, name, age, birthday, pic} = person;
    return (
        person
        );
    });

    console.log(newPeople);
    let addPerson = () =>{
    
    }
    
    return (
        <div className="card">
            <Header total={totalBdays()}/>
            <div className="people-container">
               <Person name={person.name}/>
            </div>
            <div className="btn-container">
                <Button name="Add" onClick={setPerson}/>
                <Button name="Clear All" onClick={()=>setPerson([])}/>
            </div>
            
        </div>
    )
}

export default Card

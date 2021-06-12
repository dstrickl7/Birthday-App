import React, { useState } from 'react'
import '../styles/Card.css'
import Header from './Header';
import Person from './Person';
import Button from './Button';
import { people } from '../people'


function Card() {
    const [person, setPerson] = useState(people);
    let currentDate = () =>{
        let date = new Date();
        let month = date.getMonth();
        let day = date.getDate();
        return Number(month+day);
    }

    let birthdays = person.map((person)=> {
        const{ birthday }=person;
    return person.birthday
    });



// cycle through array, get each person object,
// get birthdays that match current day
    let totalBdays= ()=>{
        return 1;
    }


return(
    <div className="card">
        <Header total={totalBdays()}/>
        <div className="people-container">
       {
         person.map((person)=>{
            const { id, name, pic, birthday } = person;
            let currentYear = Number(new Date().getFullYear());
            let birthYear = Number(new Date(birthday).getFullYear())
            let personAge = currentYear-birthYear
        
            return (
                <Person
                    key={id}
                    name={name} 
                    src={pic}
                    age={personAge}
                    />
            )
         })  
       }
        </div>
        <div className="btn-container">
            <Button name="Add" />
            <Button name="Clear All" onClick={()=>setPerson([])}/>
        </div>
    </div>
    );
};

export default Card

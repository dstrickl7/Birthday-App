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

    let totalBdays;


return(
    <div className="card">
        <Header total={totalBdays}/>
        <div className="people-container">
       {
         person.map((person)=>{
            const { id, name, pic, birthday } = person;
// Calculate person's age
            let currentYear = Number(new Date().getFullYear());
            let birthYear = Number(new Date(birthday).getFullYear())
            let personAge = currentYear-birthYear
// Determine current birthdays
            let birthMonth=Number(new Date(birthday).getMonth())
            let birthDate=Number(new Date(birthday).getDate())
            let newBirthDate= birthMonth + birthDate;
            if(currentDate()===newBirthDate){
                totalBdays++
                console.log(totalBdays)
                return (
                    <Person
                        key={id}
                        name={name} 
                        src={pic}
                        age={personAge}
                        />
                        
                )
            }else{}
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

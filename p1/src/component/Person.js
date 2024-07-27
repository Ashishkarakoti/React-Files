import React from 'react'
import './Person.css'
const Person = (props) => {
    return (
        <div className = "person">
            <h1> Name: {props.name}</h1>
            <h2> Age : {props.age}</h2>
        </div>
    )
}

export default Person
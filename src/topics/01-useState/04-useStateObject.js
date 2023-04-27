import React, { useState } from "react";

const useStateObject = () => {
    const [person, setPerson] = useState({
       name: 'Pavan Kumar',
       age: 18,
       hobby : 'read books' 
    })

    // const [name, setName] = useState('Pavan')
    // const [age, setAge] = useState(24)
    // const [hobby, setHobby] = useState('read books')

    const displayPerson = () => {
        // setName('john')
        // setAge(28);
        // setHobby('Love to play games')
        //? All objects values will update  ?//
        // setPerson({
        //     name: 'John',
        //     age: 28,
        //     hobby: 'Love to play games'
        // })

        //! For a particular value //
        setPerson({
            ...person, name: 'John', age: 28,
        })
    }

    const {name, age, hobby} = person
    return(
        <>
            <h3>{name}</h3>
            <h3>{age}</h3>
            <h3>Enjoys : {hobby}</h3>
            <button className="btn" onClick={displayPerson}>show john</button>
        </>
    );
};

export default useStateObject;

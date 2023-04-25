import React, { useState } from "react";

const useStateBasics = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Pavan')
    const handleClick = () => {
        setCount(count + 1)
        setName("Pavan Kumar")
    }
    return(
        <div>
            <h4>Name {name}</h4>
            <h4>You clicked {count} times</h4>
            <button className="btn" onClick={handleClick}>increase</button>
        </div>
    );
};

export default useStateBasics;

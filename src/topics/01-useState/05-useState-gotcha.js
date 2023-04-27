import React, { useState } from "react";

const useStateGotcha = () => {
    const [value, setValue] = useState(0);
    
    const handleClick = () => {
        // setValue( value + 1)
        setTimeout(()=>{
            setValue((currentState)=>{
                const newState = currentState + 1;
                return newState
            })
        },300)
        // console.log(value);
     };

    return(
        <div>
            <h2>useState "Gotcha"</h2>
            <h3>{value}</h3>
            <button className="btn" onClick={handleClick}>increase</button>
        </div>
    );
};

export default useStateGotcha;

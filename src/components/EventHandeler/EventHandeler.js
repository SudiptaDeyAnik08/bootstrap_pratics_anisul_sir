import React, { useState } from 'react';

const EventHandeler = ()=>{

    const [inputedValue, setInputedValue] = useState();

    const handeler =(e)=>{
        console.log(e.target.value);
        setInputedValue(e.target.value);
    }

    return(
        <div>
            <h1>Hi from Event handeler</h1>
            <div>
                <input type="text" onChange={handeler} />
            </div>
            <p>{inputedValue}</p>
        </div>
    )
}

export default EventHandeler;
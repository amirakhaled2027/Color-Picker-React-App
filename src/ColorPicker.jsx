import { useState } from "react";



function ColorPicker() {
    const [color, setColor] =useState();
    
    function changeColorButton(event) {
        setColor(event.target.value);
    }


    return(<div>
        <h1>Select Color:</h1>
        <div style={{backgroundColor: color}} > 
            <p>selected color: {color}</p>
        </div>
        <input type="color" onChange={changeColorButton} />
    </div>)
}

export default ColorPicker
import React, { useState } from  'react';


const AddBox = (props) => {
    const [addBox, setAddBox] = useState([]);
    const [addColor, setAddColor] = useState("");


    const boxHandler = (event) => {
        event.preventDefault();
        const newColor = {
            addColor: addColor,
        };

        setAddBox([...addBox, newColor]);
        setAddColor("");
    }

    const colorHandler = (event) => {
        setAddColor(event.target.value);
    }

    return(
    <div>
        <form onSubmit={ boxHandler }>
            <label htmlFor="color">Color: </label>
            <input type="text" name="color" value={ addColor } onChange={ colorHandler } /><br></br>

            <input type="submit" value="Add Box" />
        </form>

        <div className="boxAlign">
            {addBox.map((color, i) => {
                return (
                <div className="boxColor" key={i} style={{ backgroundColor: color.addColor }}></div>
                )
            })}
        </div>
    </div>
    );
};

export default AddBox;
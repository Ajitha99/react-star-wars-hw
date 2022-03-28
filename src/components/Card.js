import { useState } from "react";

function Card(props){
    
    const [clicked, setClicked] = useState(false) 

    const handleOnClick=(e)=>{
        e.preventDefault();
        console.log("div clicked");
        setClicked(true);
    }

    return(
        <div className="cardDiv" onClick={handleOnClick}>
                {
                     (clicked === true)? <div>
                    <p><span id = "smallSpan">Name </span>{props.name}</p>
                    <p><span id = "smallSpan">Model </span>{props.model}</p>
                    <p><span id = "smallSpan">Starship class </span>{props.shipClass}</p>
                    <p><span id = "smallSpan">Cargo capacity </span>{props.cargoCap}</p>
                    <p><span id = "smallSpan">URL </span>{props.url}</p></div>: <div className="div-simple" >{props.name}</div>  }
            </div>
    )
}
export default Card;

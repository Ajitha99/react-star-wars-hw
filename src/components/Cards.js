import { useEffect, useState } from "react";
// import axios from "axios";
import { fetchData } from '../services/sw-api'
import Card from './Card'

function Cards(){
    const [cardList, setCardList] = useState([ ])

    
    useEffect(()=>{
        (async () => {
            try {       
                const response = await fetchData();
                setCardList(response);
            } catch (error) {
                console.log(error);
            }
        })
        ()
        
    },[])
    
    return(
        <div className="cards-div">
            {/* {console.log(cardList.results)} */}
            {
                
               cardList.map((card,index) =>{
                    const { name, starship_class, model,cargo_capacity,url} = card;
                    // console.log(card.results.name);
                    return <Card
                        name = {name}
                        shipClass = {starship_class}
                        model = {model}
                        cargoCap = {cargo_capacity}
                        url = {url}
                        key = {index}
                        />
                }) 
            } 
        </div>
    )
}
export default Cards;

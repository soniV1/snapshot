import React, { useEffect, useState } from "react";
import axios from "axios";

function AxiosKnow(){
const[Item,setItem] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            console.log(response.data)
            setItem(response.data)
        })
    },[])

    

    return (
        <>
        {Item.map((data)=>{
            return <div>
            <p>{data.name},{data.email}</p>
            </div>

            
        })}
        </>
    )
}

export default AxiosKnow;
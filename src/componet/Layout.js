import axios from "axios";
import React, { useEffect, useState } from "react";

function Layout(){
    const [Photo,setPhoto] = useState('');
    const [page,setPage] = useState(1);
     const [result, setResult] = useState([]);
     

    function SearchPhoto(){
        axios.get(`https://api.unsplash.com/search/photos?page=${page}&query=${Photo}&client_id=CsL0oqmVFujwA9rhmA8RwDXP4el8YKk8LiorULdW8MI`)
        .then((response)=>{
           console.log(response.data);
           setResult(response.data.results)
        })
    }
    useEffect(()=>{
        SearchPhoto();
    },[page])
    return (
        <>
        <div className="container">
            <input type="text" className="input" placeholder="Search Here......" value={Photo} onChange={(e)=>{setPhoto(e.target.value)}}/>
            <button className="btn btn-primary" onClick={SearchPhoto}>Search</button>
            <button className="btn btn-primary" onClick={()=> setPage(page+1)}> next</button>
            <button className="btn btn-primary" disabled={Boolean(page===1)} onClick={()=> setPage(page > 1 ? page-1 : 1)}> Prev</button>

        </div>

        <div className="container1">
            <div className="row text-center text-lg-start">

                {result.map((value)=>{
                       return (
                        <>
               <div className="col-sm-3">
                    <a href="#" className="d-block mb-4 h-100">
                        <img className="img" src={value.urls.small}/>

                    </a>

                </div>
                        </>
                       )
                })} 

            </div>

        </div>
        </>
    )
}

export default Layout;
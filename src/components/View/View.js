import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Total from '../Total/Total';
import './View.css';
// data fetch and useState and useEffect using-------------------- 
const View = () => {
    const[view,setView]=useState([])
    const[cart,setCart]=useState([])
    useEffect(()=>{
        fetch('./tools.JSON')
        .then(res=>res.json())
        .then(data=>setView(data))
    },[])
     const handle =(views)=>{
       const total = [...cart,views]
       setCart(total)
       
   }
    return (
        <div className="view-section">
            
            <div className="movie-section">
                {
                    view.map(views=><Cart views={views}
                        key={views.name}
                        handle={handle}
                        // key={views.}
                    
                    ></Cart>)
                }
    
            </div>
         
            <div className="cart-details">
                <Total cart={cart}></Total>
    
            </div>
        </div>
    );
};

export default View;
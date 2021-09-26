import React from 'react';
import List from '../List/List';
import './Total.css';
//  cart movie adding------------------
const Total = (props) => {
    
    const{cart}=props
    let total=0;
    let name =[];
    for(const carts of cart){
        total=total+carts.budget
        name=(name+' '+carts.name+',');
    }
    return (
        <div>
            <h2>Total movie:{props.cart.length}</h2>
            <h2>Total budget:${total}</h2>
            <h2>Added movie:</h2>
            <h3>{name}</h3>
       
        
      
     
      
        </div>
       
    );
};

export default Total;
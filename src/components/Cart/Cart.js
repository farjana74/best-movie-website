import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faAd } from '@fortawesome/free-solid-svg-icons'

import './Cart.css'

// cart movie section-------------------------------
const Cart = (props) => {
    console.log(props)
    const{name,poster,director,release,budget}=props.views;
    const element = <FontAwesomeIcon icon={faAd} />
    return (
        
            <div className="cart">
            <img src={poster} alt=""/>
            <h3> Movie Name:{name}</h3>
            <h4>Director by:{director}</h4>
            <p>Release:{release}</p>
            <h5>Budget:${budget}</h5>
            <button onClick={()=>props.handle(props.views)} class="button">{element}Add to cart</button>
            <br />
            <a href=""><i class="fab fa-facebook"></i></a>  <a href=""><i class="fab fa-instagram-square"></i></a>

            </div>
            
       
    );
};

export default Cart;
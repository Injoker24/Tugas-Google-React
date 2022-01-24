import React from "react";
import "./Movies.css"
import { useCart } from "react-use-cart";

const Movies = (props) => {

    const { addItem } = useCart();

    return (
        <div className = "card">
            <img src = {props.img} alt="poster"></img>
            <div className = "desc-box">
                <p className = "movie-title">{props.title}</p>
                <button className = "link" onClick={()=> window.open(props.link, "_blank")} type = "button"><span>IMDB</span></button>
                <button className = "wishlist" onClick = {()=> addItem(props.movie)}><span>Wishlist</span></button>
            </div>
        </div>
    );
};

export default Movies;
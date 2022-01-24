import React from "react";
import "./Wishlist.css"
import { useCart } from "react-use-cart";

const Wishlist = () => {
    const { 
        isEmpty,
        items,
        removeItem,
        emptyCart,
    } = useCart();

    if(isEmpty) return <h1 className ="wish-header">Your Wishlist is Empty</h1>
    return (
        <div className = "wish">
            <h1 className = "wish-header">Wishlist</h1>
            <table className = "wishlist-table">
                <tbody>
                    {items.map((movie, index)=>{
                        return(
                            <tr key={index}>
                                <td>
                                    <img src={movie.img} style={{height: '15rem'}}></img>
                                </td>
                                <td>{movie.title}</td>
                                <td>
                                    <button className = "wish-button" onClick = {() => removeItem(movie.id)}>Remove</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <button className = "del-button" onClick ={() => emptyCart()}>Clear Wishlist</button>
        </div>
    );
};

export default Wishlist;
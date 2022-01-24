import React from "react";
import "./Home.css";
import logo from "./IMDB Logo.png"
import Movies from "./Movies"
import data from "./data"

const Home = () => {
    return(
        <div className ="main">
            <div className = "topnav">
                <img src = {logo} alt = "logo" height = "48"></img>
                <div className = "home">Home</div>
            </div>

            <h1 className = "new-header">New releases</h1>
            <div className = "new-release-container">
                {data.movieData.map((movie, index)=>{
                    return (
                        <Movies 
                            img={movie.img} 
                            title={movie.title} 
                            link={movie.link} 
                            movie={movie} 
                            key={index} 
                            price={movie.price}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default Home;
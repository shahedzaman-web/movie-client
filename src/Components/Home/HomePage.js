import React, { useEffect, useState } from 'react';
import Navbar from "./../Navbar/Navbar"
import "./HomePage.css"
import img from "./../../Image/mason-kimbarovsky-E5bGCHzjpr8-unsplash.jpg"
import axios from 'axios';
const HomePage = () => {
    const [movieData, setMovieData] = useState([]);
    const [error,setError]=useState(null)
    
    useEffect(()=>{
        axios('https://protected-wildwood-00886.herokuapp.com/movieList')
        .then(res=>{
          setMovieData(res.data)
          console.log(res.data);
        })
        .catch(error=>{
          console.error("Error fetching data:",error);
          setError(error)
        })
       
    },[movieData])
    console.log(error)
    return (
        <div className="homePage-bg h-screen w-screen">
             <Navbar></Navbar>
<div className="grid mt-8  gap-4 grid-cols-1 md:grid-cols-3 xl:grid-cols-3 ml-2">
    {movieData.map(movie=>( <div key={movie._id} className="flex flex-col">
    <div className="bg-white shadow-md  rounded-3xl p-2">
    <div className="flex-none lg:flex">
            <div className=" h-full w-full lg:h-48 lg:w-40   lg:mb-0 mb-3">
                <img src={movie.MoviePoster} 
                    alt="Just a flower" className=" w-full  object-scale-down lg:object-cover  lg:h-48 rounded-2xl" />
            </div>
          <div className="flex flex-col ml-4">
          <p className="text-lg">Movie Name: {movie.MovieName}</p>
                <p>Language: {movie.Language}</p>
                    <p>Release Date: {movie.ReleaseDate}</p>
                   <p>Budget: {movie.Budget}</p>
                   <p>Collection: {movie.Collection}</p>
          </div>
               
            </div>
        </div>
    </div>))}
    
</div>
</div>
    );
};

export default HomePage;
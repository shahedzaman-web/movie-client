import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Navbar from "./../Navbar/Navbar"
const UpdateMovie = ({updateMovieInfo}) => {
    const {MovieName,Language,Budget,Collection,ReleaseDate} = updateMovieInfo
    let { id } = useParams();
    const { register, handleSubmit } = useForm();
    const [isUpdated, setIsUpdated] = useState(false);
    const onSubmit = data =>{
        axios.put(`https://protected-wildwood-00886.herokuapp.com/movieUpdate/${id}`, data)
        .then(response => {
            setIsUpdated(true)
            console.log(response)});
    }
     
    console.log(id);
    console.log(updateMovieInfo);

    return (
        <div className="UpdateBg-img w-screen h-screen">
       <Navbar></Navbar>
      
         <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8   items-center">
      <div className="py-6 w-96 bg-white  rounded">
              <p className="text-3xl flex justify-center mb-10">Update Movie</p>
              <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)} action="submit">
             <label className="ml-16">Movie Name</label>
                  <input {...register("MovieName")} className="ml-16 bg-purple-100 focus:bg-purple-200 px-2 my-2 w-60 h-8 rounded" type="text" defaultValue={MovieName}/>
                  <label className="ml-16">Language</label>
                  <input {...register("Language")} className="bg-purple-100 ml-16 focus:bg-purple-200 px-2 my-2 w-60 h-8 rounded" type="text" defaultValue={Language} />
                  <label className="ml-16">Release Year</label>
                  <input className="bg-purple-100 ml-16 px-2 my-2 w-60 h-8 rounded focus:bg-purple-200" type="number" {...register("ReleaseDate")} defaultValue={ReleaseDate}/>
                  <label className="ml-16">Budget</label>
                  <input {...register("Budget")} className="bg-purple-100 ml-16 px-2  focus:bg-purple-200  my-2 w-60 h-8 rounded" type="number" defaultValue={Budget} />
                  <label className="ml-16">Collection</label>
                  <input {...register("Collection")} className="bg-purple-100 ml-16 px-2 focus:bg-purple-200  my-2 w-60 h-8 rounded" type="number" defaultValue={Collection} />
                <input className="bg-blue-500 px-2 ml-28 focus:bg-blue-900 text-gray-50  my-2 w-36 h-8 hover:bg-blue-800 rounded"type="submit" value="Submit" />
                {isUpdated && <small className="text-green-700 ml-32">Updated Successfully</small>}
              </form>
      </div>
         </div>
      </div>
    );
};

export default UpdateMovie;
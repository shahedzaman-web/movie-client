import React, { useState } from 'react';
import "./AddMovie.css"
import Navbar from "./../Navbar/Navbar"


import axios from "axios";

import { useForm } from "react-hook-form";


const AddMovie = () => {
   
    const { register, handleSubmit, setValue } = useForm();
    const [isImgUploaded, setIsImgUploaded] = useState(false);
    const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
    
  const onSubmit = data => {
   
            axios.post(`https://protected-wildwood-00886.herokuapp.com/addMovie`, data)
            .then(res => {
              console.log(res);
              console.log(res.data);
              setIsSubmitSuccess(true)
              
})
  }
    const handleImageUpload = (event) => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set("key", "7fcee1f3d896c0d1ed1287f8e43f7382");
        imageData.append("image", event.target.files[0]);
    
        axios
          .post("https://api.imgbb.com/1/upload", imageData)
          .then(function (response) {
            
            console.log(response.data.data.display_url,response)
            
            setValue("MoviePoster", response.data.data.display_url)
            if(response.status === 200){
              setIsImgUploaded(true)
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      };
    return (
<div className="bg-img w-screen h-screen">
  <Navbar></Navbar>

   <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8   items-center">
<div className="py-6 w-80 bg-white  rounded">
        <p className="text-3xl flex justify-center ">Add Movie</p>
        <form className="flex flex-col items-center" onSubmit={handleSubmit(onSubmit)} action="submit">
        {/* movie name, language, release date, budget, collections.  */}
            <input {...register("MovieName")} className="bg-purple-100 focus:bg-purple-200 px-2 mt-4 w-60 h-8 rounded" type="text" placeholder="Movie Name" />
            <input {...register("Language")} className="bg-purple-100 focus:bg-purple-200 px-2 mt-4 w-60 h-8 rounded" type="text" placeholder="Language" />
            <input className="bg-purple-100 px-2 mt-4 w-60 h-8 rounded focus:bg-purple-200"
                        type="number"
                                     {...register("ReleaseDate")} placeholder="ReleaseDate"
                    />
           
            <input {...register("Budget")} className="bg-purple-100 px-2  focus:bg-purple-200  mt-4 w-60 h-8 rounded" type="number" placeholder="Budget" />
            <input {...register("Collection")} className="bg-purple-100 px-2 focus:bg-purple-200  mt-4 w-60 h-8 rounded" type="number" placeholder="Collection" />
            <input className="bg-purple-100 px-2  focus:bg-purple-200 mt-4 w-60 h-8 rounded" type="file" onChange={handleImageUpload} />
{isImgUploaded &&<small className="text-green-700">Image Uploaded Successfully</small>}
            
          <input className="bg-blue-500 px-2  focus:bg-blue-900 text-gray-50  mt-4 w-36 h-8 hover:bg-blue-800 rounded"type="submit" value="Submit" />
          {
            isSubmitSuccess &&<small className="text-green-700">Submit Successfully</small>
          }
        </form>
</div>
   </div>
</div>
    );
};

export default AddMovie;
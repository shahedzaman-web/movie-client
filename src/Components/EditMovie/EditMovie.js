import React, { useEffect, useState } from 'react';
import axios from "axios"
import { useHistory } from 'react-router-dom';
import Navbar from "./../Navbar/Navbar"
import "./EditMovie.css"
const EditMovie = ({setUpdateMovieInfo}) => {
  const [movieData, setMovieData] = useState([]);
  // eslint-disable-next-line
  const [ error,setError]=useState(null)
  // eslint-disable-next-line
  const [loading,setLoading]=useState(true)
  const [isDeleted,setIsdeleted]=useState(false)
  const history= useHistory()
  
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
      .finally(() => {
        setLoading(false)
      })
  },[isDeleted])

  const handleUpdate=(id,movie)=>{
    console.log(id)
    history.push(`/update/${id}`)
    setUpdateMovieInfo(movie)
    console.log(movie);
}
  const handleDelete=(id)=>{
    console.log(id);
    axios.delete(`https://protected-wildwood-00886.herokuapp.com/deleteMovie/${id}`)  
      .then(res => {  
        console.log(res);  
        console.log(res.data);  
        setIsdeleted(true)
      })
    }
   
  
    return (
      <div className="table editPage-bg h-screen  w-full p-2">
        <Navbar></Navbar>
       <div className="mx-4">
       <table className="w-full border">
            <thead>
                <tr className="bg-gray-50 border-b">
                 
                    <th className="p-2 border-r cursor-pointer text-sm text-gray-500">
                        <div className="flex items-center justify-center">
                            ID
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </th>
                    <th className="p-2 border-r cursor-pointer text-sm   text-gray-500">
                        <div className="flex items-center justify-center">
                            Movie Title
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </th>
                    <th className="p-2 border-r cursor-pointer text-sm   text-gray-500">
                        <div className="flex items-center justify-center">
                        Language
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </th>
                    <th className="p-2 border-r cursor-pointer text-sm   text-gray-500">
                        <div className="flex items-center justify-center">
                      Release Date
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </th>
                    <th className="p-2 border-r cursor-pointer text-sm   text-gray-500">
                        <div className="flex items-center justify-center">
                            Action
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                       {
                         movieData.map((movie,index)=>(
                         <tr className="bg-gray-100 text-center border-b text-sm text-gray-600"   key={index}>
                          <td className="p-2 border-r">{index}</td>
                          <td className="p-2 border-r">{movie.MovieName}</td>
                          <td className="p-2 border-r">{movie.Language}</td>
                          <td className="p-2 border-r">{movie.ReleaseDate}</td>
                          <td>
                              
                              <button className="bg-red-500 p-2 text-white hover:shadow-lg hover:bg-red-700   text-xs " onClick={()=>handleDelete(movie._id)}>Remove</button>
                              <button className="bg-blue-500 hover:bg-blue-700 p-2 text-white hover:shadow-lg text-xs " onClick={()=>handleUpdate(movie._id,movie)}>Edit</button>
                            
                          </td>
                          </tr>
                         
                         
                         ))
                       }
            </tbody>
        </table>
       </div>
    </div>
    );
};

export default EditMovie;
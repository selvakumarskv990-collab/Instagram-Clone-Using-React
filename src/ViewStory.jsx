import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom"


function ViewStory() {

  const {id,exit} = useParams();

  const navigate = useNavigate();

  const[viewstory,setviewStory] = useState(null);
  
  useEffect(()=>{

    fetch(`http://localhost:3000/story/${id}`)
    .then(data => data.json())
    .then(data => setviewStory(data))
    .catch(err => console.log(err))

  },[id])

  useEffect(() => {
    const numId = Number(id);
    const numExit = Number(exit);
    if (isNaN(numId) || isNaN(numExit) || numId > numExit || numId <= 0) {
      navigate("/");
    }
  }, [id, exit, navigate]);


  return (
    <div>
      {viewstory ? (
        <div className='d-flex justify-content-center align-items-center'>
          <Link to={`/viewStory/${Number(id) - 1}/${exit}`}>
            <i className="biarrow bi-arrow-left-circle-fill"></i>
          </Link>
          <img className="vh-100" src={viewstory.image} alt='story' />
          <Link to={`/viewStory/${Number(id) + 1}/${exit}`}>
            <i className="biarrow bi-arrow-right-circle-fill"></i>
          </Link>
        </div>
      ) : (
        <div>Loading</div>
      )}
        
        </div>
  )
}

export default ViewStory
import React, { useEffect, useState } from 'react'
import ViewStory from './ViewStory';
import { Navigate, useNavigate } from 'react-router-dom';

function Story() {

    const [story,setStory] = useState([]);
    const navigate = useNavigate();

    let exit = 0;

    useEffect(()=>{

      fetch("http://localhost:3000/story")
      .then(data => data.json())
      .then(data => setStory(data))
      .catch(err => console.log(err))

    },[]);

      exit = story.length;
    

  return (
    <div className=" story d-flex ">
      
      {story.length > 0 ? (
        <>
          {story.map((stories) => (
            <div key={stories.id}>
              <div className='outerdp' onClick={()=>{navigate(`/viewstory/${stories.id}/${exit}`)}}> 
                 <img className=" story-dp " src={stories.user.profile_pic} alt='DP' />
              </div>
              <p className='text-truncate' style={{width:"80px"}}>{stories.user.username}</p>
            </div>
          ))}
        </>
      ) : (
        <p>Story Loading ...</p>
      )}



    </div>
  )
}

export default Story
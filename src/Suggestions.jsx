import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Suggestions() {

  const [profile,setProfile] = useState(null);
  const[suggestions,setSuggestions] = useState([]);

useEffect(()=>{
  fetch("http://localhost:3000/profile")
  .then((data => data.json()))
  .then((data => setProfile(data)))
  .catch((err => console.log(err)))


    fetch("http://localhost:3000/suggestions")
  .then((data => data.json()))
  .then((data => setSuggestions(data)))
  .catch((err => console.log(err)))
  
},[])

   const updateFollowers = async (id, username) => {
  axios.post('http://localhost:3000/followers', {
    id: id,
    username: username
  })
  .then(() => {
    alert("Followed");
  })
  .catch(err => console.log(err));
};


  return (
    <div>
      <div className=' suggestionprofile m-5'>
        {profile  ?
         <div className=' d-flex ' >
              <img className='pp mt-0 rounded-circle' src={profile.profile_pic} alt='Profile Pic'/>
               <h5>{profile.username}</h5>
               <small className='text-primary ms-auto'>switch</small>
               </div>
        :
       <p>Loading Profile</p>}

       <div className='d-flex mt-2'>
        <p>Suggested for you</p>
        <b className='ms-auto'>See All</b>
       </div>

        {suggestions.length > 0 ?
        (<div>

           {suggestions.map((e)=>(
            <div key = {e.id}>
                <div className='d-flex mb-3'>
                    <img className='pp rounded-circle' src={e.profile_pic} alt='Profile Pic'/>
                    <h5>{e.username}</h5>
                    <button className='text-primary ms-auto btn' onClick={()=>{updateFollowers(e.id,e.username)}}>Follow</button>
                </div>
              

                </div>
           ))}
          
            </div>):
            (<div>
                Loading Posts...
                </div>)
                }
      
      
      

       

       </div>
         
    </div>

    
  )
}

export default Suggestions
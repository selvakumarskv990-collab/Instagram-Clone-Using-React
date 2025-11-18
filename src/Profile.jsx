import React, { useEffect, useState } from 'react'
import axios from 'axios'


function Profile() {

      const [profile,setProfile] = useState();
      const [follower,setFollower] = useState([]);
      const [unfollowed,setUnFollowed] = useState();

      useEffect(()=>{

          axios.get('http://localhost:3000/profile')
          .then(data =>setProfile(data.data))
          .catch(err => console.log(err))

          axios.get('http://localhost:3000/followers')
          .then(data =>setFollower(data.data))
          .catch(err=>console.log(err))
      },[unfollowed]);
    
      function handleonChange(e){
        setProfile(prev =>({
          ...prev, [e.target.name]:[e.target.value]
        }))

      }

      const handleUpdate = async()=>{
        axios.put('http://localhost:3000/profile',profile)
        .then(alert('Updated profile Information'))
        .catch(err=>(console.log(err)))
      }

      const handleDelete = async(id)=>{
        axios.delete(`http://localhost:3000/followers/${id}`)
        .then(alert("Unfollowed"))
        .then(setUnFollowed(!unfollowed))
        .catch(err =>console.log(err))
      }



  return (
    <div className ='profile m-5'>

    {profile ? (<div>

        <img src={profile.profile_pic} className='image w-10 h-10 rounded-circle'/>
        <h4 className='m-4'>{profile.username}</h4>
      
        <input type='text' value={profile.username} name='username' 
        onChange = {handleonChange} 
        className='form-control m-4'/>
        <input type='text' value={profile.profile_pic} name='profile_pic'
        onChange = {handleonChange} 
        className='form-control m-4'/>

        <button onClick = {handleUpdate} className='btn btn-success ms-4'>Update</button>


    </div>
  
  ):(
  
  <div>Loading...</div>
  
  )}
  <div className='mx-5'>
  <h3 className='d-flex  justify-content-center'>Followers</h3>
  {follower ?(
    follower.map(followers =>
    <div key={followers.id} className='d-flex'>
      {followers.username}
      <button className='btn btn-danger ms-auto m-1' onClick={()=>{handleDelete(followers.id)}}>unFollow</button>
    </div>
    )
  ):(
  <div>Loading..</div>
  )}
</div>

    </div>
  )
}

export default Profile
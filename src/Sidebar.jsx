import React from 'react'
import instagramtext from "./assets/instagram-text-logo.png"
import { useNavigate } from 'react-router-dom'


function Sidebar() {

    const navigate = useNavigate();

  return (
    <div className="sidebar m-4 position-fixed">
   
    <div className='d-flex flex-column gap-3'>
    <img className= "logo-text" src={instagramtext} alt='Instagram'/>
    <div><i className="bi bi-house-door"></i>Home</div>
     <div><i className="bi bi-search"></i>Search</div>
     <div><i className="bi bi-compass"></i>Explore</div>
      <div><i className="bi bi-collection-play"></i>Reels</div>
       <div><i className="bi bi-chat-dots"></i>Messages</div>
       <div><i className="bi bi-chat-square-heart"></i>Notification</div>
       <div><i className="bi bi-calendar2-plus"></i>Create</div>
       <div onClick={()=>{navigate("/profile")}}><i className="bi bi-person-circle"></i>Profile</div>
       </div>
       <div className='position-fixed bottom-0 d-flex flex-column gap-3 mb-4'>
        <div><i className="bi bi-threads"></i>Threads</div>
        <div><i className="bi bi-list"></i>More</div>
       </div>

       </div>
  )
}

export default Sidebar
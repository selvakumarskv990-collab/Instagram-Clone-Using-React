import React, { useEffect, useState } from 'react'

function Posts() {

    const [posts,setPosts] = useState([]);

    useEffect(()=>{

        fetch("http://localhost:3000/data")
        .then((data)=>(data.json()))
        .then((data=>setPosts(data)))
        .catch(err=>(console.log(err)))


    },[]);


  return (
    <div className='d-flex justify-content-center '>
        {posts.length > 0 ?
        (<div>

           {posts.map((post)=>(
            <div key = {post.id}>
                <div className='d-flex'>
                    <img className='pp rounded-circle' src={post.user.profile_pic} alt='Profile Pic'/>
                    <h4>{post.user.username}</h4>
                </div>
                <div>
                  <img className='pi'  src={post.image} alt='New Post'/>
                </div>
                <div className='icon'>
                <i className="bi bi-heart"></i>
                <i className="bi bi-chat"></i>
                <i className="bi bi-send"></i>
                </div>
                <div>
                    <b>{post.likes}Likes</b>
                </div>
                <div className='caption'>{post.caption}</div>

                </div>
           ))}
          
            </div>):
            (<div>
                Loading Posts...
                </div>)
                }
 

    </div>
  )
}

export default Posts
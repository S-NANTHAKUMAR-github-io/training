import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../Component/Loader';
import Posts from '../Component/Posts';

function Hooks() {
    const [posts, setposts] = useState(null)

    useEffect(() => {
  
      //axios method
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => setposts(res.data))
  
  
  
      //fetch method 
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then(data => data.json())
      .then(data => {
        setposts(data);
      })



    }, [])
    
  return (
    
    <div className='container'>
    {
      posts ?
    (posts.map((post) => {
          return <Posts key={post.id} title={post.title} body={post.body} />
            
        })
        
      
    ) : ( <Loader /> )
    }
  </div>
  )
}

export default Hooks
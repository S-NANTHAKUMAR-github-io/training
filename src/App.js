import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import axios from 'axios';
import Loader from './Components/Loader';
import Posts from './Components/Posts';

function App() {

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
    <div className="App">
        <Navbar />
        <div className='container'>
          {
            posts ?
          (posts.map((post) => {
                return <Posts key={post.id} title={post.title} body={post.body} />
                  
              })
              
            
          ) : ( <Loader /> )
          }
        </div>
    </div>
  );
}

export default App;

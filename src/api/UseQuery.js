import React from 'react'
import {useQuery} from 'react-query'
import Posts from '../Component/Posts'
import Loader from '../Component/Loader'
function UseQuery() {
    const{isLoading, error, data} = useQuery('mydata',() => 
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
    )

    if(isLoading) return <h4> Loading....</h4>

    if(error){
        return <h4>`Error:{error.message}`</h4>
    }
  return (
    <div>
         {
      data ?
    (data.map((post) => {
          return <Posts key={post.id} title={post.title} body={post.body} />
            
        })
        
      
    ) : ( <Loader /> )
    }
        
        
    </div>
  )
}

export default UseQuery
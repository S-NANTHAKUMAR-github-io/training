import React from 'react'

function Posts({title, body}) {
  return (
    <div>
       <div className="card mt-3">
                    <div className="card-body">
                      <h5 className="card-title">{title}</h5>
                      <p className="card-text">{body}</p>
                      <a className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
    </div>
  )
}

export default Posts;
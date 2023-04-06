import React from 'react'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-blue bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Nandhu</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link active" aria-current="page" href="#">React</a>
          <a className="nav-link" href="#">Training</a>
          <a className="nav-link" href="#">Api</a>
          <a className="nav-link" href="#" aria-disabled="true">fetch</a>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
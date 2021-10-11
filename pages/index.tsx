import React from 'react';
import Navbar from '../components/Header'

function Heading(props:any) {
  return(
    <div className="ContainerNavbar">
      <div className="Navbar">
        <button className="BtnHome bttn"></button>
        <button className="MyBoards bttn">My Boards</button>
        <button className="CreateBoard bttn">Create Board</button>
        <a href="">
          <img className="logo" width="138" height="45"></img></a>
        <a href="">
          <img className="LoginIcon"></img>
          </a>
      </div>
    </div>
  )
}

function HomePage() {
  
  return (
    <div>
      <Heading heading="Header">

      </Heading>
    </div>
  )

}

export default HomePage;

import Brand from '../images/Brand.svg'

export default function Heading(props:any) {
  return(
    <div className="ContainerNavbar">
      <div className="Navbar">
        <button className="BtnHome bttn"></button>
        <button className="MyBoards bttn">My Boards</button>
        <button className="CreateBoard bttn">Create Board</button>
        <a href="#" className="brand">
          {/* <img className="brandImg" width="138" height="32" src="../images/Brand.jpg" alt="brand"/>
           */}
           
          </a>
        <a href="#" className="LoginIcon">
          {/* <img  width="138" height="32" src={Brand} alt="profile"/>
           */}
           <div className="LoginImg"></div>
        </a>
      </div>
    </div>
  )
}
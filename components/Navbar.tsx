import Brand from '../images/Brand.svg'

export default function Heading(props:any) {
  return(
    <div className="ContainerNavbar">
      <div className="Navbar">
        <button className="Navbar__BtnHome bttn"></button>
        <button className="Navbar__MyBoards bttn">My Boards</button>
        <button className="Navbar__CreateBoard bttn">Create Board</button>
        <a href="#" className="Navbar__brand">
          {/* <img className="brandImg" width="138" height="32" src="../images/Brand.jpg" alt="brand"/>
           */}

          </a>
        <a href="#" className="Navbar__LoginIcon">
          {/* <img  width="138" height="32" src={Brand} alt="profile"/>
           */}
           <div className="Navbar__LoginImg"></div>
        </a>
      </div>
    </div>
  )
}
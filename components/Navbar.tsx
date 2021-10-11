import profile from '../public/profile.svg'
import Button from '@material-ui/core/Button'

export default function Heading(props:any) {
  return(
    <div className="ContainerNavbar">
      <div className="Navbar">
        <Button className="Navbar__BtnHome bttn" variant="contained"></Button>
        <Button className="Navbar__MyBoards bttn" variant="contained">My Boards</Button>
        <Button className="Navbar__CreateBoard bttn" variant="contained">Create Board</Button>
        <a href="#" className="Navbar__brand">
          </a>
        <a href="#" className="Navbar__LoginIcon">
          {/* <img width="41" height="41" src={profile} alt="profile"/> */}
           <div className="Navbar__LoginImg"></div>
        </a>
      </div>
    </div>
  )
}
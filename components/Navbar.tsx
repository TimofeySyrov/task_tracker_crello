import Button from '@material-ui/core/Button';
import UserAvatar from './avatar';

function Header() {
  return (
    <div className="containerNavbar">
      <div className="navbar">
        <Button sx={{
          backgroundColor: '#284968',
          position: 'relative',
        }}
        variant="contained">
        </Button>
        <Button sx={{
          width: 160,
          height: 41,
          position: 'relative',
          ml: 4,
          backgroundColor: '#4E97C2',
        }}
        className="navbar__myBoards bttn"
        variant="contained"> My Boards
        </Button>
        <Button sx={{
          ml: 4,
          backgroundColor: '#4E97C2',
        }}
        className="bttn"
        variant="contained">Create Board
        </Button>
        <a href="#" className="navbar__brand"></a>
        <a href="#" className="navbar__LoginIcon"></a>
        {/* <img width="41" height="41" src={profile} alt="profile"/> */}
        <UserAvatar />
      </div>
    </div>
  );
}

export default Header;

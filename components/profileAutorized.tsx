import { Box } from '@mui/material';
import ProfileCard from './profileCard';
import UserAvatar from './avatar';
import Button from '@material-ui/core/Button';


function AuthProfile() {
  return(
    <Box sx={{
          position:'absolute', 
          top: 220, 
          display: 'flex'
          }}>
        <UserAvatar/>
        <Box width={380}>
        <ProfileCard />
        </Box>
    </Box>
  )
}

export default AuthProfile
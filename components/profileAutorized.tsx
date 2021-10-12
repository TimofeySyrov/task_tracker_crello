import {Box} from '@mui/material';
import ProfileCard from './profileCard';
import UserAvatar from './avatar';
import Header from '../components/navbar';

function AuthProfile() {
  return (
    <>
      <Header />
      <Box sx={{
        position: 'absolute',
        top: 220,
        left: '30%',
        display: 'flex',
      }}>
        <UserAvatar/>
        <Box width={380}>
          <ProfileCard />
        </Box>
      </Box>
    </>
  );
}

export default AuthProfile;

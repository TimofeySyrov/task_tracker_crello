import { Box, Container } from '@mui/material';

import LoginButton from '../components/loginButton';
import ProfileCard from '../components/profileCard';
import UserAvatar from '../components/avatar';
import storage from '../storage/storage';

function Account() {
  if (storage.authorization.isLogin) {
    storage.profile.getData();

    return (
      <Container>
        <Box sx={{ display: 'flex', gap: '19px', marginTop: '177px' }}>
          <UserAvatar />
          <Box width={380}>
            <ProfileCard />
          </Box>
        </Box>
      </Container>
    );
  }

  return (
    <Box
      sx={{
        height: 'calc(100vh - 49px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <LoginButton />
    </Box>
  );
}

export default Account;

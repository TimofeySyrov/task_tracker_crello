import { AppBar, Button, Box, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { useAuth } from '../services/AuthProvider';
import UserAvatar from './avatar';
import HomeIcon from '../public/images/home.svg';
import BoardsIcon from '../public/images/boards.svg';
import LogoIcon from '../public/images/logo.svg';
import { observer } from 'mobx-react';
import useStore from '../hooks/useStore';

const Header = observer(() => {
  const router = useRouter();
  const isLoginIn = useAuth();
  const { user } = useStore();

  return (
    <AppBar position="static" sx={{ height: '49px', backgroundColor: 'secondary.main' }}>
      <Toolbar variant="dense" sx={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr' }}>
        <Box sx={{ display: 'flex', gap: '4px' }}>
          <Link href="/">
            <Button
              variant="contained"
              sx={{
                width: '41px',
                height: '41px',
                boxSizing: 'border-box',
                padding: '0',
                backgroundColor: router.asPath === '/' ? '#284968' : '#4E97C2',
              }}
            >
              <Image src={HomeIcon} width={17} height={19} alt="" />
            </Button>
          </Link>
          <Link href="/boards">
            <Button
              variant="contained"
              sx={{
                width: '160px',
                height: '41px',
                display: 'flex',
                justifyContent: 'space-between',
                backgroundColor: router.asPath === '/boards' ? '#284968' : '#4E97C2',
                textTransform: 'capitalize',
                fontSize: '20px',
                letterSpacing: 'normal',
              }}
            >
              <Image src={BoardsIcon} alt="" /> my boards
            </Button>
          </Link>
          <Link href="/creating-board">
            <Button
              variant="contained"
              sx={{
                width: '142px',
                height: '41px',
                padding: '0',
                backgroundColor: router.asPath === '/creating-board' ? '#284968' : '#4E97C2',
                textTransform: 'capitalize',
                fontSize: 'h3.fontSize',
              }}
            >
              create board
            </Button>
          </Link>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Image src={LogoIcon} alt="" />
          <Typography component="h1" variant="h1" color="text.secondary" fontStyle="italic">
            Crello
          </Typography>
        </Box>
        <Box sx={{ ml: 'auto' }}>
          {isLoginIn && user.activeUser ? (
            <UserAvatar
              size="mini"
              alt={user.activeUser.fullName}
              src={user.activeUser.avatarUrl + '/50.png'}
            />
          ) : (
            <UserAvatar size="mini" />
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
});

export default Header;

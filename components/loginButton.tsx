import Link from 'next/link';
import { observer } from 'mobx-react';
import { Button } from '@mui/material';
import authorization from '../states/authorization';

const LoginButton = observer(() => (
  <Link href="">
    <Button sx={{
            textTransform:'uppercase',
            fontSize: 18,
            letterSpacing: 0.75,
            width: 200,
            height: 50,
            position: 'absolute',
            top: '50%',
            left: '40%',
            }}
            className="bttn" 
            variant="contained" 
            onClick={() => authorization.login()}>
      Authorization
    </Button>
  </Link>
));

export default LoginButton;

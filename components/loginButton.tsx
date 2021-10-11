import Link from 'next/link';
import { observer } from 'mobx-react';
import { Button } from '@mui/material';

import authorization from '../states/authorization';

const LoginButton = observer(() => (
  <Link href="/">
    <Button className="content__authorization bttn" variant="contained" onClick={() => authorization.login()}>
      Authorization
    </Button>
  </Link>
));

export default LoginButton;

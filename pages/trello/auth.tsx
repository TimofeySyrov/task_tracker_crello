import { useRouter } from "next/router";
import { useEffect } from "react";

import AuthService from "../../services/AuthService";

const Auth = () => {
  const router = useRouter();

  // Browser side
  useEffect(() => {
    const tokenHashName = `${process.env.NEXT_PUBLIC_TOKEN_HASH_NAME}`;
    const urlHash = router.asPath.replace(router.pathname, '');
    const token = urlHash.replace(tokenHashName, '').replace(/[\s#=]/g, '');

    AuthService.saveToken(token); // save the token to localStorage
    router.push('/'); // redirect to the home page
  })

  return (<>Загрузка...</>);
}

export default Auth;
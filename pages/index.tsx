import Header from '../components/navbar';
import LoginBtn from '../components/loginButton';
import authorization from '../states/authorization';
import AuthProfile from '../components/profileAutorized';

function HomePage() {
  if (authorization.isLogin) {
    return (
      <AuthProfile />
    );
  }

  return (
    <>
      <Header />
      <LoginBtn />
    </>
  );
}

export default HomePage;

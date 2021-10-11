import React from 'react';
import Heading from '../components/Navbar'
import Content from '../components/Content'
import authorization from '../states/authorization';
import AuthProfile from '../components/profile-autorized'


export default function HomePage() {

  if (authorization.isLogin) {
    return (
     <AuthProfile />
    );
  }

  return (
    <div>
      <Heading/> 
      <Content/>
    </div>
  )

}

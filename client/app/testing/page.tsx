import React from 'react';
import NavBar from '../components/SimpleUser/NavBar';

const page = () => {
  return (
    <div className='w-full h-[100vh] flex flex-col items-center justify-center relative'>
        <NavBar />
        <p>Welcome to the testing page</p>
    </div>
  )
}

export default page;

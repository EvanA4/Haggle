import React from 'react';
import NavBar from '../components/SimpleUser/NavBar';
import GameServer from '../components/SimpleUser/GameServer';

const page = () => {
  return (
    <div className='w-full h-[100vh] flex flex-col items-center justify-center relative gap-5'>
        <NavBar />

        <p>Welcome to the testing page</p>
        <GameServer />
    </div>
  )
}

export default page;

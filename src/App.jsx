import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import { Suspense, useState } from 'react'
import AvailablePlayer from './Components/AvailablePlayer/S/AvailablePlayer';
import SelectedPlayer from './Components/SelectedPlayer/SelectedPlayer';

const playerFetch = async () => {
  const res = await fetch('/players.json');
  return res.json();
}


function App() {

  const [toggle, setToggle] = useState(true);

  const playerPromise = playerFetch();
  return (
    <>

      {/*------------Naviagtion Section--------------------*/}
      <Navbar></Navbar>
      {/*-------------Banner Section----------------------*/}
      <Banner></Banner>
      {/* Avaiable and Selcted Player Toggler  */}
      <div className='max-w-10/12 mx-auto flex-col text-center items-center  md:flex md:flex-row md:justify-between mb-7'>
        <div className='font-bold text-2xl'>{toggle ? "Available Players" : "Selected Players"}</div>
        <div className='flex justify-center mt-2 md:mt-0'>
          <button onClick={() => setToggle(true)} className={`btn ${toggle ? `bg-[#e7fe29]` : `bg-[]`} border-r-0 rounded-l-xl px-7 py-5`}>Available</button>
          <button onClick={() => setToggle(false)} className={`btn border-l-0 ${!toggle ? `bg-[#e7fe29]` : `bg-[]`} rounded-r-xl px-7 py-5`}>Selected <span>(0)</span></button>
        </div>
      </div>

      {/* Available and Selected PLayer Cards  */}
      {
        toggle ? <Suspense fallback ={<div className='flex justify-center'><span className="loading loading-spinner text-warning"></span></div>}>
          <AvailablePlayer playerPromise={playerPromise}></AvailablePlayer>
        </Suspense>
          : <SelectedPlayer></SelectedPlayer>
      }



    </>
  )
}

export default App

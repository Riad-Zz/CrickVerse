import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import { useState } from 'react'


function App() {
  
  const [toggle,setToggle] = useState(true) ;
  return (
    <>
      
      {/*------------Naviagtion Section--------------------*/}
      <Navbar></Navbar>
      {/*-------------Banner Section----------------------*/}
      <Banner></Banner>
      {/* Avaiable and Selcted Player Toggler  */}
      <div className='flex justify-between items-center max-w-11/12 mx-auto'>
        <div className='font-bold text-2xl'>{toggle ? "Available Players":"Selected Players"}</div>
        <div>
          <button onClick={()=>setToggle(true)} className={`btn ${toggle ? `bg-[#e7fe29]` : `bg-[]` } border-r-0 rounded-l-xl px-7 py-5`}>Available</button>
          <button onClick={()=>setToggle(false)} className={`btn border-l-0 ${!toggle ? `bg-[#e7fe29]` : `bg-[]`} rounded-r-xl px-7 py-5`}>Selected <span>(0)</span></button>
        </div>
      </div>
    </>
  )
}

export default App

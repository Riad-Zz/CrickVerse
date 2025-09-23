import './App.css'
import { ToastContainer} from 'react-toastify';
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import { Suspense, useState } from 'react'
import AvailablePlayer from './Components/AvailablePlayer/S/AvailablePlayer';
import SelectedPlayer from './Components/SelectedPlayer/SelectedPlayer';
import 'react-toastify/dist/ReactToastify.css'
import Footer from './Components/Footer/Footer';

const playerFetch = async () => {
  const res = await fetch(`${import.meta.env.BASE_URL}players.json`);
  return res.json();
}

const playerPromise = playerFetch();

function App() {

  const [toggle, setToggle] = useState(true);
  const[coin,setCoin] = useState(5000000) ;
  const [pickedPlayer,setPickedPlayer] = useState([]) ;

  const removeFunctionality = (player) =>{
    const filteredPlayer = pickedPlayer.filter(p => player.name != p.name) ;
    setPickedPlayer(filteredPlayer) ;
    setCoin(coin + player.price) ;
  }
  
  return (
    <>

      {/*------------Naviagtion Section--------------------*/}
      <Navbar coin ={coin}></Navbar>
      {/*-------------Banner Section----------------------*/}
      <Banner></Banner>
      {/* Avaiable and Selcted Player Toggler  */}
      <div className='max-w-10/12 mx-auto flex-col text-center items-center  md:flex md:flex-row md:justify-between mb-7'>
        <div className='font-bold text-2xl'>{toggle ? "Available Players" : `Selected Player (${pickedPlayer.length}/6)`}</div>
        <div className='flex justify-center mt-2 md:mt-0'>
          <button onClick={() => setToggle(true)} className={`btn ${toggle ? `bg-[#e7fe29]` : `bg-[]`} border-r-0 rounded-l-xl px-7 py-5`}>Available</button>
          <button onClick={() => setToggle(false)} className={`btn border-l-0 ${!toggle ? `bg-[#e7fe29]` : `bg-[]`} rounded-r-xl px-7 py-5`}>Selected<span>({pickedPlayer.length})</span></button>
        </div>
      </div>

      {/* Available and Selected PLayer Cards  */}
      {
        toggle ? <Suspense fallback ={<div className='flex justify-center'><span className="loading loading-spinner text-warning"></span></div>}>
          <AvailablePlayer playerPromise={playerPromise} setCoin= {setCoin} coin = {coin} pickedPlayer = {pickedPlayer} setPickedPlayer = {setPickedPlayer}></AvailablePlayer>
        </Suspense>
          : <SelectedPlayer pickedPlayer = {pickedPlayer} removeFunctionality={removeFunctionality} setToggle ={setToggle} ></SelectedPlayer>
      }

      <Footer></Footer>
     <ToastContainer />
    </>
  )
}

export default App

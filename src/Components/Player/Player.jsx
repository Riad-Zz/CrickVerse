
import Virat from '../../assets/virat.jpg'
import User from '../../assets/User.svg'
import Flag from '../../assets/flag.svg'

const Player = ({player,setCoin,coin,setPickedPlayer,pickedPlayer}) => {
    //legend -> bg-gradient-to-r from-gray-200 to-gray-50 border-2 border-amber-400 text-gray-900 rounded-xl p-4 shadow-md
    //
    
    const chosed = pickedPlayer.some(p => player.id === p.id)
    const handleChoosePlayer = ()=>{
        if(coin >= player.price){
            setCoin(coin - player.price) 
            // setChosed(true) ;
            // setPickedPlayer(...pickedPlayer,player) 
            setPickedPlayer([...pickedPlayer,player]) ;
            
        }else{
            alert("Not enough coin")
        }
    }
    return (
        <div className={` border-[#1313131a] bg-gradient-to-r from-gray-100 to-gray-50 border-2  text-gray-900 rounded-xl p-4 shadow-md shadow-indigo-100/60`}>
            <img src={player.photo} alt="" className='rounded-2xl md:h-[295px] w-full object-cover' /> 
            <div className='flex mt-6 mb-4 gap-2'>
                <img src={User} alt="" />
                <p className='font-bold text-xl'>{player.name}</p>
            </div>
            <div className='flex justify-between items-center border-b-1'>
                <div className='flex gap-2'>
                    <img src={player.flag} alt="" className='h-5 w-5 rounded-full'/>
                    <p className='font-semibold'>{player.country}</p>
                </div>
                <div>
                    <button className='btn rounded-xl mb-4 bg-[#1313130d]'>{player.role}</button>
                </div>
            </div>
            <div className='flex justify-between my-3'>
                <p className='font-bold'>Rating</p>
                <p className='font-bold'>{player.rating}</p>
            </div>
            <div className='flex justify-between'>
                <p className='font-bold'>{player.battingStyle}</p>
                <p>{player.bowlingStyle ? player.bowlingStyle : ""}</p>
            </div>
            <div className='flex justify-between items-center my-3'>
                <p className='font-bold'>Price $<span>{player.price}</span></p>
                <div>
                    <button disabled = {chosed}  onClick={()=>handleChoosePlayer()} className={`btn rounded-[8px] bg-white`}>Choose Player</button>
                </div>
            </div>
        </div>
    );
};

export default Player;
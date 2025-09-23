import React, { use } from 'react';
import Player from '../../Player/Player';



const AvailablePlayer = ({playerPromise,setCoin,coin,pickedPlayer,setPickedPlayer}) => {
    const allPlayersJSon = use(playerPromise) ;
    // console.log(allplayers.players) ;
    const allPlayers = allPlayersJSon.players 
    return (
        <div className='max-w-10/12 mx-auto grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-[150px]'>
            {
                allPlayers.map(player => <Player player = {player} key={player.id} setCoin = {setCoin} coin ={coin} pickedPlayer = {pickedPlayer} setPickedPlayer = {setPickedPlayer} ></Player>)
            }
        </div>
    );
};

export default AvailablePlayer;
import React, { use } from 'react';
import Player from '../../Player/Player';


const AvailablePlayer = ({playerPromise}) => {
    const allPlayersJSon = use(playerPromise) ;
    // console.log(allplayers.players) ;
    const allPlayers = allPlayersJSon.players 
    return (
        <div className='max-w-10/12 mx-auto grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                allPlayers.map(player => <Player player = {player} key={player.id}></Player>)
            }
        </div>
    );
};

export default AvailablePlayer;
import React from 'react';
import Virat from '../../assets/virat.jpg'
import DelIcon from '../../assets/DeleteIcn.svg'
import SelectedPlayerUi from '../SelectedPlayerUi/SelectedPlayerUi';
import Player from '../Player/Player';

const SelectedPlayer = ({pickedPlayer}) => {
    // console.log(pickedPlayer)
    return (
        <div>
            {/* <SelectedPlayerUi></SelectedPlayerUi>
            <SelectedPlayerUi></SelectedPlayerUi>
            <SelectedPlayerUi></SelectedPlayerUi> */}
            {
                pickedPlayer.map(Player => <SelectedPlayerUi Player ={Player} ></SelectedPlayerUi>)
            }
        </div>
    );
};

export default SelectedPlayer;
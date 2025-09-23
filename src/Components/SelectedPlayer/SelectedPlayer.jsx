import React from 'react';
import Virat from '../../assets/virat.jpg'
import DelIcon from '../../assets/DeleteIcn.svg'
import SelectedPlayerUi from '../SelectedPlayerUi/SelectedPlayerUi';
import Player from '../Player/Player';

const SelectedPlayer = ({ pickedPlayer, removeFunctionality,setToggle }) => {
    // console.log(pickedPlayer)
    return (
        <div>
            {/* <SelectedPlayerUi></SelectedPlayerUi>
            <SelectedPlayerUi></SelectedPlayerUi>
            <SelectedPlayerUi></SelectedPlayerUi> */}
            {
                pickedPlayer.map(Player => <SelectedPlayerUi Player={Player} removeFunctionality={removeFunctionality} ></SelectedPlayerUi>)
            }
            <div className='max-w-10/12 mx-auto py-5 '>
                <div className='border p-2 inline-block rounded-xl border-black '>
                    <button onClick={()=>setToggle(true)} className="btn bg-[#e7fe29] rounded-xl py-6 px-7 border-none font-bold ">Add More Player</button>
                </div>
            </div>

        </div>
    );
};

export default SelectedPlayer;
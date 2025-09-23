import React from 'react';
import Virat from '../../assets/virat.jpg'
import DelIcon from '../../assets/DeleteIcn.svg'

const SelectedPlayerUi = ({Player,removeFunctionality}) => {
    return (
        <div className='max-w-10/12 mx-auto flex justify-between items-center border border-[#1313131a] rounded-xl p-4 mb-5'>
                    <div className='flex gap-6 items-center'>
                        <div>
                            <img src={Player.photo} alt="" className='w-20 h-20 object-cover rounded-2xl' />
                        </div>
                        <div>
                            <p className='font-bold text-xl'>{Player.name}</p>
                            <p className='text-[#13131399] mt-3'>{Player.battingStyle}</p>
                        </div>
                    </div>
                    <div className='md:mr-5 cursor-pointer'>
                        <img src={DelIcon} alt="" onClick={()=>removeFunctionality(Player)} />
                    </div>
                </div>
    );
};

export default SelectedPlayerUi;
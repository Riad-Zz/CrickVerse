import React from 'react';
import Logo from '../../assets/logo.png'
import Coin from '../../assets/coin.png'

const Navbar = () => {
    return (
        <div>
            <div className="navbar max-w-11/12 mx-auto mt-2 mb-6">
                <div className="flex-1">
                    <img src={Logo} alt="Crickverse Logo" className='h-12  md:h-auto w-auto' />
                </div>
                <div>
                    <div className='flex gap-12 items-center'>
                        <div className='gap-12 items-center hidden md:flex'>
                            <div className=' text-[#131313b3]'>
                                <a href="#">Home</a>
                            </div>
                            <div className=' text-[#131313b3]'>
                                <a href="#">Fixture</a>
                            </div>
                            <div className=' text-[#131313b3]'>
                                <a href="#">Teams</a>
                            </div>
                            <div className=' text-[#131313b3]'>
                                <a href="#">Schedules</a>
                            </div>
                        </div>


                        <button className='btn px-5 py-4 bg-white rounded-xl'>
                            <div className='font-bold'>
                                <span className='mr-1'>0</span>Coin
                            </div>
                            <img src={Coin} alt="" className='w-6 h-6' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
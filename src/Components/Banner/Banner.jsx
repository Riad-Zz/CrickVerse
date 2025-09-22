import React from 'react';
import BGImage from '../../assets/bg-shadow.png'
import HeroImage from '../../assets/banner-main.png'

const Banner = () => {
    return (
        <div>
            <div
                className="hero max-w-11/12 mx-auto rounded-3xl py-10 mb-20"
                style={{
                    backgroundImage:
                        `url(${BGImage})`,
                    backgroundColor : "rgba(19, 19, 19, 1)" ,
                    backgroundSize : 'Cover'
                }}
            >
                
                <div className="hero-content text-neutral-content text-center flex-col">
                    <div>
                        <img src={HeroImage} alt="" />
                    </div>
                    <div className="">
                        <h1 className="text-4xl font-bold my-5">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                        <p className="mb-5 text-[#ffffffb3] text-2xl">
                            Beyond Boundaries Beyond Limits
                        </p>
                        <div className=' border p-2 inline-block rounded-xl border-[#e7fe29] '>
                            <button className="btn bg-[#e7fe29] rounded-xl py-6 px-7 border-none font-bold ">Claim Free Credit</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
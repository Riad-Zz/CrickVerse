import React from 'react';
import FooterLogo from '../../assets/logo-footer.png'
import BGImage from '../../assets/bg-shadow.png'
import HeroImage from '../../assets/banner-main.png'
import Banner from '../Banner/Banner';

const Footer = () => {
    return (
        <>
            <div className='bg-[#06091A] flex flex-col justify-center items-center pt-20 md:pt-[230px] relative md:mt-[200px]'>

                <div className='min-w-11/12 mx-auto absolute top-[-170px] hidden md:block border border-white p-5 rounded-xl'>
                    <div
                        className="hero max-h-screen bg-[#FFFFFF] rounded-2xl p-20"
                        style={{
                            backgroundImage:
                                `url(${BGImage})`,

                        }}
                    >
                        {/* <div className="hero-overlay"></div> */}
                        <div className="hero-content  text-center">
                            <div className="">
                                <h1 className="mb-5 text-4xl font-bold">Subscribe to our Newsletter</h1>
                                <p className="mb-5 text-[#131313b3] font-medium">
                                    Get the latest updates and news right in your inbox!
                                </p>
                                <div className='flex flex-col md:flex-row gap-4 justify-center'>
                                    <input type="email" placeholder='Enter your Email' className='border py-3 px-7 rounded-xl'/>
                                <button className='border py-3 px-6 rounded-xl font-bold bg-[#e7fe29] cursor-pointer'>Subscribe </button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>



                <div>
                    <img src={FooterLogo} alt="" />
                </div>

                <div className="footer sm:footer-horizontal  text-neutral-content p-10 justify-around mt-5">
                    <nav>
                        <h6 className="footer-title">About Us</h6>
                        <p>
                            We are a passionate team <br /> dedicated to providing the best services <br /> to our customers.
                        </p>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Quick Link</h6>
                        <li><a className="link link-hover">Home</a></li>
                        <li><a className="link link-hover">Service</a></li>
                        <li><a className="link link-hover">About </a></li>
                        <li><a className="link link-hover">Contact</a></li>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Subscribe</h6>
                        <p>Subscribe to our newsletter for the latest updates.</p>
                        <div className="join mt-3">
                            <input className="input join-item rounded-l-full " placeholder="Enter Your Email" />
                            <button className="btn join-item rounded-r-full bg-[#e7fe29] ">Subscribe</button>
                        </div>
                    </nav>
                </div>
                <div className="footer sm:footer-horizontal  text-neutral-content items-center py-8 justify-center border-t-1 border-[#ffffff26]">
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </div>
            </div>
        </>
    );
};

export default Footer;
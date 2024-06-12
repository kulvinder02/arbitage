import React from 'react'
import logo from '../assets/images/webp/logo.png'
import playIcon from '../assets/images/webp/play-icon.png'

const Hero = () => {
  return (
    <div>
      <div className="bg-offGrey">
        {/* ---------------navbar--------------- */}
             <div className="bg-green w-full flex justify-center relative items-center py-5 sm:py-[30px] shadow-[0px_13px_15.3px_0px_#4CC97366]">
              <img src={logo} alt="logo" className='w-[170px] cursor-pointer h-[30px] md:w-[281px]  md:h-[62px]' />
             </div>

             {/* ------------- Hero section -------------- */}
             <div className="max-w-[1239px] mx-auto px-3 xl:px-[44px] bg-white">
             <div className="flex flex-col justify-center px-3 min-[500px]:px-14 xl:px-0">
              <h1 className='font-bold font-inter text-black mt-8 mb-3 xl:my-[38px] text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-center !leading-[130%]'>Unlock Effortless Wealth with <span className='text-green'>Automated AI Arbitrage Method!</span>  Elevate Your Financial Success with Cutting-Edge  <span className='text-green'> AI Technology!</span></h1>
               <p className='font-medium sm:font-semibold text-green text-base sm:text-lg lg:text-2xl text-center !leading-[150%] xl:px-20'>Watch Your Investment Skyrocket Effortlessly with a Simple AI System that Capitalizes on Price Differences! Investors Have Seen Remarkable 36.5%+ Gains in Less Than 24 Hours!   Watch the Video Below to Discover How!</p>
             
               <div className="mt-6 sm:mt-10 md:mt-14 xl:mt-[82px] mb-4 sm:mb-[40px] relative
               max-w-[1140px] max-h-[642.59px] mx-auto rounded-[20px] sm:rounded-[28px] overflow-hidden border-[4.76px] border-skyLight">
              <img src={playIcon} alt="play icon" className='lg:w-[85.68px] w-[25px] h-[25px] sm:w-[45px] sm:h-[45px] lg:h-[85.68px] absolute bottom-3 right-3  sm:bottom-[35px] sm:right-[27px]' />
               <video
        
        className=" !w-full "
        muted
        autoPlay
        poster="src/assets/images/webp/hero-vdio-poster.png" >
        <source src="https://aietf.io/AI-ETF-v3/Make-Money-from-crypto.mp4"   type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
               </div>
               <div className="mx-auto">
      <button className='bg-green font-bold text-base transition-all hover:bg-black duration-300 ease-linear sm:text-xl text-white mx-auto !leading-[150%] px-7 sm:px-[26.5px] flex-nowrap py-2 flex items-center sm:py-[16px] rounded-[30px]'>Register Now</button>
            
      </div>
             </div>
             </div>
      </div>
    </div>
  )
}

export default Hero
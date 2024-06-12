import React from 'react'
import { realSuccesCard } from './comon/Helper';
import playIcon from '../assets/images/webp/play-icon.png'
const RealSuccess = () => {
    const videos = realSuccesCard();
  return (
    <div className='bg-offGrey'>
        <div className="max-w-[1239px] mx-auto px-3 xl:ps-[44px] xl:pr-[55px] bg-white mt-[1px] pt-12 sm:pt-[60px]  md:pt-[80px] lg:pt-[112px]">
          <div className="flex items-center justify-center flex-col">
              <h2 className='font-bold font-inter text-black mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-center !leading-[130%]'>Real success stories</h2>
            <p className='font-medium text-base sm:text-xl !leading-[150%] text-center font-inter text-grey max-w-[786px]'>These testimonials highlight how AI Automated Arbitrage can lead to significant positive changes in the lives of many canadian families.</p>
    
          </div>

          {/* ----------map cards ---------- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 min-[400px]:px-20 xl:px-[2px] gap-6 mt-8 sm:mt-[51px] pb-12  sm:pb-[60px] md:pb-[80px] lg:pb-[112px]">
    {videos.map((video, index) => (
        <div key={index} className="bg-lightBlack overflow-hidden xl:h-[272px] rounded-lg max-w-full sm:max-w-[362px]">
          <div className="xl:h-[212px]  relative">
          <img src={playIcon} alt="play icon" className='w-[27.36px] h-[27.36px] absolute top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%]' />
          
          <video autoPlay className="rounded-lg w-full object-cover xl:h-[212px]" muted>
                <source src={video.src} type="video/mp4" />
            </video>
          </div>
            <p className="text-base font-semibold !leading-[130%] font-inter mt-[21px] text-center pb-4">{video.title}</p>
        </div>
    ))}
</div>

              </div>
    </div>
  )
}

export default RealSuccess
import React from 'react'
import logo from '../assets/images/webp/logo.png'

const Footer = () => {
  return (
    <div className='bg-green'>
    <div className=' flex flex-col justify-center items-center'>
             <img src={logo} alt="logo" className='w-[170px] h-[30px] md:w-[281px] cursor-pointer  md:h-[62px] mt-10 sm:mt-[72px]' />
               <p className='font-normal font-inter  !leading-[160%] text-base text-lightGreen text-center mt-[15px] max-w-[261px]'>Empowering Your Financial Future with Intelligent Investments</p>
               <p className='mt-8 sm:mt-[46px] text-white font-bold
                 !leading-[140%] text-xl font-inter mb-3 sm:mb-[15px]'>Disclaimer</p>
                  <p className='font-normal font-inter px-5 xl:px-0  !leading-[160%] text-base text-lightGreen text-center mb-[46px] max-w-[1140px]'>This website is not a news agency, information website, or blog. It is a webpage aimed at promotional publications that use the technique of storytelling to illustrate the scope of the services and products offered. Therefore, the story told on this page is an infomercial or advertisement for informational and functional purposes, for an understanding of the potential of what is proposed general, risk warning. Investing activities involve a high level of risk and may result in the total loss of the amount invested. For this reason, these activities may not be suitable for every type of investor. You should not invest money that you cannot afford to lose.</p>
    </div>
      <div className="pb-5 sm:mb-0 sm:h-[80px] max-w-[1239px] mx-auto px-3 xl:ps-[44px]  flex flex-col sm:flex-row items-center justify-between">
      <p className='font-normal font-inter  !leading-[160%] text-base cursor-pointer hover:text-white transition-all duration-200 text-lightGreen'>Privacy Policy | Conditions</p>

      <p className='font-normal font-inter  !leading-[160%] text-base cursor-pointer hover:text-white transition-all duration-200 text-lightGreen'>Report Abuse/ Spam | Copyright@2024</p>
    
     </div>
     </div>
  )
}

export default Footer
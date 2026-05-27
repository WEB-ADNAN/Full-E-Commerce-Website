import apple from '../assets/images/apple.png'
import model1 from '../assets/images/model1.png'
import model2 from '../assets/images/model2.png'
import model3 from '../assets/images/model3.png'
import { GoArrowRight } from "react-icons/go";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
function Header(){
    var settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    autoplaySpeed: 2000,
  };

    const [categories,setCategories] = useState([])
    useEffect(()=>{
        axios.get('https://dummyjson.com/products/categories')
        .then(result => setCategories(result.data))
    })
    
    
      return(
        <>
            <section className=" pb-35">
                <div className="container">
                    <div className="flex">
                        <div className="w-[20%] catagories border-r border-[rgba(0,0,0,0.25)] pt-10 flex flex-col gap-4">
                            {
                                categories.slice(0,9).map(category=>(
                                    <ul className=''>
                                        <li><Link to={`/products/category/${category.slug}`}>{category.name}</Link></li>
                                    </ul>  
                                ))
                            }
                            
                        </div>
                        <div className="w-[80%] pt-10 pl-11.25">
                            <Slider {...settings}>
                                <div className="">
                                    <div className="flex bg-black items-center pt-4">
                                        <div className="w-[45%] pl-16">
                                            <div className="img flex gap-6 items-center">
                                                <img src={apple} alt="apple" />
                                                <h4 className='font-poppins font-normal text-[16px] leading-6 text-[#FAFAFA]'>iPhone 14 Series</h4>
                                                
                                            </div>
                                            <h2 className='text-[48px] leading-15          font-semibold font-inter text-[#FAFAFA] pr-12.5 pt-5'>Up to 10% off Voucher</h2>
                                            <div className="flex items-center gap-2 pt-5.5">
                                                <a href="" className='font-poppins font-normal text-[16px] leading-6 text-[#FAFAFA] border-b border-[#FAFAFA] pb-1'>Shop Now </a>
                                                <GoArrowRight className='text-[#FAFAFA] text-[24px]'/>
                                            </div>
                                            
                                        </div>
                                        <div className="w-[55%] pb-[2.5px]">
                                            <img src={model1} alt="" />
                                        </div>
                                    </div>
                                </div>

                                <div className="">
                                    <div className="flex bg-black items-center pt-4">
                                        <div className="w-[45%] pl-16">
                                            <div className="img flex gap-6 items-center">
                                                <img src={apple} alt="apple" />
                                                <h4 className='font-poppins font-normal text-[16px] leading-6 text-[#FAFAFA]'>iPhone 12 pro Series</h4>
                                                
                                            </div>
                                            <h2 className='text-[48px] leading-15          font-semibold font-inter text-[#FAFAFA] pr-12.5 pt-5'>Up to 10% off Voucher</h2>
                                            <div className="flex items-center gap-2 pt-5.5">
                                                <a href="" className='font-poppins font-normal text-[16px] leading-6 text-[#FAFAFA] border-b border-[#FAFAFA] pb-1'>Shop Now </a>
                                                <GoArrowRight className='text-[#FAFAFA] text-[24px]'/>
                                            </div>
                                            
                                        </div>
                                        <div className="w-[55%] pb-1">
                                            <img src={model2} alt="" />
                                        </div>
                                    </div>
                                </div>

                                <div className="">
                                    <div className="flex bg-black items-center pt-4">
                                        <div className="w-[45%] pl-16">
                                            <div className="img flex gap-6 items-center">
                                                <img src={apple} alt="apple" />
                                                <h4 className='font-poppins font-normal text-[16px] leading-6 text-[#FAFAFA]'>iPhone 16 Series</h4>
                                                
                                            </div>
                                            <h2 className='text-[48px] leading-15          font-semibold font-inter text-[#FAFAFA] pr-12.5 pt-5'>Up to 10% off Voucher</h2>
                                            <div className="flex items-center gap-2 pt-5.5">
                                                <a href="" className='font-poppins font-normal text-[16px] leading-6 text-[#FAFAFA] border-b border-[#FAFAFA] pb-1'>Shop Now </a>
                                                <GoArrowRight className='text-[#FAFAFA] text-[24px]'/>
                                            </div>
                                            
                                        </div>
                                        <div className="w-[55%]">
                                            <img src={model3} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Header
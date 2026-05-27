import flash1 from '../assets/images/flash1.png'
import { FaStar } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight, FaRegHeart } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link, useLocation } from "react-router";
function Flash(){

    const Flashsale = [
        {id:1, name:'AK-900 Wired Keyboard', dprice:'-40%', price:'$960', img:flash1},
        {id:2, name:'IPS LCD Gaming Monitor', dprice:'-35%', price:'$370', img:flash1},
        {id:3, name:'RGB liquid CPU Cooler', dprice:'-30%', price:'$160', img:flash1},
        {id:4, name:'RGB liquid CPU Cooler', dprice:'-25%', price:'$160', img:flash1},
    ]

    return(
        <>
            <section className="pb-20">
                <div className="container">
                    {/* <div className="headline">
                        <div className="flex gap-4 items-center pb-6">
                            <div className="after:h-10 after:w-5 after:bg-[#DB4444] after:content-[''] after:block after:rounded-sm"></div>
                            <div className="text-[16px] leading-5 font-poppins font-semibold">Today’s</div>
                        </div>

                        <div className="flex">
                            <div className="flex gap-21.75">
                                <div className="">
                                    <h1 className="text-[36px] leading-12 font-inter font-semibold text-[#000000]">Flash Sales</h1>
                                    </div>
                                <div className="timer">
                                    <div className="flex flex-col gap-1">
                                        <h4 className="text-[12px] leading-4.5 font-poppins font-medium">Days</h4>
                                        <h5 className="text-[32px] leading-7.5 font-inter font-bold">03</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div className="headline pb-10">
                        <div className="flex gap-4 items-center pb-6">
                            <div className="after:h-10 after:w-5 after:bg-[#DB4444] after:content-[''] after:block after:rounded-sm"></div>
                            <div className="text-[16px] leading-5 font-poppins font-semibold">Today’s</div>
                        </div>

                        <div className="flex">
                            <div className="flex justify-between w-full items-center">
                                <div className="">
                                    <h1 className="text-[36px] leading-12 font-inter font-semibold text-[#000000]">Flash Sales</h1>
                                </div>
                                <div className="arrows flex gap-2">
                                    <div className="bg-[#F5F5F5] p-2.75 rounded-full">
                                        <FaArrowLeft className="w-6 h-6 flex items-center justify-center "/>
                                    </div>
                                    <div className="bg-[#F5F5F5] p-2.75 rounded-full">
                                        <FaArrowRight className="w-6 h-6 flex items-center justify-center "/>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="product pt-10">
                        <div className="grid grid-cols-4 gap-7.5 pb-18.75">

                            {
                                Flashsale.map(sale =>(
                                    <div className="1">
                                        <div className="img relative bg-[#F5F5F5] rounded-sm group inline-block p-12.25">
                                            <Link to="/product/detail">
                                                <img src={flash1} alt="" className='mx-auto' />
                                            </Link>
                                            <div className="icon absolute top-3 right-3">
                                                <FaRegHeart  className='h-8.5 w-8.5 bg-[#FFFFFF] p-1.25 rounded-[50%] mb-2'/>
                                                <MdOutlineRemoveRedEye className='h-8.5 w-8.5 bg-[#FFFFFF] p-1.25 rounded-[50%]'/>
                                            </div>
                                            <div className="absolute top-3 left-3 py-1 px-3 bg-[#DB4444] rounded-sm">
                                                <h5 className='text-[12px] leading-4.5 font-normal font-poppins text-[#FFFFFF]'>{sale.dprice}</h5>
                                            </div>
                                            <div className="btn absolute bottom-2 left-0">
                                                <a href="" className='text-[16px] leading-6 font-poppins font-medium py-2 px-21.75 bg-[#000000] text-[#FFFFFF] opacity-0 group-hover:opacity-100 duration-500'>Add To Cart</a>
                                            </div>
                                        </div>
                                        <div className="pt-4">
                                            <Link to="/product/detail"><h3 className='text-[16px] leading-6 font-medium font-poppins'>{sale.name}</h3></Link>
                                            <p className='text-[#DB4444] text-[16px] leading-6 font-medium font-poppins py-2'>$120 <del className='text-[rgba(0,0,0,0.4)] pl-3'>$160</del></p>
                                            <div className="icons flex">
                                                <FaStar className='text-[20px] text-[#FFAD33]'/>
                                                <FaStar className='text-[20px] text-[#FFAD33]'/>
                                                <FaStar className='text-[20px] text-[#FFAD33]'/>
                                                <FaStar className='text-[20px] text-[#FFAD33]'/>
                                                <FaStar className='text-[20px] text-[#FFAD33]'/>
                                                <div className="pl-2">
                                                    <p className='text-[14px] leading-5.25 font-semibold font-poppins text-[rgba(0,0,0,0.4)]'>(88)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                        <div className="button flex justify-center pb-15 border-b border-[rgba(0,0,0,0.25)]">
                            <a href="" className='text-[16px] leading-6 font-poppins font-medium text-[#FAFAFA] py-4 px-12 bg-[#DB4444] rounded-sm'>View All Products</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Flash
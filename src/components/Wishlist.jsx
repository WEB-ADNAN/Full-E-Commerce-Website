import { FaStar } from 'react-icons/fa'
import { FaArrowLeft, FaArrowRight, FaRegHeart } from 'react-icons/fa6'
import { MdOutlineRemoveRedEye } from 'react-icons/md'
import shop1 from '../assets/images/shop1.png'
import shop2 from '../assets/images/shop2.png'
import shop3 from '../assets/images/shop3.png'
import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Wishlist(){
    const Wish = [
        {id:1, name:'AK-900 Wired Keyboard', dprice:'40', price:'$960', img:shop1},
        {id:2, name:'IPS LCD Gaming Monitor', dprice:'0', price:'$370', img:shop2},
        {id:3, name:'RGB liquid CPU Cooler', dprice:'0', price:'$160', img:shop3},
        {id:3, name:'RGB liquid CPU Cooler', dprice:'0', price:'$160', img:shop3},
    ]
    const Wishcontent = [
        {id:1, name:'AK-900 Wired Keyboard', dprice:'$1160', price:'$960', img:shop1},
        {id:2, name:'IPS LCD Gaming Monitor', dprice:'$400', price:'$370', img:shop2},
        {id:3, name:'RGB liquid CPU Cooler', dprice:'$170', price:'$160', img:shop3},
        {id:3, name:'RGB liquid CPU Cooler', dprice:'$170', price:'$160', img:shop3},
    ]
    return(
        <>
            <section className="pb-35">
                <div className="container">
                    <div className="pt-24">
                        <div className="wish flex justify-between items-center pb-18.75">
                            <h3 className="text-[20px] leading-6.5 font-normal font-poppins">Wishlist (4)</h3>
                            <a href="" className="py-4 px-12 text-[16px] leading-6 font-medium font-poppins border border-[rgba(0,0,0,0.5)] rounded-sm">Move All To Bag</a>
                        </div>

                        <div className="">
                                    <div className="grid grid-cols-4 gap-7.5">
                                        {
                                            Wish.map(flash =>(
                                                <div className="1">
                                                    <div className="img relative bg-[#F5F5F5] rounded-sm group inline-block px-10 py-8.75">
                                                        <img src={flash.img} alt="" className='mx-auto' />
                                                        <div className="icon absolute top-3 right-3">
                                                            <RiDeleteBinLine  className='h-8.5 w-8.5 bg-[#FFFFFF] p-1.25 rounded-[50%] mb-2'/>
                                                            
                                                        </div>
                                                        <div className="absolute top-3 left-3 py-1 px-3 bg-[#DB4444] rounded-sm">
                                                            <h5 className='text-[12px] leading-4.5 font-normal font-poppins text-[#FFFFFF]'>-{flash.dprice}%</h5>
                                                        </div>
                                                        <div className="btn absolute bottom-2 left-0">
                                                            <a href="" className='text-[16px] leading-6 font-poppins font-medium py-2 px-21.75 bg-[#000000] text-[#FFFFFF] duration-500'> Add To Cart</a>
                                                            
                                                        </div>
                                                    </div>
                                                    <div className="pt-4">
                                                        <h3 className='text-[16px] leading-6 font-medium font-poppins'>{flash.name}</h3>
                                                        <p className='text-[#DB4444] text-[16px] leading-6 font-medium font-poppins py-2'>{flash.price}</p>
                                                        
                                                    </div>
                                                </div>
                                            ))
                                        }
                                        
                                    </div>
                        </div>

                        <div className="headline pb-15 pt-23.75 flex justify-between">
                            <div className="flex gap-4 items-center pb-6">
                                <div className="after:h-10 after:w-5 after:bg-[#DB4444] after:content-[''] after:block after:rounded-sm"></div>
                                <div className="text-[20px] leading-6.5 font-poppins font-normal">Just For You</div>
                                
                            </div>
                            <div className="btn">
                                    <a href="" className='border border-[rgba(0,0,0,0.5)] py-4 px-12 text-[16px] leading-6 font-medium font-poppins'>See All</a>
                            </div>
                        </div>

                        <div className="product">
                                    <div className="grid grid-cols-4 gap-7.5">
                                        {
                                            Wishcontent.map(flash =>(
                                                <div className="1">
                                                    <div className="img relative bg-[#F5F5F5] rounded-sm group inline-block px-10 py-8.75">
                                                        <img src={flash.img} alt="" className='mx-auto' />
                                                        <div className="icon absolute top-3 right-3">
                                                            <MdOutlineRemoveRedEye  className='h-8.5 w-8.5 bg-[#FFFFFF] p-1.25 rounded-[50%] mb-2'/>
                                                            
                                                        </div>
                                                        <div className="absolute top-3 left-3 py-1 px-3 bg-[#DB4444] rounded-sm">
                                                            <h5 className='text-[12px] leading-4.5 font-normal font-poppins text-[#FFFFFF]'>-40%</h5>
                                                        </div>
                                                        <div className="btn absolute bottom-2 left-0">
                                                            <a href="" className='text-[16px] leading-6 font-poppins font-medium py-2 px-21.75 bg-[#000000] text-[#FFFFFF] duration-500'> Add To Cart</a>
                                                        </div>
                                                    </div>
                                                    <div className="pt-4">
                                                        <h3 className='text-[16px] leading-6 font-medium font-poppins'>{flash.name}</h3>
                                                        <p className='text-[#DB4444] text-[16px] leading-6 font-medium font-poppins py-2'>{flash.price}</p>
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
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Wishlist
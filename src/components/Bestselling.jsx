import flash1 from '../assets/images/flash1.png'
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import best1 from '../assets/images/best1.png'
import best2 from '../assets/images/best2.png'
import best3 from '../assets/images/best3.png'
import best4 from '../assets/images/best4.png'
function Bestselling(){
    // const sellingproduct = [
    //     {id:1, image:flash1, title:'The north coat', price1:'$260', price2:'$360'}
    // ]
    return(
        <>
            <section className="pt-17.5 pb-35">
                <div className="container">
                    <div className="headline">
                        <div className="flex gap-4 items-center pb-6">
                            <div className="after:h-10 after:w-5 after:bg-[#DB4444] after:content-[''] after:block after:rounded-sm"></div>
                            <div className="text-[16px] leading-5 font-poppins font-semibold">This Month</div>
                        </div>

                        <div className="">
                            <div className="flex justify-between">
                                <div className="">
                                    <h1 className="text-[36px] leading-12 font-inter font-semibold text-[#000000]">Best Selling Products</h1>
                                </div>
                                <div className="arrows">
                                    <div className="button flex justify-center pb-15">
                                        <a href="" className='text-[16px] leading-6 font-poppins font-medium text-[#FAFAFA] py-4 px-12 bg-[#DB4444] rounded-sm'>View All</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bestproduct grid grid-cols-4 gap-7.5">
                        <div className="">
                            <div className="1">
                                <div className="img relative bg-[#F5F5F5] rounded-sm group inline-block py-8.75 px-10">
                                    <img src={best1} alt="" className='mx-auto' />
                                    <div className="icon absolute top-3 right-3">
                                        <FaRegHeart  className='h-8.5 w-8.5 bg-[#FFFFFF] p-1.25 rounded-[50%] mb-2'/>
                                        <MdOutlineRemoveRedEye className='h-8.5 w-8.5 bg-[#FFFFFF] p-1.25 rounded-[50%]'/>
                                    </div>
                                </div>
                                <div className="pt-4">
                                    <h3 className='text-[16px] leading-6 font-medium font-poppins'>HAVIT HV-G92 Gamepad</h3>
                                    <p className='text-[#DB4444] text-[16px] leading-6 font-medium font-poppins py-2'>$120 <del className='text-[rgba(0,0,0,0.4)] pl-3'>$160</del></p>
                                    <div className="icons flex">
                                        <FaStar className='text-[20px] text-[#FFAD33]'/>
                                        <FaStar className='text-[20px] text-[#FFAD33]'/>
                                        <FaStar className='text-[20px] text-[#FFAD33]'/>
                                        <FaStar className='text-[20px] text-[#FFAD33]'/>
                                        <FaStar className='text-[20px] text-[#FFAD33]'/>
                                        <div className="pl-2">
                                            <p className='text-[14px] leading-5.25 font-semibold font-poppins text-[rgba(0,0,0,0.4)]'>(65)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>                           
                        </div>

                        <div className="">
                            <div className="1">
                                <div className="img relative bg-[#F5F5F5] rounded-sm group inline-block py-8.75 px-10">
                                    <img src={best2} alt="" className='mx-auto' />
                                    <div className="icon absolute top-3 right-3">
                                        <FaRegHeart  className='h-8.5 w-8.5 bg-[#FFFFFF] p-1.25 rounded-[50%] mb-2'/>
                                        <MdOutlineRemoveRedEye className='h-8.5 w-8.5 bg-[#FFFFFF] p-1.25 rounded-[50%]'/>
                                    </div>
                                </div>
                                <div className="pt-4">
                                    <h3 className='text-[16px] leading-6 font-medium font-poppins'>HAVIT HV-G92 Gamepad</h3>
                                    <p className='text-[#DB4444] text-[16px] leading-6 font-medium font-poppins py-2'>$120 <del className='text-[rgba(0,0,0,0.4)] pl-3'>$160</del></p>
                                    <div className="icons flex">
                                        <FaStar className='text-[20px] text-[#FFAD33]'/>
                                        <FaStar className='text-[20px] text-[#FFAD33]'/>
                                        <FaStar className='text-[20px] text-[#FFAD33]'/>
                                        <FaStar className='text-[20px] text-[#FFAD33]'/>
                                        <FaStar className='text-[20px] text-[#FFAD33]'/>
                                        <div className="pl-2">
                                            <p className='text-[14px] leading-5.25 font-semibold font-poppins text-[rgba(0,0,0,0.4)]'>(65)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>                           
                        </div>

                        <div className="">
                            <div className="1">
                                <div className="img relative bg-[#F5F5F5] rounded-sm group inline-block py-8.75 px-10">
                                    <img src={best3} alt="" className='mx-auto' />
                                    <div className="icon absolute top-3 right-3">
                                        <FaRegHeart  className='h-8.5 w-8.5 bg-[#FFFFFF] p-1.25 rounded-[50%] mb-2'/>
                                        <MdOutlineRemoveRedEye className='h-8.5 w-8.5 bg-[#FFFFFF] p-1.25 rounded-[50%]'/>
                                    </div>
                                </div>
                                <div className="pt-4">
                                    <h3 className='text-[16px] leading-6 font-medium font-poppins'>HAVIT HV-G92 Gamepad</h3>
                                    <p className='text-[#DB4444] text-[16px] leading-6 font-medium font-poppins py-2'>$120 <del className='text-[rgba(0,0,0,0.4)] pl-3'>$160</del></p>
                                    <div className="icons flex">
                                        <FaStar className='text-[20px] text-[#FFAD33]'/>
                                        <FaStar className='text-[20px] text-[#FFAD33]'/>
                                        <FaStar className='text-[20px] text-[#FFAD33]'/>
                                        <FaStar className='text-[20px] text-[#FFAD33]'/>
                                        <FaStar className='text-[20px] text-[#FFAD33]'/>
                                        <div className="pl-2">
                                            <p className='text-[14px] leading-5.25 font-semibold font-poppins text-[rgba(0,0,0,0.4)]'>(65)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>                           
                        </div>

                        <div className="">
                            <div className="1">
                                <div className="img relative bg-[#F5F5F5] rounded-sm group inline-block py-8.75 px-10">
                                    <img src={best4} alt="" className='mx-auto' />
                                    <div className="icon absolute top-3 right-3">
                                        <FaRegHeart  className='h-8.5 w-8.5 bg-[#FFFFFF] p-1.25 rounded-[50%] mb-2'/>
                                        <MdOutlineRemoveRedEye className='h-8.5 w-8.5 bg-[#FFFFFF] p-1.25 rounded-[50%]'/>
                                    </div>
                                </div>
                                <div className="pt-4">
                                    <h3 className='text-[16px] leading-6 font-medium font-poppins'>HAVIT HV-G92 Gamepad</h3>
                                    <p className='text-[#DB4444] text-[16px] leading-6 font-medium font-poppins py-2'>$120 <del className='text-[rgba(0,0,0,0.4)] pl-3'>$160</del></p>
                                    <div className="icons flex">
                                        <FaStar className='text-[20px] text-[#FFAD33]'/>
                                        <FaStar className='text-[20px] text-[#FFAD33]'/>
                                        <FaStar className='text-[20px] text-[#FFAD33]'/>
                                        <FaStar className='text-[20px] text-[#FFAD33]'/>
                                        <FaStar className='text-[20px] text-[#FFAD33]'/>
                                        <div className="pl-2">
                                            <p className='text-[14px] leading-5.25 font-semibold font-poppins text-[rgba(0,0,0,0.4)]'>(65)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>                           
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Bestselling
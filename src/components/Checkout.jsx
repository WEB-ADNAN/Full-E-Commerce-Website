import { IoCheckmark } from "react-icons/io5";
import monitor from '../assets/images/monitor.png'
import controller from '../assets/images/controller.png'
import bkash from '../assets/images/Bkash.png'
import nagad from '../assets/images/Nagad.png'
import mastercard from '../assets/images/Mastercard.png'
import visa from '../assets/images/Visa.png'
function checkout(){
    return(
        <>
            <section className="pb-35">
                <div className="container">
                    <div className="pt-20 pb-20">
                        <p><a href="" className="text-[14px] leading-5.25 font-normal font-poppins text-[rgba(0,0,0,0.5)]">Home / Cart /<span className="text-[#000000]"> CheckOut</span></a></p>
                    </div>
                    <div className="">
                        <h2 className="text-[36px] leading-7.5 font-medium font-inter pb-12">Billing Details</h2>
                    </div>
                    <div className="checkoutMain flex gap-43.25 ">
                        <div className="flex w-[40%]">
                            <div className="1">
                                
                                <div className="inputs">
                                    <div className="1">
                                        <h5 className="text-[16px] leading-6 font-normal font-poppins text-[rgba(0,0,0,0.4)] pb-2">First Name*</h5>
                                        <input type="text" className="bg-[#F5F5F5] w-117.5 outline-0 h-12.5 rounded-sm mb-8"/>
                                    </div>
                                    <div className="1">
                                        <h5 className="text-[16px] leading-6 font-normal font-poppins text-[rgba(0,0,0,0.4)] pb-2">Company Name</h5>
                                        <input type="text" className="bg-[#F5F5F5] w-117.5 outline-0 h-12.5 rounded-sm mb-8"/>
                                    </div>
                                    <div className="1">
                                        <h5 className="text-[16px] leading-6 font-normal font-poppins text-[rgba(0,0,0,0.4)] pb-2">Street Address*</h5>
                                        <input type="text" className="bg-[#F5F5F5] w-117.5 outline-0 h-12.5 rounded-sm mb-8"/>
                                    </div>
                                    <div className="1">
                                        <h5 className="text-[16px] leading-6 font-normal font-poppins text-[rgba(0,0,0,0.4)] pb-2">Apartment, floor, etc. (optional)</h5>
                                        <input type="text" className="bg-[#F5F5F5] w-117.5 outline-0 h-12.5 rounded-sm mb-8"/>
                                    </div>
                                    <div className="1">
                                        <h5 className="text-[16px] leading-6 font-normal font-poppins text-[rgba(0,0,0,0.4)] pb-2">Town/City*</h5>
                                        <input type="text" className="bg-[#F5F5F5] w-117.5 outline-0 h-12.5 rounded-sm mb-8"/>
                                    </div>
                                    <div className="1">
                                        <h5 className="text-[16px] leading-6 font-normal font-poppins text-[rgba(0,0,0,0.4)] pb-2">Phone Number*</h5>
                                        <input type="text" className="bg-[#F5F5F5] w-117.5 outline-0 h-12.5 rounded-sm mb-8"/>
                                    </div>
                                    <div className="1">
                                        <h5 className="text-[16px] leading-6 font-normal font-poppins text-[rgba(0,0,0,0.4)] pb-2">Email Address*</h5>
                                        <input type="email" className="bg-[#F5F5F5] w-117.5 outline-0 h-12.5 rounded-sm mb-8"/>
                                    </div>
                                    
                                    <div className="agreed flex gap-4 items-center">
                                        <input id="agreed" type="checkbox" className="hidden"/>
                                        <label htmlFor="agreed" className="flex gap-2 cursor-pointer items-center">
                                            <span className="w-6 h-6 bg-[#DB4444] rounded-sm text-[#DB4444] flex justify-center items-center"><IoCheckmark className="inline-block"/></span>
                                            <span className="text-[16px] leading-6 font-normal font-poppins text-[#000000]">Save this information for faster check-out next time</span>
                                        </label>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="w-[60%]">
                            <div className="flex justify-between items-center pr-25.5 pb-8">
                                <div className="flex gap-6 items-center">
                                    <img src={controller} alt="" />
                                    <p className="text-[16px] leading-6 font-normal font-poppins">LCD Monitor</p>
                                </div>
                                <div className="">
                                    <p className="text-[16px] leading-6 font-normal font-poppins">$650</p>
                                </div>
                            </div>

                            <div className="flex justify-between items-center pr-25.5 pb-8">
                                <div className="flex gap-6 items-center">
                                    <img src={monitor} alt="" />
                                    <p className="text-[16px] leading-6 font-normal font-poppins">H1 Gamepad</p>
                                </div>
                                <div className="">
                                    <p className="text-[16px] leading-6 font-normal font-poppins">$1100</p>
                                </div>
                            </div>

                            <div className="total pr-25.5">
                                <div className="sub flex justify-between items-center pb-4 border-b border-[rgba(0,0,0,0.4)]">
                                <h4 className='text-[16px] leading-6 font-normal font-poppins'>Subtotal:</h4>
                                <p className='text-[16px] leading-6 font-normal font-poppins'>$1750</p>
                                </div>

                                <div className="sub flex justify-between items-center pb-4 border-b border-[rgba(0,0,0,0.4)] pt-4">
                                    <h4 className='text-[16px] leading-6 font-normal font-poppins'>Shipping:</h4>
                                    <p className='text-[16px] leading-6 font-normal font-poppins'>Free</p>
                                </div>

                                <div className="sub flex justify-between items-center pb-8 pt-4">
                                    <h4 className='text-[16px] leading-6 font-normal font-poppins'>Total:</h4>
                                    <p className='text-[16px] leading-6 font-normal font-poppins'>$1750</p>
                                </div>
                            </div>

                           <div className="">
                            <div className="pay flex gap-4 items-center pb-8">
                                <input id="pay" type="radio" name="pay" className="hidden"/>
                                <label htmlFor="pay" className="flex gap-2 cursor-pointer items-center">
                                    <span className="w-6 h-6 border-2 rounded-full  flex justify-center items-center"></span>
                                    <span className="text-[16px] leading-6 font-normal font-poppins text-[#000000]">Bank</span>
                                </label>
                                <div className="cards flex pl-38.75 gap-2">
                                    <img src={bkash} alt="" />
                                    <img src={nagad} alt="" />
                                    <img src={mastercard} alt="" />
                                    <img src={visa} alt="" />
                                </div>
                            </div>
                            <div className="pay2 flex gap-4 items-center">
                                <input id="pay2" type="radio" name="pay2" className="hidden"/>
                                <label htmlFor="pay2" className="flex gap-2 cursor-pointer items-center">
                                    <span className="w-6 h-6 border-2 rounded-full  flex justify-center items-center"></span>
                                    <span className="text-[16px] leading-6 font-normal font-poppins text-[#000000]">Cash on delivery</span>
                                </label>
                            </div>
                           </div>

                           <div className=" py-12">
                                <div className="inline-block">
                                    <input type="text" placeholder='Coupon Code' className='text-[16px] leading-6 font-normal font-poppins text-[rgba(0,0,0,0.5)] py-4 pl-6 outline-0 border border-[#000000] rounded-sm w-75 mr-4'/>
                                    <a href="" className='text-[16px] leading-6 font-normal font-poppins py-4 px-12 border border-[rgba(0,0,0,0.5)] rounded-sm bg-[#DB4444] text-[#FAFAFA]'>Apply Coupon</a>
                                </div>
                           </div>

                           <div className="">
                            <a href="" className='text-[16px] leading-6 font-normal font-poppins py-4 px-12 border border-[rgba(0,0,0,0.5)] rounded-sm bg-[#DB4444] text-[#FAFAFA]'>Place Order</a>
                           </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default checkout
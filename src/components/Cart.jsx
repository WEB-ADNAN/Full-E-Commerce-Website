import monitor from '../assets/images/monitor.png'
import controller from '../assets/images/controller.png'
import { PiCaretUpDown } from "react-icons/pi";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router';
function Cart (){
        const [count, setCount] = useState(1);

            const price = 650;
            const total = price * count;

            const increment = () => {
            setCount(prev => prev + 1);
            };

            const decrement = () => {
            setCount(prev => prev - 1);
            };

        const [value, setValue] = useState(1);

            const price2 = 1100;
            const total2 = price2 * value;

            const increment2 = () => {
            setValue(prev => prev + 1);
            };

            const decrement2 = () => {
            setValue(prev => prev - 1);
            };
    return(
        <>
            <section>
                <div className="container">
                    <div className="pt-20 pb-20">
                        <p><a href="" className="text-[14px] leading-5.25 font-normal font-poppins text-[rgba(0,0,0,0.5)]">Home <span className="text-[#000000]">/ Cart</span></a></p>
                    </div>
                    <div className=" flex flex-col gap-10">
                        <div className="flex justify-between [&>h4]:text-[16px] [&>h4]:leading-6 [&>h4]:font-normal font-poppins py-6 px-10 shadow-sm shadow-[rgba(0,0,0,0.05)]">
                            <h4>Product</h4>
                            <h4>Price</h4>
                            <h4>Quantity</h4>
                            <h4>Product</h4>
                        </div>

                        <div className="flex items-center py-6 px-10 shadow-sm shadow-[rgba(0,0,0,0.05)]">
                            <div className="flex gap-5 items-center [&>h4]:text-[16px] [&>h4]:leading-6 [&>h4]:font-normal font-poppins pr-44 relative group">
                                <img src={monitor} alt="" />
                                <h4>LCD Monitor</h4>
                                <IoIosClose className='absolute text-[24px] bg-[#DB4444] text-[#FAFAFA] rounded-[100%] -top-2 -left-2 opacity-0 group-hover:opacity-100 duration-500'/>
                            </div>
                            <div className="[&>h4]:text-[16px] [&>h4]:leading-6 [&>h4]:font-normal font-poppins pr-72">
                                <h4>$650</h4>
                            </div>
                            <div className="[&>h4]:text-[16px] [&>h4]:leading-6 [&>h4]:font-normal font-poppins flex gap-4 items-center border border-[rgba(0,0,0,0.4)] py-1.5 px-3 rounded-sm mr-72">
                                <h4>{count}</h4>
                                <div className="icon flex flex-col ">
                                    <button onClick={increment} className='cursor-pointer'><MdKeyboardArrowUp /></button>
                                    <button onClick={decrement} className='cursor-pointer'><MdKeyboardArrowDown /></button>
                                </div>
                            </div>
                            <div className="[&>h4]:text-[16px] [&>h4]:leading-6 [&>h4]:font-normal font-poppins">
                                <h4>${total}</h4>
                            </div>
                        </div>

                        <div className="flex items-center py-6 px-10 shadow-sm shadow-[rgba(0,0,0,0.05)]">
                            <div className="flex gap-5 items-center [&>h4]:text-[16px] [&>h4]:leading-6 [&>h4]:font-normal font-poppins pr-44 relative group">
                                <img src={controller} alt="" />
                                <h4>LCD Monitor</h4>
                                <IoIosClose className='absolute text-[24px] bg-[#DB4444] text-[#FAFAFA] rounded-[100%] -top-2 -left-2 opacity-0 group-hover:opacity-100 duration-500'/>
                            </div>
                            <div className="[&>h4]:text-[16px] [&>h4]:leading-6 [&>h4]:font-normal font-poppins pr-72">
                                <h4>$650</h4>
                            </div>
                            <div className="[&>h4]:text-[16px] [&>h4]:leading-6 [&>h4]:font-normal font-poppins flex gap-4 items-center border border-[rgba(0,0,0,0.4)] py-1.5 px-3 rounded-sm mr-72">
                                <h4>{value}</h4>
                                <div className="icon flex flex-col ">
                                    <button onClick={increment2} className='cursor-pointer'><MdKeyboardArrowUp /></button>
                                    <button onClick={decrement2} className='cursor-pointer'><MdKeyboardArrowDown /></button>
                                </div>
                            </div>
                            <div className="[&>h4]:text-[16px] [&>h4]:leading-6 [&>h4]:font-normal font-poppins">
                                <h4>${total2}</h4>
                            </div>
                        </div>

                    </div>

                    <div className="btn pt-10 pb-24 flex justify-between">
                        <a href="" className='text-[16px] leading-6 font-normal font-poppins py-4 px-12 border border-[rgba(0,0,0,0.5)] rounded-sm'>Return To Shop</a>
                        <a href="" className='text-[16px] leading-6 font-normal font-poppins py-4 px-12 border border-[rgba(0,0,0,0.5)] rounded-sm'>Update Cart</a>
                    </div>

                    <div className="total pb-35 flex justify-between">
                        <div className="inline-block">
                            <input type="text" placeholder='Coupon Code' className='text-[16px] leading-6 font-normal font-poppins text-[rgba(0,0,0,0.5)] py-4 pl-6 outline-0 border border-[#000000] rounded-sm w-75 mr-4'/>
                            <a href="" className='text-[16px] leading-6 font-normal font-poppins py-4 px-12 border border-[rgba(0,0,0,0.5)] rounded-sm bg-[#DB4444] text-[#FAFAFA]'>Apply Coupon</a>
                        </div>
                        <div className="2 border border-[#000000] rounded-sm px-6">
                            <h2 className='text-[20px] leading-7 pt-8 font-medium font-poppins pb-6'>Cart Total</h2>

                            <div className="sub flex gap-87.75 items-center pb-4 border-b border-[rgba(0,0,0,0.4)]">
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
                            <div className="button flex justify-center pb-12">
                                <Link to="/checkout" className='text-[16px] leading-6 font-normal font-poppins py-4 px-12 rounded-sm bg-[#DB4444] text-[#FAFAFA]'>Procees to checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Cart
import { FaChevronDown } from "react-icons/fa";
import logo from '../assets/images/Logo.png'
import { IoSearch } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { RiShoppingCart2Line } from "react-icons/ri";
import { Link, useLocation } from "react-router";
import { use, useState } from "react";
import { FiUser } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { IoCloseCircleOutline } from "react-icons/io5";
import { TiStarOutline } from "react-icons/ti";
import { TbLogout2 } from "react-icons/tb";

function Navbar(){
    const location = useLocation()
    const Currentlink = window.location.pathname

    const [show, setShow] = useState(false)
    const [searchkeyword, setSearchkeyword] = useState()

    return(
        <>
            <nav className="bg-[#000000] py-3">
                <div className="container">
                    <div className="flex gap-57.75 justify-end items-center">
                        <div className="1">
                            <h1 className="text-[14px] font-normal font-poppins leading-5.25 text-[#FAFAFA]">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href="" className="font-semibold text-[14px] font-poppins leading-6 text-[#FAFAFA]">ShopNow</a></h1>
                        </div>
                        <div className="1">
                            <select className="text-[14px] font-normal font-poppins leading-5.25 text-[#FAFAFA] outline-0">
                                <option value="" className="text-black">English</option>
                                <option value="" className="text-black">Bangla</option>
                                <option value="" className="text-black">Spanish</option>
                                {/* <span className="text-white">
                                    <FaChevronDown />
                                </span> */}
                            </select>
                        </div>
                    </div>
                </div>


            </nav>

            <div className="nav-2 border-b border-[rgba(0,0,0,0.25)]">
                <div className="container">
                    <div className="flex gap-32.5 pt-10 pb-4 items-center">
                        <div className="w-[65%] flex gap-40">
                            <div className="1">
                                <a href=""><img src={logo} alt="logo" /></a>
                            </div>
                            <div className="menu">
                                <ul className="flex gap-12 ">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/shop">Shop</Link></li>
                                    <li><a href="">About</a></li>
                                    <li><Link to="/registar">Sign Up</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className={`w-[35%] flex gap-6 items-center ${Currentlink == '/registar' ? 'justify-end' : ''}`}>
                            <div className="1">
                                <div className="w-60.75 relative ">
                                    <input onChange={(e)=> setSearchkeyword(e.target.value)} className="w-full py-2.5 outline-0 bg-[#F5F5F5] text-[12px] leading-4.5 font-poppins font-normal text-[#00000] pl-5 rounded-sm" type="text" placeholder="What are you looking for?"/>

                                    <Link to={`/search/product/${searchkeyword}`}>
                                        <IoSearch className="absolute top-1/2 -translate-y-1/2 right-3 text-[24px]"/>
                                    </Link>
                                    
                                </div>
                            </div>
                            {
                                Currentlink != '/registar' ?
                                <div className="1 relative">
                                    <div className="flex gap-4 items-center">
                                        <div className="">
                                            <Link to="/wishlist"><GoHeart className="text-[24px]"/></Link>
                                        </div>
                                        <div className="">
                                            <Link to="/cart"><RiShoppingCart2Line className="text-[24px]"/></Link>
                                        </div>
                                        <div className="w-8 h-8 bg-[#DB4444] flex items-center justify-center rounded-[47px]">
                                            <FiUser onClick={()=> setShow(!show)} className="text-white text-[24px]"/>
                                        </div>
                                    </div>
                                    {
                                        show && 
                                        <div className="dropdown absolute top-8.5 -left-27 bg-linear-to-br from-[#A9A4AA] via-[#6F5B75] to-[#1D161E] z-100 pt-4.5 pb-2.5 pl-5 pr-3 flex flex-col gap-3.25 rounded-sm select-none">
                                        <Link onClick={()=> setShow(false)} to="/profile" className="flex gap-4 items-center">
                                            <FiUser className="text-[24px] text-[#FAFAFA]"/> <span className="text-[14px] leading-5.25 font-normal font-poppins text-[#FAFAFA]">Manage My Account</span>
                                        </Link>
                                        <a onClick={()=> setShow(false)} href="" className="flex gap-4 items-center">
                                            <FiShoppingBag className="text-[24px] text-[#FAFAFA]"/> <span className="text-[14px] leading-5.25 font-normal font-poppins text-[#FAFAFA]">My Order</span>
                                        </a>
                                        <a onClick={()=> setShow(false)} href="" className="flex gap-4 items-center">
                                            <IoCloseCircleOutline className="text-[24px] text-[#FAFAFA]"/> <span className="text-[14px] leading-5.25 font-normal font-poppins text-[#FAFAFA]">My Cancellations</span>
                                        </a>
                                        <a onClick={()=> setShow(false)} href="" className="flex gap-4 items-center">
                                            <TiStarOutline className="text-[24px] text-[#FAFAFA]"/> <span className="text-[14px] leading-5.25 font-normal font-poppins text-[#FAFAFA]">My Reviews</span>
                                        </a>
                                        <a onClick={()=> setShow(false)} href="" className="flex gap-4 items-center">
                                            <TbLogout2 className="text-[24px] text-[#FAFAFA]"/> <span className="text-[14px] leading-5.25 font-normal font-poppins text-[#FAFAFA]">Logout</span>
                                        </a>
                                    </div>
                                    }
                                    
                                </div>
                                :
                                ''
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar
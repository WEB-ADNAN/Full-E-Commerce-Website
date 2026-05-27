import { AiOutlineSend } from "react-icons/ai";
import QR from '../assets/images/QR.png'
import AppStore from '../assets/images/AppStore.png'
import GooglePlay from '../assets/images/GooglePlay.png'
import { RiFacebookLine } from "react-icons/ri";
import { LuTwitter } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";
import { IoAtCircleOutline } from "react-icons/io5";

function Footer(){
    return(
        <>
            <footer className="bg-black pb-15 border-b border-[rgba(255,255,255,0.4)] pt-20">
                <div className="container">
                    <div className="flex">
                        <div className="w-[27%] pr-21.75">
                            <h2 className="text-[24px] leading-6 font-bold font-inter text-[#FAFAFA]">Exclusive</h2>
                            <h5 className="text-[20px] leading-7 font-medium font-poppins py-6 text-[#FAFAFA]">Subscribe</h5>
                            <p className="text-[16px] leading-6 font-normal pb-4 font-poppins text-[#FAFAFA]">Get 10% off your first order</p>
                            <div className="form relative">
                                <input type="text" placeholder="Enter your email" className="border border-[#FAFAFA] text-[16px] leading-6 font-normal font-poppins text-[rgba(250,250,250,0.4)] w-54.25 py-3 pl-4 rounded-sm "/>
                                <AiOutlineSend className="text-[24px] text-[#FAFAFA] absolute right-3.75 top-3"/>
                            </div>
                        </div>

                        <div className="w-[15%] mr-21.75">
                            <h3><a href="" className="text-[20px] leading-7 font-medium font-poppins text-[#FAFAFA]">Support</a></h3>
                            <p className="text-[16px] leading-6 font-normal font-poppins pt-6 text-[#FAFAFA]">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                            <p className="text-[16px] leading-6 font-normal font-poppins py-4 text-[#FAFAFA]">exclusive@gmail.com</p>
                            <p className="text-[16px] leading-6 font-normal font-poppins text-[#FAFAFA]">+88015-88888-9999</p>
                        </div>

                        <div className="w-[19%] pr-21.75">
                            <h3><a href="" className="text-[20px] leading-7 font-medium font-poppins text-[#FAFAFA]">Account</a></h3>
                            <p className="pt-6"><a href="" className="text-[16px] leading-6 font-normal pt-6 font-poppins text-[#FAFAFA]">My Account</a></p>
                            <p className="py-4"><a href="" className="text-[16px] leading-6 font-normal font-poppins text-[#FAFAFA]">Login / Register</a></p>
                            <p><a href="" className="text-[16px] leading-6 font-normal font-poppins text-[#FAFAFA]">Cart</a></p>
                            <p className="py-4"><a href="" className="text-[16px] leading-6 font-normal font-poppins text-[#FAFAFA]">Wishlist</a></p>
                            <p><a href="" className="text-[16px] leading-6 font-normal font-poppins text-[#FAFAFA]">Shop</a></p>
                        </div>

                        <div className="w-[18%] pr-19.75">
                            <h3><a href="" className="text-[20px] leading-7 font-medium font-poppins text-[#FAFAFA]">Quick Link</a></h3>
                            <p className="text-[16px] leading-6 font-normal font-poppins pt-6 text-[#FAFAFA]">Privacy Policy</p>
                            <p className="text-[16px] leading-6 font-normal font-poppins py-4 text-[#FAFAFA]">Terms Of Use</p>
                            <p className="text-[16px] leading-6 font-normal font-poppins pb-4 text-[#FAFAFA]">FAQ</p>
                            <p className="text-[16px] leading-6 font-normal font-poppins text-[#FAFAFA]">Contact</p>
                        </div>

                        <div className="w-[18%]">
                            <h3><a href="" className="text-[20px] leading-7 font-medium font-poppins text-[#FAFAFA]">Download App</a></h3>
                            <p className="text-[12px] leading-4.5 font-medium font-poppins text-[rgba(250,250,250,0.7)] pt-6 pb-2">Save $3 with App New User Only</p>
                            <div className="links flex gap-2 pb-6.5">
                                <div className="qr">
                                    <img src={QR} alt="" />
                                </div>
                                <div className="stores flex flex-col gap-1">
                                    <img src={GooglePlay} alt="" />
                                    <img src={AppStore} alt="" />
                                </div>
                            </div>
                            <div className="icons flex gap-6">
                                <a href=""><RiFacebookLine className="text-[24px] text-[#FAFAFA]"/></a>
                                <a href=""><LuTwitter className="text-[24px] text-[#FAFAFA]"/></a>
                                <a href=""><FaInstagram className="text-[24px] text-[#FAFAFA]"/></a>
                                <a href=""><RiLinkedinLine className="text-[24px] text-[#FAFAFA]"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <section className="bg-black">
                <div className="container">
                    <div className="footer-2 pt-4 pb-6 flex justify-center items-center gap-1">
                        <IoAtCircleOutline className="taxt-[16px] leading-6 font-normal font-poppins text-[rgba(255,255,255,0.4)]"/>
                        <p className="taxt-[16px] leading-6 font-normal font-poppins text-[rgba(255,255,255,0.4)]">Copyright Rimel 2022. All right reserved</p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Footer
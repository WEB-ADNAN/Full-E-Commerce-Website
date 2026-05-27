import registar from '../assets/images/registar.png'
import { FcGoogle } from "react-icons/fc";

function Login(){
    
    return(
        <>
            <section className='relative pt-15 pb-35'>
                <div className="w-[52%]">
                    <img src={registar} alt="" className='w-full'/>
                </div>
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="container h-full ">
                        <div className="h-full flex justify-end items-center">
                            <div className="div">
                                <h1 className='text-[36px] leading-7.5 font-medium font-inter'>Log in to Exclusive</h1>
                                <p className='text-[16px] leading-6 font-normal font-poppins pt-6 pb-12'>Enter your details below</p>
                                <div className="form flex flex-col gap-10">
                                    <input type="email" placeholder='Email or Phone Number' className='text-[16px] leading-6 font-normal font-poppins text-[rgba(0,0,0,0.4)] outline-0 border-b border-[rgba(0,0,0,0.5)] w-92.5 pb-2'/>
                                    <input type="password" placeholder='Password' className='text-[16px] leading-6 font-normal font-poppins text-[rgba(0,0,0,0.4)] outline-0 border-b border-[rgba(0,0,0,0.5)] w-92.5 pb-2'/>
                                </div>
                                <div className="btns pt-14 flex gap-21.75 items-center">
                                    <a href="" className='text-[16px] leading-6 font-poppins font-medium text-[#FAFAFA] py-4 px-12 bg-[#DB4444] rounded-sm '>Log In</a>
                                    <a href="" className='text-[16px] leading-6 font-normal font-poppins text-[#DB4444]'>Forget Password?</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Login
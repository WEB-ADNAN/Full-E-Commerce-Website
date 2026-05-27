import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Line } from "react-icons/ri";
import { VscWorkspaceTrusted } from "react-icons/vsc";

function Delivery(){
    return(
        <>
            <section className="pb-35">
                <div className="container">
                        <div className="flex gap-22 justify-center">
                            <div className="1">
                                <div className='bg-black w-17 h-17 flex justify-center items-center border-10 border-[#C1C0C1] rounded-full mx-auto'>
                                    <TbTruckDelivery className='text-white  w-8 h-8 mx-auto'/>
                                </div>
                                <div className="text-center">
                                <h3 className='text-[20px] pt-6 pb-2 font-poppin font-semibold leading-7 text-black '>FREE AND FAST DELIVERY</h3>
                                    <p className='text-[14px] leading-5.25 font-poppin font-normal'>Free delivery for all orders over $140</p>
                                </div>
                            </div>

                            <div className="1">
                                <div className='bg-black w-17 h-17 flex justify-center items-center border-10 border-[#C1C0C1] rounded-full mx-auto'>
                                    <RiCustomerService2Line className='text-white  w-8 h-8 mx-auto'/>
                                </div>
                                <div className="text-center">
                                <h3 className='text-[20px] pt-6 pb-2 font-poppin font-semibold leading-7 text-black '>24/7 CUSTOMER SERVICE</h3>
                                    <p className='text-[14px] leading-5.25 font-poppin font-normal'>Friendly 24/7 customer support</p>
                                </div>
                            </div>

                            <div className="1">
                                <div className='bg-black w-17 h-17 flex justify-center items-center border-10 border-[#C1C0C1] rounded-full mx-auto'>
                                    <VscWorkspaceTrusted className='text-white  w-8 h-8 mx-auto'/>
                                </div>
                                <div className="text-center">
                                <h3 className='text-[20px] pt-6 pb-2 font-poppin font-semibold leading-7 text-black '>MONEY BACK GUARANTEE</h3>
                                    <p className='text-[14px] leading-5.25 font-poppin font-normal'>We reurn money within 30 days</p>
                                </div>
                            </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Delivery

                    {/* <div className=''>
                            <div className='bg-black w-[68px] h-[68px] flex justify-center items-center border-10 border-[#C1C0C1] rounded-full mx-auto'>
                                <FaTruckFast className='text-white  w-[32px] h-[32px] mx-auto'/>
                            </div>
                            <div className="text-center">
                                <h3 className='text-[20px] pt-6 pb-2 font-poppin font-semibold leading-[28px] text-black '>FREE AND FAST DELIVERY</h3>
                            <p className='text-[14px] leading-[21px] font-poppin font-normal'>Free delivery for all orders over $140</p>
                            </div>
                    </div> */}
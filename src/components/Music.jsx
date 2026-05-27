import speaker from '../assets/images/speaker.png'
import background from '../assets/images/background.png'
function Music(){
    return(
        <>
            <section className="pb-17.75">
                <div className="container" style={{ backgroundImage: `url(${background})` }}>
                    <div className="flex items-center">
                        <div className="w-[50%] pl-14 pt-17.25 pb-21.25">
                            <h4 className="text-[16px] leading-5 font-semibold font-poppins text-[#00FF66]">Categories</h4>
                            <h3 className="text-[48px] leading-15 py-8 font-semibold font-inter text-[#FFFFFF]">Enhance Your Music Experience</h3>
                            <div className="flex gap-6">
                                <div className="1 bg-[#FFFFFF] py-3.5 px-3.75 rounded-[50%] text-center">
                                    <h5 className="text-[16px] leading-5 font-semibold font-poppins">23</h5>
                                    <h6 className="text-[11px] leading-4.5 font-normal font-poppins">Hours</h6>
                                </div>
                                <div className="1 bg-[#FFFFFF] py-3.5 px-4.25 rounded-[50%] text-center">
                                    <h5 className="text-[16px] leading-5 font-semibold font-poppins">05</h5>
                                    <h6 className="text-[11px] leading-4.5 font-normal font-poppins">Days</h6>
                                </div>
                                <div className="1 bg-[#FFFFFF] py-3.5 px-2.5 rounded-[50%] text-center">
                                    <h5 className="text-[16px] leading-5 font-semibold font-poppins">59</h5>
                                    <h6 className="text-[11px] leading-4.5 font-normal font-poppins">Minutes</h6>
                                </div>
                                <div className="1 bg-[#FFFFFF] py-3.5 px-1.75 rounded-[50%] text-center">
                                    <h5 className="text-[16px] leading-5 font-semibold font-poppins">35</h5>
                                    <h6 className="text-[11px] leading-4.5 font-normal font-poppins">Seconds</h6>
                                </div>
                            </div>
                            <div className="btn pt-14">
                                <a href="" className="text-[16px] leading-6 font-medium font-poppins py-4 px-12 bg-[#00FF66] text-[#FAFAFA]">Buy Now!</a>
                            </div>
                        </div>

                        <div className="w-[50%] pt-9.25 pb-10.75 pr-11 animate__slideInRight">
                            <img src={speaker} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Music
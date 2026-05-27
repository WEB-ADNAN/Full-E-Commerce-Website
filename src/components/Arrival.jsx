import ps5 from '../assets/images/ps5.png'
import model from '../assets/images/model.png'
import player from '../assets/images/player.png'
import gucci from '../assets/images/gucci.png'

function Arrival(){
    return(
        <>
            <section className='pb-35'>
                <div className="container">
                    <div className="headline pb-15">
                        <div className="flex gap-4 items-center pb-6">
                            <div className="after:h-10 after:w-5 after:bg-[#DB4444] after:content-[''] after:block after:rounded-sm"></div>
                            <div className="text-[16px] leading-5 font-poppins font-semibold">Featured</div>
                        </div>

                        <div className="flex">
                            <div className="flex justify-between w-full items-center">
                                <div className="">
                                    <h1 className="text-[36px] leading-12 font-inter font-semibold text-[#000000]">New Arrival</h1>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    <div className="design flex gap-7.5">
                        <div className="w-1/2 bg-black pt-22.25 px-7.5 rounded-sm relative">
                            <img src={ps5} alt="" />
                            <div className="absolute bottom-8 left-8">
                                <h4 className='text-[24px] leading-6 font-semibold font-inter text-[#FAFAFA]'>PlayStation 5</h4>
                                <p className='text-[14px] leading-5.25 py-4 font-normal font-poppins text-[#FAFAFA]'>Black and White version of the PS5 <br /> coming out on sale.</p>
                                <a href="" className='w-20.25 h-6 text-[#FFFFFF] border-b border-[rgba(255,255,255,0.5)]'>Shop Now</a>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="main">
                                <div className="pl-34.5 bg-[#0D0D0D] rounded-sm relative">
                                    <img src={model} alt="" />
                                    <div className="absolute bottom-8 left-8">
                                        <h4 className='text-[24px] leading-6 font-semibold font-inter text-[#FAFAFA]'>Women’s Collections</h4>
                                        <p className='text-[14px] leading-5.25 py-4 font-normal font-poppins text-[#FAFAFA]'>Featured woman collections that <br /> give you another vibe.</p>
                                        <a href="" className='w-20.25 h-6 text-[#FFFFFF] border-b border-[rgba(255,255,255,0.5)]'>Shop Now</a>
                                    </div>
                                </div>
                                <div className="flex gap-7.5 pt-8">
                                    <div className="player bg-black py-7.75 px-7.5 rounded-sm relative">
                                        <img src={player} alt="" />
                                        <div className="absolute bottom-6 left-6">
                                            <h4 className='text-[24px] leading-6 font-semibold font-inter text-[#FAFAFA]'>Speakers</h4>
                                            <p className='text-[14px] leading-5.25 py-2 font-normal font-poppins text-[#FAFAFA]'>Amazon wireless speakers</p>
                                            <a href="" className='w-20.25 h-6 text-[#FFFFFF] border-b border-[rgba(255,255,255,0.5)]'>Shop Now</a>
                                        </div>
                                    </div>
                                    <div className="gucci bg-black py-7.75 px-7.5 rounded-sm relative">
                                        <img src={gucci} alt="" />
                                        <div className="absolute bottom-6 left-6">
                                            <h4 className='text-[24px] leading-6 font-semibold font-inter text-[#FAFAFA]'>Perfume</h4>
                                            <p className='text-[14px] leading-5.25 py-2 font-normal font-poppins text-[#FAFAFA]'>GUCCI INTENSE OUD EDP</p>
                                            <a href="" className='w-20.25 h-6 text-[#FFFFFF] border-b border-[rgba(255,255,255,0.5)]'>Shop Now</a>
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
export default Arrival
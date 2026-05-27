function NotFound(){
    return(
        <>
            <section>
                <div className="container">
                    <div className="main">
                        <div className="pt-20 pb-35">
                            <p><a href="" className="text-[14px] leading-5.25 font-normal font-poppins text-[rgba(0,0,0,0.5)]">Home <span className="text-[#000000]">/ 404 Error</span></a></p>
                        </div>
                        <div className="pb-39 flex flex-col justify-center items-center">
                            <h2 className="text-[110px] leading-28.75 font-medium font-inter">404 Not Found</h2>
                            <p className="text-[16px] leading-6 font-normal font-poppins pt-10 pb-24">Your visited page not found. You may go home page.</p>
                            <a href="" className='text-[16px] leading-6 font-poppins font-medium text-[#FAFAFA] py-4 px-12 bg-[#DB4444] rounded-sm'>Back to home page</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default NotFound
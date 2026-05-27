function Profile(){
    return(
        <>
            <section className="pb-35">
                <div className="container">
                    <div className="pt-20 pb-20">
                        <div className="flex justify-between">
                            <p><a href="" className="text-[14px] leading-5.25 font-normal font-poppins text-[rgba(0,0,0,0.5)]">Home <span className="text-[#000000]">/ My Account</span></a></p>
                            <p className="text-[14px] leading-5.25 font-normal font-poppins">Welcome! <span className="text-[#DB4444]">Md Rimel</span></p>
                        </div>
                    </div>
                    <div className="flex gap-25">
                            <div className="w-[20%]">
                                <div className="">
                                    <h3 className="text-[16px] leading-6 font-medium font-poppins pb-4">Manage My Account</h3>
                                    <div className="pl-8.75 gap-2 pb-6">
                                        <h5 className="text-[16px] leading-6 font-normal font-poppins text-[rgba(0,0,0,0.5)] hover:text-[#DB4444] hover:duration-500">My Profile</h5>
                                        <h5 className="text-[16px] leading-6 font-normal font-poppins text-[rgba(0,0,0,0.5)] hover:text-[#DB4444] hover:duration-500">Address Book</h5>
                                        <h5 className="text-[16px] leading-6 font-normal font-poppins text-[rgba(0,0,0,0.5)] hover:text-[#DB4444] hover:duration-500">My Payment Options</h5>
                                    </div>
                                </div>
                                <div className="">
                                    <h3 className="text-[16px] leading-6 font-medium font-poppins pb-4">My Orders</h3>
                                    <div className="pl-8.75 gap-2 pb-6">
                                        <h5 className="text-[16px] leading-6 font-normal font-poppins text-[rgba(0,0,0,0.5)] hover:text-[#DB4444] hover:duration-500">My Returns</h5>
                                        <h5 className="text-[16px] leading-6 font-normal font-poppins text-[rgba(0,0,0,0.5)] hover:text-[#DB4444] hover:duration-500">My Cancellations</h5>
                                    </div>
                                </div>
                                <div className="">
                                    <h3 className="text-[16px] leading-6 font-medium font-poppins pb-4">My WishList</h3>
                                </div>
                            </div>
                        <div className="w-[80%]">
                            <div className="pt-10 px-20">
                                <h2 className="text-[20px] leading-7 font-medium font-poppins pb-4 text-[#DB4444]">Edit Your Profile</h2>
                                <div className="flex gap-12.5 pb-6">
                                    <div className="form flex flex-col">
                                        <label htmlFor="">First Name</label>
                                        <input type="text" placeholder="Md" className="w-82.5 py-3.25 pl-4 outline-0 bg-[#F5F5F5] rounded-sm"/>
                                    </div>
                                    <div className="form flex flex-col">
                                        <label htmlFor="">Last Name</label>
                                        <input type="text" placeholder="Rimel" className="w-82.5 py-3.25 pl-4 outline-0 bg-[#F5F5F5] rounded-sm"/>
                                    </div>
                                </div>
                                <div className="flex gap-12.5">
                                    <div className="form flex flex-col">
                                        <label htmlFor="">Email</label>
                                        <input type="text" placeholder="rimel1111@gmail.com" className="w-82.5 py-3.25 pl-4 outline-0 bg-[#F5F5F5] rounded-sm"/>
                                    </div>
                                    <div className="form flex flex-col">
                                        <label htmlFor="">Address</label>
                                        <input type="text" placeholder="Kingston, 5236, United State" className="w-82.5 py-3.25 pl-4 outline-0 bg-[#F5F5F5] rounded-sm"/>
                                    </div>
                                </div>

                                
                                <div className="flex pt-6">
                                    
                                    <div className="form flex flex-col">
                                        <h3 className="text-[16px] leading-6 font-normal font-poppins pb-2">Password Changes</h3>
                                        <input type="text" placeholder="Current Passwod" className="w-177.5 py-3.25 pl-4 outline-0 bg-[#F5F5F5] rounded-sm"/>
                                    </div>
                                </div>
                                <div className="flex pt-4">
                                    <div className="form">
                                        <input type="text" placeholder="New Passwod" className="w-177.5 py-3.25 pl-4 outline-0 bg-[#F5F5F5] rounded-sm"/>
                                    </div>
                                </div>
                                <div className="flex pt-4 pb-6">
                                    <div className="form">
                                        <input type="text" placeholder="Confirm New Passwod" className="w-177.5 py-3.25 pl-4 outline-0 bg-[#F5F5F5] rounded-sm"/>
                                    </div>
                                </div>

                                <div className="btn flex gap-20 justify-end items-center pb-14">
                                    <a href="" className="text-[16px] leading-6 font-normal font-poppins">Cancel</a>
                                    <a href="" className="text-[16px] leading-6 font-normal font-poppins py-4 px-12 bg-[#DB4444] rounded-sm text-[#FAFAFA]">Save Changes</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Profile
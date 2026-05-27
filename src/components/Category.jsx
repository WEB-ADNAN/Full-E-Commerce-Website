import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router';


function Category(){
    const [categories,setCategories] = useState([])
    useEffect(()=>{
        axios.get('https://dummyjson.com/products/categories')
        .then(result => setCategories(result.data))
    })
    return(
        <>
          <section>
            <div className="container">
                <div className="headline pb-15">
                    <div className="flex gap-4 items-center pb-6">
                        <div className="after:h-10 after:w-5 after:bg-[#DB4444] after:content-[''] after:block after:rounded-sm"></div>
                        <div className="text-[16px] leading-5 font-poppins font-semibold">Categories</div>
                    </div>

                    <div className="flex">
                        <div className="flex justify-between w-full items-center">
                            <div className="">
                                <h1 className="text-[36px] leading-12 font-inter font-semibold text-[#000000]">Browse By Category</h1>
                            </div>
                            <div className="arrows flex gap-2">
                                <div className="bg-[#F5F5F5] p-2.75 rounded-full">
                                    <FaArrowLeft className="w-6 h-6 flex items-center justify-center "/>
                                </div>
                                <div className="bg-[#F5F5F5] p-2.75 rounded-full">
                                    <FaArrowRight className="w-6 h-6 flex items-center justify-center "/>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-5 gap-5 pb-17.5 border-b border-[rgba(0,0,0,0.25)]">

                    {
                        categories.slice(0,5).map(Categorys=>(
                            <Link to={`/products/category/${Categorys.slug}`}>
                                <div className="">
                                    <div className="icon border border-[rgba(0,0,0,0.3)] py-9 px-8 rounded-sm hover:bg-[#DB4444] duration-500 group flex flex-col items-center">
                                        <h4 className="text-[16px] leading-6 font-normal font-poppins group-hover:text-[#FFFFFF]">{Categorys.name}</h4>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }

                    

                </div>
            </div>
          </section>
        </>
    )
}
export default Category
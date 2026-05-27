import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import { Link } from 'react-router';

function Shop() {

    const [categories,setCategories] = useState([])
    useEffect(()=>{
        axios.get('https://dummyjson.com/products/categories')
        .then(result => setCategories(result.data))
    },[])

    const colors = [
        { id: 1, color: "#000000", name: "Color 1" },
        { id: 2, color: "#FF0000", name: "Color 2" },
        { id: 3, color: "#00FF38", name: "Color 3" },
    ];
    
    const [sortby, setSortby] = useState('')
    const [products, setProducts] = useState([]);
    const [visible, setVisible] = useState(6);

    useEffect(() => {
    if(sortby){
        axios.get(`https://dummyjson.com/products/category/${sortby}`)
        .then(res=>{
            setProducts(res.data.products)
            setPage(0)
        })
    }else{
        axios
        .get("https://dummyjson.com/products")
        .then((res) => setProducts(res.data.products));
    }
}, [sortby]);

    const [page, setPage] = useState(0);

    const itemsPerPage = Number(visible);
    const offset = page * itemsPerPage;

    const handlePageClick = (data) => {
        setPage(data.selected);
        console.log("Selected page:", data.selected + 1);
    };

    useEffect(() => {
        setPage(0);
    }, [visible]);

  return (
    <>
      <section className="pb-26">
        <div className="container">
          <div className="pt-20 pb-12.5">
            <p>
              <a
                href=""
                className="text-[14px] leading-5.25 font-normal font-poppins text-[rgba(0,0,0,0.5)]"
              >
                Home <span className="">/ 404 Error</span>
              </a>
            </p>
          </div>

          <div className="flex">
            <div className="w-[20%]">
              <div className="div">
                <h2 className="text-[20px] font-bold font-poppins leading-[100%] pb-3.75">
                  Shop by Category
                </h2>
              </div>
              <div className="catagories pb-10">
                <div className="catagories flex flex-col gap-4 ">
                    {
                        categories.slice(0,9).map((category, index)=>(
                            <ul key={index} className='cursor-pointer'>
                                <li><a onClick={()=> setSortby(category.slug)}>{category.name}</a></li>
                            </ul>  
                        ))
                    }
                    
                </div>
              </div>

              <div className="">
                <h2 className="text-[20px] font-bold font-poppins leading-[100%] pb-3.75">
                  Shop by Color
                </h2>
                <div className="">
                  {colors.map((color) => (
                    <div className="[&>label]:text-[16px] [&>label]:leading-7.5 [&>label]:text-[#767676] [&>label]:font-normal [&>label]:font-poppins">
                      <input
                        type="radio"
                        name="color"
                        id="1"
                        className="hidden"
                      />
                      <label
                        htmlFor=""
                        id="1"
                        className="cursor-pointer flex gap-2.5 items-center"
                      >
                        <span
                          style={{ background: color.color }}
                          className="w-2.75 h-2.75 inline-block rounded-full bg-red-500"
                        ></span>
                        {color.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-[80%]">
              <div className="flex gap-3 justify-end items-center pb-7.5">
                <span className="text-[16px] leading-6 font-normal font-poppins">
                  Show :{" "}
                </span>
                <input
                  onChange={(e) => setVisible(e.target.value)}
                  type="text"
                  value={visible}
                  className="outline-0 border border-[#D9D9D9] w-24.25 py-1.5 rounded-[5px] pl-10.25 pr-11.25"
                />
              </div>

              <div className="product">
                <div className="grid grid-cols-3 gap-7.5">
                  {products
                    .slice(offset, offset + itemsPerPage)
                    .map((product, index) => (
                      <div className="1">
                        <div className="img relative bg-[#F5F5F5] rounded-sm group inline-block px-10 py-8.75">
                          <Link to={`/product/detail/${product.id}`}>
                            <img
                              src={product.thumbnail}
                              alt=""
                              className="mx-auto"
                            />
                          </Link>
                          <div className="icon absolute top-3 right-3">
                            <FaRegHeart className="h-8.5 w-8.5 bg-[#FFFFFF] p-1.25 rounded-[50%] mb-2" />
                            <MdOutlineRemoveRedEye className="h-8.5 w-8.5 bg-[#FFFFFF] p-1.25 rounded-[50%]" />
                          </div>
                          <div className="absolute top-3 left-3 py-1 px-3 bg-[#DB4444] rounded-sm">
                            <h5 className="text-[12px] leading-4.5 font-normal font-poppins text-[#FFFFFF]">
                              -{product.discountPercentage}%
                            </h5>
                          </div>
                          <div className="btn absolute bottom-2 left-0">
                            <a
                              href=""
                              className="text-[16px] leading-6 font-poppins font-medium py-2 px-21.75 bg-[#000000] text-[#FFFFFF] opacity-0 group-hover:opacity-100 duration-500"
                            >
                              Add To Cart
                            </a>
                          </div>
                        </div>
                        <div className="pt-4">
                          <Link to={`/product/detail/${product.id}`}>
                            <h3 className="text-[16px] leading-6 font-medium font-poppins">
                              {product.title}
                            </h3>
                          </Link>
                          <p className="text-[#DB4444] text-[16px] leading-6 font-medium font-poppins py-2">
                            $
                            {(
                              product.price -
                              (product.price * product.discountPercentage) / 100
                            ).toFixed(2)}{" "}
                            <del className="text-[rgba(0,0,0,0.4)] pl-3">
                              {product.price}
                            </del>
                          </p>
                          <div className="icons flex">
                            <FaStar className="text-[20px] text-[#FFAD33]" />
                            <FaStar className="text-[20px] text-[#FFAD33]" />
                            <FaStar className="text-[20px] text-[#FFAD33]" />
                            <FaStar className="text-[20px] text-[#FFAD33]" />
                            <FaStar className="text-[20px] text-[#FFAD33]" />
                            <div className="pl-2">
                              <p className="text-[14px] leading-5.25 font-semibold font-poppins text-[rgba(0,0,0,0.4)]">
                                (88)
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div className="flex justify-center mt-10">
                <ReactPaginate
                  previousLabel={<FaChevronLeft />}
                  nextLabel={<FaChevronRight />}
                  breakLabel={"..."}
                  pageCount={Math.ceil(products.length / itemsPerPage)}
                  marginPagesDisplayed={1}
                  pageRangeDisplayed={3}
                  onPageChange={handlePageClick}
                  containerClassName={"flex gap-2 items-center"}
                  pageClassName={
                    "border rounded w-8 h-8 flex items-center justify-center cursor-pointer"
                  }
                  activeClassName={"bg-black text-white border-black"}
                  previousClassName={"px-2 text-gray-600 cursor-pointer"}
                  nextClassName={"px-2 text-gray-600 cursor-pointer"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Shop;

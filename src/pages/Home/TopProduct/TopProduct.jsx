import { BiRightArrowAlt } from "react-icons/bi";
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import Rating from "../../Shared/Rating";

const TopProduct = () => {
    return (
        <div className='container mx-auto -mt-20 mb-20'>

        <div>
            <h1 className=' font-bold text-left text-2xl mb-5'>Top Products</h1>
        </div>
        
        <div className='w-full grid md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>

            {
                [1, 2, 3, 4].map((p, i) => <div key='' className='border  w-80  group transition-all duration-500 hover:shadow-md hover:-mt-3'>
                    <div className='relative overflow-hidden'>

                    <div className='flex justify-center items-center absolute badge bg-red-500 text-white  font-semibold text-xs right-2 top-2'>5%</div>

                        <img className=' h-[240px]' src='https://5.imimg.com/data5/JT/BF/YL/SELLER-45760580/refrigerator-spare-parts.jpg' alt="product image" />
                        <ul className='flex transition-all duration-700 -bottom-10 justify-center items-center gap-2 absolute w-full group-hover:bottom-3'>
                            <li className='w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-red-400 hover:text-white hover:rotate-[720deg] transition-all'><AiFillHeart /></li>
                            <Link to='/' className='w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-red-400 hover:text-white hover:rotate-[720deg] transition-all' ><FaEye /></Link>
                            <li className='w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-red-400 hover:text-white hover:rotate-[720deg] transition-all'><AiOutlineShoppingCart /></li>
                        </ul>
                    </div>
                    <div className='py-3 text-slate-600 px-2'>
                        <h2>name</h2>
                        <div className='flex justify-between items-center gap-3'>
                            <div className='flex'>
                                <Rating ratings={4.5} />
                            </div>
                            <span className='text-lg  font-bold'>price</span>
                        </div>
                    </div>
                </div>)
            }

        </div>
        <div className='flex items-center justify-end mt-5 '>
            <button className='font-semibold mr-6  text-black hover:text-red-500 flex items-center'>

                <h1 className='text-xl'> Show More</h1>
                <div>
                    <BiRightArrowAlt className=' text-2xl'></BiRightArrowAlt>
                </div>
            </button>

        </div>
    </div>
    );
};

export default TopProduct;
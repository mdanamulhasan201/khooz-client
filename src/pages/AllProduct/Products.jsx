import  { useState } from 'react';
import { AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Rating from '../Shared/Rating';

const Products = () => {
    const productsPerPage = 10; // Number of products to display per page
    const [currentPage, setCurrentPage] = useState(1);

    // Sample product data (replace with your actual data)
    const products = [
        {
            id: 1,
            name: 'Product 1',
            image: 'https://5.imimg.com/data5/JT/BF/YL/SELLER-45760580/refrigerator-spare-parts.jpg',
            price: 19.99,
            rating: 4.5,
        },
        {
            id: 2,
            name: 'Product 2',
            image: 'https://5.imimg.com/data5/JT/BF/YL/SELLER-45760580/refrigerator-spare-parts.jpg',
            price: 29.99,
            rating: 4.0,
        },
        {
            id: 3,
            name: 'Product 2',
            image: 'https://5.imimg.com/data5/JT/BF/YL/SELLER-45760580/refrigerator-spare-parts.jpg',
            price: 29.99,
            rating: 4.0,
        },
        {
            id: 4,
            name: 'Product 2',
            image: 'https://5.imimg.com/data5/JT/BF/YL/SELLER-45760580/refrigerator-spare-parts.jpg',
            price: 29.99,
            rating: 4.0,
        },
        {
            id: 5,
            name: 'Product 2',
            image: 'https://5.imimg.com/data5/JT/BF/YL/SELLER-45760580/refrigerator-spare-parts.jpg',
            price: 29.99,
            rating: 4.0,
        },
        {
            id: 6,
            name: 'Product 2',
            image: 'https://5.imimg.com/data5/JT/BF/YL/SELLER-45760580/refrigerator-spare-parts.jpg',
            price: 29.99,
            rating: 4.0,
        },
        {
            id: 7,
            name: 'Product 2',
            image: 'https://5.imimg.com/data5/JT/BF/YL/SELLER-45760580/refrigerator-spare-parts.jpg',
            price: 29.99,
            rating: 4.0,
        },
        {
            id: 8,
            name: 'Product 2',
            image: 'https://5.imimg.com/data5/JT/BF/YL/SELLER-45760580/refrigerator-spare-parts.jpg',
            price: 29.99,
            rating: 4.0,
        },
        {
            id: 9,
            name: 'Product 2',
            image: 'https://5.imimg.com/data5/JT/BF/YL/SELLER-45760580/refrigerator-spare-parts.jpg',
            price: 29.99,
            rating: 4.0,
        },
        {
            id: 10,
            name: 'Product 2',
            image: 'https://5.imimg.com/data5/JT/BF/YL/SELLER-45760580/refrigerator-spare-parts.jpg',
            price: 29.99,
            rating: 4.0,
        },

    
       
        // Add more product objects as needed
    ];

    // Calculate the total number of pages
    const totalPages = Math.ceil(products.length / productsPerPage);

    // Calculate the start and end indices for the current page
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    // Slice the products array to display only the current page's items
    const currentProducts = products.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            {/* Product grid */}
            <div className='w-full grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5'>
                {currentProducts.map((product) => (
                    <div key={product.id} className='border w-72 group transition-all duration-500 hover:shadow-md hover:-mt-3'>
                        <div className='relative overflow-hidden'>
                            {/* <div className='flex justify-center items-center absolute badge bg-red-500 text-white  font-semibold text-xs right-2 top-2'>5%</div> */}
                            <img className='h-[240px]' src={product.image} alt={product.name} />
                            <ul className='flex transition-all duration-700 -bottom-10 justify-center items-center gap-2 absolute w-full group-hover:bottom-3'>
                                <li className='w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-red-400 hover:text-white hover:rotate-[720deg] transition-all'><AiFillHeart /></li>

                                <Link to='/product/details/dfgh' className='w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-red-400 hover:text-white hover:rotate-[720deg] transition-all' ><FaEye /></Link>

                                <li className='w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-red-400 hover:text-white hover:rotate-[720deg] transition-all'><AiOutlineShoppingCart /></li>
                            </ul>
                        </div>
                        <div className='py-3 text-slate-600 px-2'>
                            <h2>{product.name}</h2>
                            <div className='flex justify-between items-center gap-3'>
                                <div className='flex'>
                                    <Rating ratings={product.rating} />
                                </div>
                                <span className='text-lg  font-bold'>{product.price} Tk</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className='flex justify-center mt-4'>
                <ul className='flex space-x-2'>
                    {Array.from({ length: totalPages }).map((_, page) => (
                        <li
                            key={page}
                            onClick={() => handlePageChange(page + 1)}
                            className={`cursor-pointer px-2 py-1 rounded-full ${
                                currentPage === page + 1 ? 'bg-red-500 text-white' : 'bg-gray-200'
                            }`}
                        >
                            {page + 1}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Products;

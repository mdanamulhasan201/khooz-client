
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';


const Cart = () => {
    const navigate = useNavigate()
    const cart_products = [1, 2]
    const outOfStockProducts = [1, 2]

    const redirect = () => {
        navigate('/shipping', {
            state: {
                products: [],
                price: 500,
                delivery_cost: 120,
                items: 4
            }
        })
    }
    return (
        <div className='py-20'>
            <div className='container mx-auto'>
                <section className='flex items-center justify-center text-2xl  h-full w-full gap-2'>
                    <Link to='/' className='hover:text-red-500'>Home</Link>
                    <span className='pt-2'><MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight></span>
                    <span>Cart</span>
                </section>

                <section className='mt-5'>
                    <div className=''>
                        {
                            cart_products.length > 0 || outOfStockProducts.length > 0 ? <div className='flex flex-wrap '>
                                <div className='w-full sm:w-full md:w-[67%] lg:w-[67%] xl:w-[67%] mb-5'>
                                    <div className='pr-3 '>
                                        <div className='flex flex-col gap-3'>
                                            <div className='bg-gray-100 p-4'>
                                                <h2 className='text-md text-green-500 font-semibold'> Stocks Products {cart_products.length - outOfStockProducts.length}</h2>
                                            </div>
                                            {
                                                cart_products.map((p, i) => <div key={i} className='flex bg-gray-100 p-4 flex-col gap-2'>
                                                    <div className=' flex justify-start items-center'>
                                                        <h2 className='text-md text-slate-600'>Anamul Store</h2>
                                                    </div>
                                                    {
                                                        [1, 2].map((p, i) => <div key={i} className='w-full flex '>
                                                            <div className='flex  gap-2 w-7/12'>
                                                                <div className='flex gap-2 justify-start items-center'>

                                                                    <img className='w-[80px] h-[80px]' src="https://www.rtcdhaka.com/wp-content/uploads/2023/05/fkzexckCDKrJnuW1z7VydvDJh0sDYYzOU4TZIelX.png" alt="product image" />
                                                                    <div className='pr-4 text-slate-600'>
                                                                        <h1 className='text-md'>Compresser</h1>
                                                                        <span className='text-xs'>Brand : Walton</span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className='flex justify-between w-5/12 '>
                                                                <div className='pl-4 '>
                                                                    <h2 className='text-lg '>100 Tk</h2>
                                                                    <p className='line-through text-red-400'>55 Tk</p>
                                                                    <p>-10%</p>

                                                                </div>
                                                                <div className='flex gap-2 flex-col'>
                                                                    <div className='flex bg-slate-200 h-[30px] justify-center items-center text-xl '>
                                                                        <div className='px-3 cursor-pointer'>-</div>
                                                                        <div className='px-3'>5</div>
                                                                        <div className='px-3 cursor-pointer'>+</div>
                                                                    </div>
                                                                    <button className='px-5 py-[3px] bg-red-400 text-white'>Delete</button>
                                                                </div>
                                                            </div>

                                                        </div>)
                                                    }
                                                </div>)

                                            }

                                            {
                                                outOfStockProducts.length > 0 && <div className='flex flex-col gap-3'>
                                                    <div className='bg-gray-100 p-4'>
                                                        <h2 className='text-md text-red-400 font-semibold'> Out Of Stock {outOfStockProducts.length}</h2>
                                                    </div>
                                                    <div className='bg-gray-100 p-4'>
                                                        {
                                                            [1, 2].map((p, i) => <div key={i} className='w-full flex '>
                                                                <div className='flex  gap-2 w-7/12'>
                                                                    <div className='flex gap-2 justify-start items-center'>

                                                                        <img className='w-[80px] h-[80px]' src="https://www.rtcdhaka.com/wp-content/uploads/2023/05/fkzexckCDKrJnuW1z7VydvDJh0sDYYzOU4TZIelX.png" alt="product image" />
                                                                        <div className='pr-4 text-slate-600'>
                                                                            <h1 className='text-md'>Compresser</h1>
                                                                            <span className='text-xs'>Brand : Walton</span>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className='flex justify-between w-5/12 '>
                                                                    <div className='pl-4 '>
                                                                        <h2 className='text-lg '>100 Tk</h2>
                                                                        <p className='line-through text-red-400'>55 Tk</p>
                                                                        <p>-10%</p>

                                                                    </div>
                                                                    <div className='flex gap-2 flex-col'>
                                                                        <div className='flex bg-slate-200 h-[30px] justify-center items-center text-xl '>
                                                                            <div className='px-3 cursor-pointer'>-</div>
                                                                            <div className='px-3'>5</div>
                                                                            <div className='px-3 cursor-pointer'>+</div>
                                                                        </div>
                                                                        <button className='px-5 py-[3px] bg-red-400 text-white'>Delete</button>
                                                                    </div>
                                                                </div>

                                                            </div>)
                                                        }
                                                    </div>
                                                </div>
                                            }
                                        </div>



                                    </div>
                                </div>


                                <div className='w-full sm:w-full md:w-[33%] lg:w-[33%] xl:w-[33%]'>
                                    <div className='pl-0'>
                                        {
                                            cart_products.length > 0 && <div className='bg-gray-100 p-3 text-slate-600 flex flex-col gap-3'>
                                                <h2 className='text-xl font-bold'>Order Summery</h2>
                                                <div className='flex justify-between items-center '>
                                                    <span>4 Item</span>
                                                    <span>500 Tk</span>
                                                </div>
                                                <div className='flex justify-between items-center '>
                                                    <span>Delivery cost</span>
                                                    <span>120 Tk</span>
                                                </div>
                                                <div className='flex gap-2'>
                                                    <input className='w-full px-3 py-2 border border-slate-200 outline-0 focus:border-green-500 rounded-sm' type="text" placeholder='Input Vauchar Coupon' />
                                                    <button className='px-5 py-[1px] bg-blue-500 text-white rounded-sm uppercase'>Apply</button>
                                                </div>
                                                <div className='flex justify-between items-center '>
                                                    <span>Total</span>
                                                    <span className='text-lg font-semibold'>380 Tk</span>
                                                </div>
                                                <div>
                                                    <button onClick={redirect} className='px-5 py-[6px] w-full rounded-sm hover:shadow-blue-400/20 hover:shadow-lg bg-blue-500 text-white uppercase'>Process to Checkout 4</button>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>

                            </div> : <div>
                                <Link className='px-4 py-1 bg-red-400 text-white' to='/allProducts'>Shop Now</Link>
                            </div>
                        }
                    </div>

                </section>

            </div>
        </div>
    );
};

export default Cart;
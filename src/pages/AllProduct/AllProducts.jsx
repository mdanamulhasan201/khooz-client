import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Range } from 'react-range'
import Products from './Products';

const AllProducts = () => {

    const categorys = [
        'Freeze Parts',
        'Tv Parts',
        'Monitor Parts',
        'AC Parts',
        'CCTV Parts',
        'Fan Parts',
        'Paint',
        'Glass',
        'Motor Parts',
        'PC Parts',
        'Tractor Parts',
        'Bike Parts',
        'Cycle Parts',
        'Car Parts',
        'Electric parts',
        'Cables',
        'Electrical Hand Tools'
    ]
    const [state, setState] = useState({ values: [20, 30000] })
    return (
        <div className='py-20'>
            <div className='container mx-auto'>
                <section className='flex items-center justify-center text-2xl  h-full w-full gap-2'>
                    <Link to='/' className='hover:text-red-500'>Home</Link>
                    <span className='pt-2'><MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight></span>
                    <span>Products</span>
                </section>

                <section className='py-16'>
                  
                    <div className='w-full flex flex-wrap'>
                        <div className='md:w-2/12 w-full ps-2'>
                            <h2 className='text-3xl font-bold mb-3 text-slate-600 '>Category</h2>
                            <div className='py-2'>
                                {
                                    categorys.map((c, i) => <div className='flex justify-start items-center gap-2 py-1' key={i}>
                                        <input type="checkbox" id={c} />
                                        <label className='text-slate-600 block cursor-pointer' htmlFor={c}>{c}</label>
                                    </div>)
                                }
                            </div>
                            <div className='py-2  flex flex-col gap-5'>
                                <h2 className='text-3xl font-bold mb-3 text-slate-600'>Price</h2>
                                <Range
                                    step={5}
                                    min={20}
                                    max={30000}
                                    values={state.values}
                                    onChange={(values) => setState({ values })}
                                    renderTrack={({ props, children }) => (
                                        <div {...props} className='w-full h-[6px] bg-slate-200 rounded-full cursor-pointer'>
                                            {children}
                                        </div>
                                    )}
                                    renderThumb={({ props }) => (
                                        <div className='w-[15px] h-[15px] bg-red-400 rounded-full'  {...props} />


                                    )}
                                />
                                <div>
                                    <span className='text-red-400 font-bold text-lg'> <span >Tk</span> {Math.floor(state.values[0])} - <span >Tk</span> {Math.floor(state.values[1])}  </span>
                                </div>
                            </div>
                        </div>

                        
                        <div className='w-10/12'>
                            <div className='pl-8 '>
                                <div className='py-3 bg-white mb-10 px-3 rounded-md flex justify-between items-center border'>
                                    <h2 className='text-lg font-semibold  text-slate-600 '>10 Products</h2>

                                    <select className='p-1 border outline-0 text-slate-600 font-semibold' name='' id=''>
                                        <option value="">Sort By</option>
                                        <option value="">Low to High</option>
                                        <option value="">High to Low </option>
                                    </select>


                                </div>
                                <div className='pb-8 '>
                                    <Products></Products>

                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </div>

        </div>
    );
};

export default AllProducts;
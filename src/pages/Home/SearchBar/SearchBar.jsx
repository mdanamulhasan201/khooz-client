import { useState } from "react";
import { Link } from "react-router-dom";

const SearchBar = () => {
    const categorys = [
        'Freez',
        'Tv',
        'Fan',
        'Freez',
        'Tv',
        'Fan',
        'Freez',
        'Tv',
        'Fan'

    ]

    const [searchValue, setSearchValue] = useState('')
    const [category, setCategory] = useState('')
    return (
        <div className="w-9/12 pl-8 md:pl-0 mx-auto">
            <div className="flex flex-wrap  justify-between items-center gap-6">
                <div className="w-8/12 mx-auto">
                    <div className="flex border h-[50px] items-center relative gap-5">
                        <div className="relative after:absolute after:h-[25px] after:w-[1px] after:bg-gray-400 after:-right-[15px] ">
                            <select onChange={(e) => setCategory(e.target.value)} className="w-[160px] text-slate-600 font-semibold bg-transparent px-2 h-full outline-0 border-none" name="" id="">
                                <option value="">Select Category</option>
                                {
                                    categorys.map((c, i) => <option key='' value={c}>{c}</option>)
                                }
                            </select>
                        </div>
                        <input className='w-full relative bg-transparent text-stone-500 outline-0 px-3 h-full ' onChange={(e) => setSearchValue(e.target.value)} type="text" name="" id="" placeholder="Find your Product" />
                        <button className="bg-red-400 text-white right-0 absolute px-8 h-full font-semibold uppercase">Search</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SearchBar;




import { BiRightArrowAlt } from "react-icons/bi";
const FavouriteProvider = () => {
    return (
        <div className='container mx-auto -mt-20 mb-20'>

            <div>
                <h1 className='md:ms-6 font-bold text-left text-2xl mb-5'>Top Providers</h1>
            </div>
            <div className='grid  md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                <div className="card mx-auto w-80 bg-base-100 shadow-xl">
                    <figure><img src="https://paylesspowerpoles.com.au/wp-content/uploads/2021/05/Level-2-Electrician-Near-Me-1.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Md. Anamul Hasan
                            <div className="badge bg-red-500 text-white">Top</div>
                        </h2>
                        <p>Electrician</p>
                        <p>Location:Tangail</p>
                        {/* <p>Location:Tangail</p> */}
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline">Rating</div>
                            <div className="badge badge-outline">Details</div>
                        </div>
                    </div>
                </div>
                <div className="card w-80 mx-auto bg-base-100 shadow-xl">
                    <figure><img src="https://paylesspowerpoles.com.au/wp-content/uploads/2021/05/Level-2-Electrician-Near-Me-1.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Md. Anamul Hasan
                            <div className="badge bg-red-500 text-white">Top</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
                <div className="card w-80 mx-auto bg-base-100 shadow-xl">
                    <figure><img src="https://paylesspowerpoles.com.au/wp-content/uploads/2021/05/Level-2-Electrician-Near-Me-1.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Md. Anamul Hasan
                            <div className="badge badge-secondary">Top</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
                <div className="card w-80 mx-auto bg-base-100 shadow-xl">
                    <figure><img src="https://paylesspowerpoles.com.au/wp-content/uploads/2021/05/Level-2-Electrician-Near-Me-1.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Md. Anamul Hasan
                            <div className="badge badge-secondary">Top</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>

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

export default FavouriteProvider;
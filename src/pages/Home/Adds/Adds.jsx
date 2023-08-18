import { IoIosPeople } from "react-icons/io";

const Adds = () => {
    return (
        <div className="bg-[#F8F5FF] w-full mb-32  p-10">
            <div className="container mx-auto flex justify-center">
                <div className="bg-red-500 w-16 mr-5 grid justify-items-center items-center h-16 rounded-full">
                    <IoIosPeople className="text-5xl text-white"></IoIosPeople>
                </div>
                <div>
                    <h2 className="text-2xl font-bold">Want To Be A Piece Of Us?</h2>
                    <p className="text-gray-500">We give a chance for people to work in the professional environment with challenges and values. Come with us!</p>
                </div>
            </div>
        </div>
    );
};

export default Adds;
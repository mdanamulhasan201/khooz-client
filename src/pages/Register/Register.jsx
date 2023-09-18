import { useState } from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";


const Register = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        password: ''
    })

    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const register = (e) => {
        e.preventDefault()
        // dispatch(customer_register(state))
        console.log(state)
    }
    return (
        <div className="py-16">
            <div className="container mx-auto">
                <div className=" mt-4 ">
                    <div className="w-full flex justify-center items-center p-10">
                        <div className=" w-[30%] mx-auto shadow-lg rounded-md" >
                            <div className="p-8 items-center">
                                <h2 className="text-center w-full text-xl text-slate-600 font-bold ">Register</h2>
                                <div className="">
                                    <form onSubmit={register}>
                                        <div className="flex flex-col gap-1 mb-2 ">
                                            <label htmlFor="name">Name</label>
                                            <input onChange={inputHandle} value={state.name} type="text" id="name" name="name" placeholder="name" className="w-full px-3 py-2 border border-slate-200 outline-0 focus:border-red-400 rounded-md " />
                                        </div>
                                        <div className="flex flex-col gap-1 mb-2 ">
                                            <label htmlFor="email">Email</label>
                                            <input onChange={inputHandle} value={state.email}  type="email" id="email" name="email" placeholder="email" className="w-full px-3 py-2 border border-slate-200 outline-0 focus:border-red-400 rounded-md " />
                                        </div>
                                        <div className="flex flex-col gap-1 mb-5 ">
                                            <label htmlFor="password">Password</label>
                                            <input onChange={inputHandle} value={state.password}  type="password" id="password" name="password" placeholder="******" className="w-full px-3 py-2 border border-slate-200 outline-0 focus:border-red-400 rounded-md " />
                                        </div>
                                        <button className="px-8 w-full py-2 bg-red-400 text-white shadow-lg hover:shadow-red-400/40">Register</button>
                                    </form>

                                    <div className='flex justify-center items-center py-2'>
                                        <div className='h-[1px] bg-slate-300 w-[95%]'></div>
                                        <span className='px-3 text-slate-600'>or</span>
                                        <div className='h-[1px] bg-slate-300 w-[95%]'></div>
                                    </div>

                                    <button className='px-8 w-full py-2 bg-blue-500 shadow-lg hover:shadow-indigo-400/40 text-white rounded-md flex justify-center items-center gap-2 mb-3'>
                                        <span><FaFacebookF /></span>
                                        <span>Login with Facebook</span>
                                    </button>
                                    <button className='px-8 w-full py-2 bg-orange-400 shadow-lg hover:shadow-orange-400/40 text-white rounded-md flex justify-center items-center gap-2 mb-3'>
                                        <span><AiOutlineGoogle /></span>
                                        <span>Login with Facebook</span>
                                    </button>

                                </div>
                                <div className='text-center text-slate-600 pt-1'>
                                    <p>You have an account ? <Link className='text-blue-500' to='/login'>Login</Link></p>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;
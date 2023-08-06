import { Link } from "react-router-dom";

import { FaCartPlus, FaSistrix } from "react-icons/fa";
/**
 * 
 * 
 * name : nav bar with serch bar
 * 
 * author : mahedi Hassan
 * 
 * coder : Mahedi Hassan
 * 
 * Desingner : Daraz
 * 
 * 
 * 
 */


const Nav = () => {
    return (
        <div>

            <nav className="w-full h-[28px]  flex justify-center bg-customnavcolor">
                <ul className="flex text-[#212121] opacity-0.8 justify-center gap-7  items-center">
                    <Link className="hover:text-orange-500 hover:duration-500 hover:underline">Home</Link>
                    <Link className="hover:text-orange-500 hover:duration-500 hover:underline">Home</Link>
                    <Link className="hover:text-orange-500 hover:duration-500 hover:underline">Home</Link>

                    <Link className="hover:text-orange-500 hover:duration-500 hover:underline">Home</Link>
                    <Link className="hover:text-orange-500 hover:duration-500 hover:underline">Home</Link>
                    <Link className="hover:text-orange-500 hover:duration-500 hover:underline">Home</Link>

                    <Link className="hover:text-orange-500 hover:duration-500 hover:underline">Home</Link>
                    <Link className="hover:text-orange-500 hover:duration-500 hover:underline">LOGIN /  Register</Link>
                    <Link className="hover:text-orange-500 hover:duration-500 hover:underline">Home</Link>

                </ul>
            </nav>

            {/* another  */}

            <nav className="w-full h-[120px] px-32 bg-white  flex justify-around items-center">
                {/* logo */}
                <Link to="/">

                    <img className="w-28 cursor-pointer " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT__nsMPW5fA3D8zzqYjSU6RjOftxpVvC5rw&usqp=CAU" />
                </Link>
                {/* logo */}

                {/* here is the serch bar  */}

                <div className="">
                    <div className="relative">

                        <input className="outline-none  py-3 px-60 bg-[#f5f5f5]" type="text" placeholder="Serch On Daraz" />


                        <div className="absolute top-0.5 ml-[614px]">

                            <button className="py-4 px-4 bg-orange-500  -mt-0.5 text-white" ><FaSistrix className="text-lg"></FaSistrix></button>

                        </div>
                    </div>
                </div>

                {/* here is the cart  */}
                <Link to="/cart" className="">

                    <button className="">

                        <FaCartPlus className="text-2xl"></FaCartPlus>

                    </button>

                </Link>


                {/* here is the free add */}
                <Link to="/freeDelevery" className="">
                    <img className="w-44 cursor-pointer" src="https://i.ibb.co/BrPV7Rx/d998019b-9b34-44be-b747-1e6d5a892e2c.png" alt="" />
                </Link>

            </nav >

        </div >
    );
};

export default Nav;
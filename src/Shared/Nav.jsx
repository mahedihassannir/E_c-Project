import { Link } from "react-router-dom";


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

            <nav className="w-full h-[28px]  flex justify-center bg-black">
                <ul className="flex text-white justify-center gap-7  items-center">
                    <Link className="hover:text-orange-500 hover:duration-500 hover:underline">Home</Link>
                    <Link className="hover:text-orange-500 hover:duration-500 hover:underline">Home</Link>
                    <Link className="hover:text-orange-500 hover:duration-500 hover:underline">Home</Link>

                    <Link className="hover:text-orange-500 hover:duration-500 hover:underline">Home</Link>
                    <Link className="hover:text-orange-500 hover:duration-500 hover:underline">Home</Link>
                    <Link className="hover:text-orange-500 hover:duration-500 hover:underline">Home</Link>

                    <Link className="hover:text-orange-500 hover:duration-500 hover:underline">Home</Link>
                    <Link className="hover:text-orange-500 hover:duration-500 hover:underline">Home</Link>
                    <Link className="hover:text-orange-500 hover:duration-500 hover:underline">Home</Link>

                </ul>
            </nav>

            {/* another  */}

            <nav className="w-full h-[120px] px-52  flex justify-around items-center">

                <img className="w-28 " src="data:image/png;base64,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" alt="" />

                {/* here is the serch bar  */}

                <div className="">
                    <div className="relative">

                        <input className="py-3 px-60 bg-[#f5f5f5]" type="text" placeholder="Serch On Daraz" />


                        <div className="absolute top-0.5 ml-[614px]">

                            <button className="py-3 px-3 bg-orange-500  -mt-0.5 text-white" >Seh</button>

                        </div>
                    </div>
                </div>

                {/* here is the cart  */}
                <div className="">

                    <button className="btn">Cart</button>

                </div>


                {/* here is the free add */}
                <div className="">
                    <img className="w-44" src="https://i.ibb.co/BrPV7Rx/d998019b-9b34-44be-b747-1e6d5a892e2c.png" alt="" />
                </div>

            </nav >

        </div >
    );
};

export default Nav;
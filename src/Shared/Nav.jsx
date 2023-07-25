import { Link } from "react-router-dom";


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

            <nav className="w-full h-[210px]">
                <ul>
                    <Link></Link>
                </ul>
            </nav>

        </div>
    );
};

export default Nav;
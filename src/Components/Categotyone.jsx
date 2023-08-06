import { Link } from "react-router-dom";
import useItem from "../Hooks/useIten";

const Categotyone = () => {



    const [Menu] = useItem();

    const dessert = Menu.filter(item => item.category === 'dessert');

    const soup = Menu.filter(item => item.category === 'soup');

    const salad = Menu.filter(item => item.category === 'salad');

    const pizza = Menu.filter(item => item.category === 'pizza');

    const offered = Menu.filter(item => item.category === 'offered');



    return (
        <div className="w-full h-44 pt-20 md:flex grid justify-center items-center gap-10">



            <Link className=" flex justify-start pl-4 hover:shadow-2xl cursor-pointer duration-150 gap-4 items-center h-9 w-[190px] rounded-xl border-2 border-red-300  ">


                <div className="">
                    <img className="h-7" src="https://icms-image.slatic.net/images/ims-web/6b396809-87e7-435d-ba7b-5d69699371ba.png" alt="" />
                </div>
                <div className="">food</div>



            </Link>
            <Link to="/food" className=" flex justify-start pl-4 hover:shadow-2xl cursor-pointer duration-150 gap-4 items-center h-9 w-[190px] rounded-xl border-2 border-red-300  ">


                <div className="">
                    <img className="h-7" src="https://icms-image.slatic.net/images/ims-web/773d0210-eda1-4fd6-8b8d-a92dafbe23bd.png" alt="" />
                </div>
                <div className="">Fashion</div>



            </Link>
            <div className=" flex justify-start pl-4 hover:shadow-2xl cursor-pointer duration-150 gap-4 items-center h-9 w-[190px] rounded-xl border-2 border-red-300  ">


                <div className="">
                    <img className="h-7" src="https://icms-image.slatic.net/images/ims-web/d336362c-7d67-4b22-9f96-3b2a60297e0f.png" alt="" />
                </div>
                <div className="">sdsd</div>



            </div>
            <Link to="/homeapplians" className=" flex justify-start pl-4 hover:shadow-2xl cursor-pointer duration-150 gap-4 items-center h-9 w-[190px] rounded-xl border-2 border-red-300  ">


                <div className="">
                    <img className="h-7" src="https://icms-image.slatic.net/images/ims-web/6352f3d8-678c-4630-9eb3-75aae8c1b213.png" alt="" />
                </div>
                <div className="">Home Makeover</div>



            </Link>
            <Link to="/lowprice" className=" flex justify-start pl-4 hover:shadow-2xl cursor-pointer duration-150 gap-4 items-center h-9 w-[190px] rounded-xl border-2 border-red-300  ">


                <div className="">
                    <img className="h-7" src="https://icms-image.slatic.net/images/ims-web/04bf8fdf-14f9-44c0-ac47-79e624c306c8.png" alt="" />
                </div>
                <div className="">Low Price</div>



            </Link>


        </div>
    );
};

export default Categotyone;
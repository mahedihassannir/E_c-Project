
/**
 * 
 * 
 * this sub components is for the home page products 
 * 
*/

import useItem from "../../Hooks/useIten";

const TheProductsOne = () => {

    const [Menu] = useItem();

    const populeritem = Menu.filter(item => item.category === 'popular');

    console.log("popular items", populeritem);


    return (
        // border rounded-sm overflow-hidden hover:shadow-md transition-transform transform hover:scale-200
        <div className="">
            <div className="mt-7 grid grid-cols-7">
                {/* parent main */}
                <div className="w-48 h-[350px] bg-white border rounded-sm overflow-hidden hover:shadow-md transition-transform transform hover:scale-200 cursor-poi ">
                    {/* parent for the docs */}
                    <div className="">
                        {/* img */}
                        <div className="">
                            <div className="">
                                <img className="w-full h-[189px]" src="https://static-01.daraz.com.bd/p/84ce0fc8224aa88c88c5fc0a9ed48dbc.jpg_400x400q75-product.jpg_.webp" alt="" />
                            </div>

                            {/* texts  */}

                            <div className="p-2">
                                {/* product title */}
                                <p className=" font-medium">

                                    Exclusive Jersey T shirt For Man

                                </p>
                                {/* ends */}

                                <h3 className=" text-orange-500 text-2xlgit add  py-2">
                                    $50
                                </h3>

                            </div>

                        </div>


                    </div>


                </div>

                <div className="w-48 h-[350px] bg-white border rounded-sm overflow-hidden hover:shadow-md transition-transform transform hover:scale-200 cursor-poi ">
                    {/* parent for the docs */}
                    <div className="">
                        {/* img */}
                        <div className="">
                            <div className="">
                                <img className="w-full h-[189px]" src="https://static-01.daraz.com.bd/p/84ce0fc8224aa88c88c5fc0a9ed48dbc.jpg_400x400q75-product.jpg_.webp" alt="" />
                            </div>

                            {/* texts  */}

                            <div className="">

                            </div>

                        </div>


                    </div>


                </div>

                <div className="w-48 h-[350px] bg-white border rounded-sm overflow-hidden hover:shadow-md transition-transform transform hover:scale-200 cursor-poi ">
                    {/* parent for the docs */}
                    <div className="">
                        {/* img */}
                        <div className="">
                            <div className="">
                                <img className="w-full h-[189px]" src="https://static-01.daraz.com.bd/p/84ce0fc8224aa88c88c5fc0a9ed48dbc.jpg_400x400q75-product.jpg_.webp" alt="" />
                            </div>

                            {/* texts  */}

                            <div className="">

                            </div>

                        </div>


                    </div>


                </div>
                <div className="w-48 h-[350px] bg-white border rounded-sm overflow-hidden hover:shadow-md transition-transform transform hover:scale-200 cursor-poi ">
                    {/* parent for the docs */}
                    <div className="">
                        {/* img */}
                        <div className="">
                            <div className="">
                                <img className="w-full h-[189px]" src="https://static-01.daraz.com.bd/p/84ce0fc8224aa88c88c5fc0a9ed48dbc.jpg_400x400q75-product.jpg_.webp" alt="" />
                            </div>

                            {/* texts  */}

                            <div className="">

                            </div>

                        </div>


                    </div>


                </div>
                <div className="w-48 h-[350px] bg-white border rounded-sm overflow-hidden hover:shadow-md transition-transform transform hover:scale-200 cursor-poi ">
                    {/* parent for the docs */}
                    <div className="">
                        {/* img */}
                        <div className="">
                            <div className="">
                                <img className="w-full h-[189px]" src="https://static-01.daraz.com.bd/p/84ce0fc8224aa88c88c5fc0a9ed48dbc.jpg_400x400q75-product.jpg_.webp" alt="" />
                            </div>

                            {/* texts  */}

                            <div className="">

                            </div>

                        </div>


                    </div>


                </div>
                <div className="w-48 h-[350px] bg-white border rounded-sm overflow-hidden hover:shadow-md transition-transform transform hover:scale-200 cursor-poi ">
                    {/* parent for the docs */}
                    <div className="">
                        {/* img */}
                        <div className="">
                            <div className="">
                                <img className="w-full h-[189px]" src="https://static-01.daraz.com.bd/p/84ce0fc8224aa88c88c5fc0a9ed48dbc.jpg_400x400q75-product.jpg_.webp" alt="" />
                            </div>

                            {/* texts  */}

                            <div className="">

                            </div>

                        </div>


                    </div>


                </div>
                <div className="w-48 h-[350px] bg-white border rounded-sm overflow-hidden hover:shadow-md transition-transform transform hover:scale-200 cursor-poi ">
                    {/* parent for the docs */}
                    <div className="">
                        {/* img */}
                        <div className="">
                            <div className="">
                                <img className="w-full h-[189px]" src="https://static-01.daraz.com.bd/p/84ce0fc8224aa88c88c5fc0a9ed48dbc.jpg_400x400q75-product.jpg_.webp" alt="" />
                            </div>

                            {/* texts  */}

                            <div className="">

                            </div>

                        </div>


                    </div>


                </div>



            </div>
            {/*  */}
            <div className="text-center mt-20">
                <button className="py-3 px-32 text-orange-500 font-semibold rounded-md border-2 border-orange-500">Show More </button>

            </div>
        </div>
    );
};

export default TheProductsOne;
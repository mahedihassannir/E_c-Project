
/**
 * this is the fashon page 
 * 
 * date : 5 agaust 
 * 
 * coder: mahedi hassan
 * 
 * 
 */
const Fashon = () => {
    return (
        <div className="w-full pb-4">
            {/* here is the banner img */}
            <div>
                <img src="https://gcp-img.slatic.net/lazada/fd32e66a-9612-4427-bac7-1b8db9540c41_BD-1920-450.jpg" alt="" />
            </div>
            {/* ends */}

            {/* here is the some logos  */}

            <div className="flex justify-center my-10">
                <img className="cursor-pointer" src="https://gcp-img.slatic.net/lazada/bc40bb83-b2d0-4f30-a757-bdd7a1ba1a32_BD-388-180.png" alt="" />
                <img className="cursor-pointer" src="https://gcp-img.slatic.net/lazada/676da7c0-9e8d-479f-aeab-74656f97c068_BD-388-180.png" alt="" />
                <img className="cursor-pointer" src="https://gcp-img.slatic.net/lazada/8804da9d-40b7-470d-b95f-88864c980f58_BD-388-180.png" alt="" />

            </div>

            {/* here is the some logos ends */}

            {/* here is 2 pics  */}
            <div className="flex justify-center gap-3">
                <div className="cursor-pointer">

                    <img src="https://gcp-img.slatic.net/lazada/3dfb8aa9-f5a0-4d47-bab8-2f7c578a79b2_BD-588-681.jpg" alt="" />

                </div>

                {/* 2nd div */}
                <div className="cursor-pointer">

                    <img src="https://gcp-img.slatic.net/lazada/aeee6c4d-1539-4d83-b4a8-82e08f631eb8_BD-588-681.jpg" alt="" />

                </div>
            </div>
            {/* here is 2 pics ends */}

            {/* here is the product cart page  */}

            <div className="ml-[162px] mt-4">

                <div className=" cursor-pointer w-48 h-[350px] bg-white border rounded-sm overflow-hidden hover:shadow-md transition-transform transform hover:scale-200 cursor-poi ">
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

            </div>


        </div>
    );
};

export default Fashon;
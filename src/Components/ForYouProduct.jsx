import TheProductsOne from "./Products/TheProductsOne";

const ForYouProduct = () => {
    return (
        <div className="w-11/12 mx-auto mt-10 h-[80vh]">
            <div className="">
                <h3 className="text-3xl ">Just For You</h3>
            </div>


            {/* the products */}
            <TheProductsOne></TheProductsOne>
        </div>
    );
};

export default ForYouProduct;
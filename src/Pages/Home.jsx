import Banner from "../Components/Banner";
import BigCategory from "../Components/BigCategory";
import Categotyone from "../Components/Categotyone";
import FleshSell from "../Components/FleshSell";
import ForYouProduct from "../Components/ForYouProduct";
import ShortB from "../Components/ShortB";



const Home = () => {
    return (
        <div>





            {/* banner */}
            <Banner />



            {/* here is the short banner section */}
            <ShortB></ShortB>



            {/* here is the shop by category section */}
            <Categotyone />



            {/* flash sell section */}
            <FleshSell></FleshSell>


            {/* Big categorys */}
            <BigCategory></BigCategory>

            {/* just for you product */}

            <ForYouProduct></ForYouProduct>



        </div>
    );
};

export default Home;
import Banner from "../Components/Banner";
import Card from "../Components/Card";
import Categotyone from "../Components/Categotyone";
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



        </div>
    );
};

export default Home;
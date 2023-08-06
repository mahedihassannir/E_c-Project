import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Cart from "../Pages/Cart";
import FreeDelevery from "../Pages/freeDelevery";
import Food from "../Components/CategoryPages/Food";
import Fashon from "../Components/CategoryPages/Food";
import Homeapplianse from "../Components/CategoryPages/Homeapplianse";
import LowPrice from "../Components/CategoryPages/LowPrice";


const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },

                {
                    path: '/cart',
                    element: <Cart></Cart>
                },
                {
                    path: '/freeDelevery',
                    element: <FreeDelevery></FreeDelevery>
                },
                {
                    path: '/food',
                    element: <Fashon></Fashon>
                },
                {
                    path: '/homeapplians',
                    element: <Homeapplianse></Homeapplianse>
                },
                {
                    path: '/lowprice',
                    element: <LowPrice></LowPrice>
                },

            ]
        }
    ]
)


export default router
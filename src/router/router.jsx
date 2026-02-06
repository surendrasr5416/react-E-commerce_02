import App from "../App";
import {createBrowserRouter} from 'react-router-dom';
import HomePage from "../pages/HomePage/HomePage";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import ProductDetail from "../pages/productDetail/ProductDetail";

const my_router = createBrowserRouter(
    [
       {
        element:<App/>,
        children:[
            {
                path: '/',
                element:<HomePage/>
            },
            {
                path:'/About',
                element: <About/>
            },
            {
                path:'/Contact',
                element: <Contact/>
            },
            {
                path:'/Product',
                element:<ProductDetail/>
            }
        ]
    }
    ]
)

export default my_router;
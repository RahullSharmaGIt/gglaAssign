import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import ProductListing, { Contact, FB, Home, IG, TP, Wishlist } from './Third';
import Navbar from './Navbar';
import { lazy, Suspense } from 'react';
// import HotelDetail from './HotelDetail';
// import Nopage from './Nopage';

export default function Routing() {
    const Home= lazy(()=> import("./Pages/Home"))
    const Wishlist= lazy(()=> import("./Pages/Wishlist"))
    const Contact= lazy(()=> import("./Pages/Contact"))
    const FB= lazy(()=> import("./Pages/Children/FB"))
    const IG= lazy(()=> import("./Pages/Children/IG"))
    const TP= lazy(()=> import("./Pages/Children/TP"))
    const ProductListing= lazy(()=> import("./Third"))
    const HotelDetail= lazy(()=>import("./HotelDetail"))
    const Nopage= lazy(()=> import("./Nopage"))
    return (
        <>
            {/* It browse all the routes to the browser. */}
            <BrowserRouter>
                {/* With this placement it will route to each page */}
                <Navbar/>
                {/* It is a container of all the route */}
                <Suspense fallback= {<h2>Loading....</h2>}>

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/wishlist' element={<Wishlist />} />
                    <Route path='/allhotels' element={<ProductListing />} />
                    <Route path='/contact' element={<Contact />} >
                        <Route path="tp" element={<TP/>} />
                        <Route path="fb" element={<FB/>} />
                        <Route path="ig" element={<IG/>} />
                    </Route>
                    <Route path='/hotel/:id' element={<HotelDetail/>} />
                    <Route path='*' element={<Nopage/>} />
                </Routes>
                </Suspense>
            </BrowserRouter>
        </>
    )
}
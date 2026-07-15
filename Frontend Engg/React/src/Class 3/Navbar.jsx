import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <>
            <header style={{
                display:"flex",
                justifyContent:"space-between",
                alignItems:"center"
            }}>
                <h1><Link to="/"><span style={{color:"white"}}>Stay</span><span style={{color:"red"}}>Finder</span></Link></h1>
                <div style={{
                    fontSize:"1.4rem",
                    display:"flex",
                    gap:"30px"
                }}>

                    {/* a tag is not used for creating spa */}
                    {/* <a href="/about">About</a>
                    <a href="/allhotels">Hotels</a>
                    <a href="/contact">Contact</a> */}

                    <Link to="/allhotels">Hotels</Link>
                    <Link to="/wishlist">Wishlist</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </header>
        </>
    )
}
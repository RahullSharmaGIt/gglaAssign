import { Outlet, useNavigate } from "react-router-dom"

export default function Contact(){
    let navigate=useNavigate()
    return(
        <>
            <h1>Contact Page</h1>

            <div>
                <button onClick={()=>{navigate("tp")}}>Via Telephone No</button>
                <button onClick={()=>{navigate("fb")}}>Via Facebook </button>
                <button onClick={()=>{navigate("ig")}}>Via Instagram</button>
            </div>

            <Outlet/>
        </>
    )
}




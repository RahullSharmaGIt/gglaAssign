import { useLocation } from "react-router-dom"

export default function Nopage(){
    const {pathname}=useLocation() // object --> pathname
    return(
        <>
            <h1>Page Not Found at {pathname}</h1>
        </>
    )
}
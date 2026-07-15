// Context Api is used to handle the global state of a react application. It eliminates the props from our picture.

import { useContext } from "react"
import { DataContext } from "../App"

// Create
// Provide
// Consume

export default function ContextApi(){
    // Step 3
    const {user,setUser}=useContext(DataContext)
    // console.log(data)
    return(
        <>
            <h1>Context Data : {user}</h1>
            <div>
                <input type="text" onChange={(e)=>{
                    setUser(e.target.value)
                }} />
            </div>
        </>
    )
}
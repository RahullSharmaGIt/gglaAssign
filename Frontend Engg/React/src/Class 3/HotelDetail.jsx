import { useParams } from "react-router-dom"

export default function HotelDetail(){
    const{id}=useParams()
    let url=`https://demohotelsapi.pythonanywhere.com/hotels/${id}`
    return(
        <>
            <h1>Hotel Id : {id}</h1>
        </>
    )
}
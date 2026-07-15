import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function ProductListing(){
    let PAGE_SIZE=33;
    let [hotels,setHotels]=useState([]);
    let [totalCount,setTotalCount]=useState(0);
    let [current,setCurrent]=useState(0);
    let url=`https://demohotelsapi.pythonanywhere.com/hotels/?limit=${PAGE_SIZE}&skip=${current*PAGE_SIZE}`

    async function DataFetch(){
        let res=await fetch(url)
        let hotelData=await res.json(); // count

        // console.log(hotelData);
        setTotalCount(hotelData.count);
        setHotels(hotelData.data)
    }

    // Use case 2:

    // usecase 3 : on update of current , everytime API will get fetched
    useEffect(()=>{
        DataFetch()
    },[current])

    let totalPage=Math.ceil(totalCount/PAGE_SIZE)

    console.log(totalPage)
    console.log(hotels)

    return(
        <>
            <div style={{display:"flex",flexDirection:"column", gap:"30px",padding:"30px 0px"}}>
                {
                    hotels.map((el)=>(
                        <Hotel
                            id={el.id}
                            name={el.name}
                            thumbnail={el.thumbnail}
                            price={el.price}
                            location={el.location}
                            des={el.description}
                            rating={el.rating}
                        />
                    ))
                }
            </div>

            <div style={{
                display:"flex",
                gap:"10px",
                justifyContent:"center"
            }}>
                {
                    Array(totalPage).keys().map((el)=>(

                        <button
                        onClick={()=>{
                            setCurrent(el)
                        }}
                        style={{
                            padding:"10px 15px"
                        }}>{el+1}</button>
                    ))
                }
            </div>
        </>
    )}


function Hotel({id,name,location,des,rating,price,thumbnail}){
    let navigate=useNavigate()

    function toDetailPage(id){
        navigate(`/hotel/${id}`);
    }

    return(
        <div style={{
            display:"flex",
            gap:"30px",
            // border:"2px solid white",
            padding:"10px 20px",
            borderRadius:"30px"
        }}>
            <div onClick={()=>{toDetailPage(id)}}>
                <img width="300px" height="250px" src={thumbnail} alt="" />
            </div>
            <div style={{
                display:"flex",
                flexDirection:"column",
                textAlign:"left",
                justifyContent:"space-between"
            }}>
                <h2 onClick={()=>{toDetailPage(id)}}>{name}</h2>
                <p onClick={()=>{toDetailPage(id)}}>{des.slice(0,200)}...</p>
                <div style={{
                    display:"flex",
                    justifyContent:"space-between"
                }}>
                    <p>Location : {location}</p>
                    <p>Ratings : {rating}</p>
                </div>
                <div style={{
                    display:"flex",
                    justifyContent:"space-between"
                }}>
                    <p>Price : Rs {price}/-</p>
                    <button style={{
                        backgroundColor:"white",
                        color:"black",
                        fontWeight:"bolder",
                        padding:"10px 15px",
                        border:"none"
                    }}>Move To Wishlist</button>
                </div>
            </div>
        </div>
    )
}






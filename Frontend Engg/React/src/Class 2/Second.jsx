import { useEffect, useState } from "react"
import { useForm } from 'react-hook-form'

export default function Second({name,city,skills}){
    // In props we access the value using props keyword which create an object.
    // console.log(props.name)
    // console.log(props.city)
    return(
        <>
            <h1>Props</h1>
            <h2>My name is {name} & I live in {city}</h2>
            <h2>Skills : {skills}</h2>
        </>
    )
}

export function UseEffect(){
    let [count,setCount]=useState(0);
    let [count1,setCount1]=useState(10);
    // UseEffect has three use cases:
    // useEffect(callback,dependency)

    // Use Case 1 : Without any dependency : It will run on each re-renders on the page
        // useEffect(()=>{
        //     console.log("Use case I");
        // })

    // Use Case 2 : With Empty Array : It means , it will run only on the first refresh , and will not run on any other re-renders.
        // useEffect(()=>{
        //     console.log("Use case II");
        // },[])

    // Use Case 3 : With Dependency : It will run only when their is any update in the dependency.
        useEffect(()=>{
            console.log("Use case III");
        },[count])
    return(
        <>
            <h1>Use Effect</h1>

            <div>
                <button onClick={()=>{setCount(count+1)}}>Increase Count</button>
                <button onClick={()=>{setCount1(count1+10)}}>Increase Count1</button>
            </div>
        </>
    )
}

export function FormHandlingManual(){
    // Whenever we see form handling :  UseState()
    let [formData,setFormData]=useState({
        fullname:"",
        email:""
    })

    
    function handleInputChange(e){
        setFormData({
            ...formData, // extract the old data
            [e.target.name]:e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault() ; // It will stop the refresh
        console.log(formData)
    }


    // input change is handled by : onChange function : input -->target : name & value
    return(
        <>
        {/* Jab form submit hotaa h , then it automatically create the refresh. */}
            <form action="" onSubmit={handleSubmit}> 
                <label htmlFor="">Full Name : </label>
                <input type="text"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleInprutChange}
                />
                <br />
                <label htmlFor="">Email : </label>
                <input type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
                <br />
                <input type="submit" />
            </form>
        </>
    )
}

export function FormHandlingPackage(){
    const{
        register, // It handles the input data
        handleSubmit, // It handles the form data , preventDefault in built
        reset, // It reset all the input feilds after submitting data
        formState:{errors} // validate & find the errors of the form
    }=useForm()

    function handleData(data){
        console.log(data);
        reset()
    }
    return(
        <>
            <form action="" onSubmit={handleSubmit(handleData)}> 
                <label htmlFor="">Full Name : </label>
                <input type="text"
                    {...register("fullname",{
                        required:true,
                        maxLength:{value:10,message:"Maximum 10 Characters are allowed"},
                        minLength:{value:5,message:"Minimum 5 Characters Needed"}
                    })}
                />
                {
                    errors.fullname && <span>{errors.fullname.message}</span>
                }
                <br />
                <label htmlFor="">Email : </label>
                <input type="email"
                    {...register("email",{
                        required:true
                    })}
                />
                <br />
                <input type="submit" />
            </form>
        </>
    )
}
import { useState } from "react";

// This is your functional component.
export default function First(){
    return( // It is returning us a HTML.
        // Why we use fragment tag?
        // To ensure that all the tags are bind in one parent , you can also use div tag or any container tag.
        <> 
            <h1>This is my first Component</h1>
        </>
    )
}

// Named Export component.
export function First1(){
    return(
        <>
            <h1>This is my second component</h1>
        </>
    )
}

export function First2(){
    let name="Ayush";
    let city="Noida";

    let skills=["Mern", "Mean","Next JS", "Postgre","GraphQL"]
    return(
        <>
            <h1>My name is {name} & city is {city}</h1>
            <h1>
                Skills : {
                    skills.map((el)=>(
                        `${el} ` // template literal : variable & text ek saath likhna ho.
                    ))
                }
            </h1>
        </>
    )
}

export function StateComponent(){
    // To manage our state we use useState(), it is oour first hook which help us to manage the state across the component.

    // useState() : current,bound dispatchSetState() : it helps us to update the state

    let [count,setCount]=useState(0)
    console.log(count)

    function increase(){
        setCount(count+1)
    }
    function decrease(){
        setCount(count-1)
    }
    return(
        <>  
            <h1>Use State Hook</h1>

            <div>
                <button onClick={increase}>+</button>
                <h2>{count}</h2>
                <button onClick={decrease}>-</button>
            </div>
        </>
    )
}

export function ConditionalRendering(){
    let age=15;
    let s=true;

    let [status,setStatus]=useState(true);
    console.log(status)
    return(
        <>
            {/* <h1>Check Eligibilty : 
                {
                    (age>=21) ? "ELigible" : "Not ELigible"
                }
            </h1>

            {
                s && <p>Hide Para</p>
            } */}

            <div>
                <button onClick={()=>{
                    setStatus(!status)
                }}>
                    {
                        status ? "Hide Para" : "Show Para"
                    }
                </button>
                {
                    status &&
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quisquam iste itaque! Sint incidunt reiciendis veritatis rerum magni, maiores nam! Odit, et harum architecto, officia tempora tenetur dolorem quasi dolore, nesciunt at ipsa! Harum tempore nemo fuga, eveniet, veritatis qui cum repudiandae adipisci eos culpa autem. Ut quas esse, magnam amet dolore sit ea aspernatur dolorum labore cupiditate deserunt laboriosam expedita pariatur cum, ullam porro nostrum laborum deleniti enim magni suscipit accusantium tempora. Laudantium magni quaerat iure in sint id animi tenetur ratione repudiandae magnam sapiente inventore odio quae non voluptas, eligendi nesciunt? Sunt odio maiores quidem deleniti ipsum necessitatibus dolorem at eos sed, cupiditate velit qui saepe inventore dolore, illo minima quia veniam quos mollitia! Ipsa odit vel dolor sunt dolorum labore quasi voluptate. Doloremque, veritatis quibusdam voluptatibus, enim ullam culpa vel dolores quos et eius maiores ducimus? Voluptatem excepturi velit quod, numquam non delectus facilis! Recusandae pariatur illo odit, minima et sequi obcaecati aperiam, eaque, aut sint possimus aspernatur magni! Dignissimos et non magnam cumque asperiores veritatis illum? Error alias tempore ea animi et quibusdam, cupiditate repellat eius ad odio suscipit exercitationem accusamus corrupti nemo quae aperiam ullam hic sapiente. Ut accusantium quos porro laboriosam quaerat molestiae natus!
                </p>}
            </div>
        </>
    )
}
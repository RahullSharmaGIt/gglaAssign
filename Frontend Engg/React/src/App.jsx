import { createContext, useState } from 'react';
import './App.css'
import First, { First1,First2,StateComponent,ConditionalRendering } from './Class 1/First'
import Second, { FormHandlingManual, FormHandlingPackage, UseEffect } from './Class 2/Second';
import Routing from './Class 3/Routing';
import ProductListing from './Class 3/Third';
import ContextApi from './Class 4/ContextApi';

// Step 1 Creating
export const DataContext=createContext()

function App() {

  let name="Ayush";
  let city="Noida";

  let skills=["React","Node","Express","Mongodb"];


  let [user,setUser]=useState("Ayush");


  return (
    <>
      {/* <First />
      <First1 />
      <First2/> */}
      {/* <StateComponent/> */}
      {/* <ConditionalRendering/> */}
      
      {/* The way we give an attribute */}
      {/* <Second name={name} city={city} skills={skills}/> */}
      {/* <UseEffect/> */}
      {/* <FormHandlingManual/> */}
      {/* <FormHandlingPackage/> */}

      {/* <ProductListing/> */}
      <Routing/>

      {/* Step 2 */}
      {/* <DataContext.Provider value={{user,setUser}}>
        <ContextApi/>
      </DataContext.Provider> */}
    </>
  )
}

export default App

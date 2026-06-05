import React from "react"
import Banner from "./banner"
import Products from "./Product"


    function Home({products}){
        return(
    <>

        <Banner/>
        <Products products={products}/>
       

    </>

        )
    }
    export default Home
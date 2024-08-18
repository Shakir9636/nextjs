"use client"
export default function ProductBtn({products}){
    console.log(products)
    return(
        <div>
            <button onClick={()=>{console.log(products.price)}}>Click me</button>
        </div>
    )
}
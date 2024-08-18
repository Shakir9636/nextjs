"use client"
import { useEffect ,useState } from "react"

export default function productList (){
    const [product,setProduct] = useState([])
    const productList = async() =>{
        let data = await fetch("https://dummyjson.com/products");
        data = await data.json();
        setProduct(data.products)
    }
    useEffect(()=>{
        productList()
    },[])
    return(
        <div>
            <h1>Fetch data with api client component</h1>
            {
                product.map((item)=>(
                    <h3>{item.title}</h3>
                ))
            }
        </div>
    )
}
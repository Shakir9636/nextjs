"use client"
import { useEffect ,useState } from "react"
import custom from "./custom.module.css"
import Image from "next/image"
import Public from "../../../public/vercel.svg"

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
            <Image src={Public} />
            <h1 className={custom.main}>Fetch data with api client component</h1>
            {
                product.map((item)=>(
                    <div key={item.title}>
                    <h3>{item.title}</h3>
                    <Image src={item.images[0]} width={200} height={200} alt="product image"/>
                    </div>
                ))
            }
        </div>
    )
}
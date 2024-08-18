async function productList() {
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    return data.products
}
import ProductBtn from "./productBtn";
import { Roboto } from "next/font/google"
const roboto = Roboto({
    weight:'100',
    subsets:['latin'],
    display:'swap'
})
export default async function page() {
    let products = await productList();
    return (
        <div className={roboto.className}>
            <h1>Fetch data with api server component</h1>
            {
                products.map((item)=>(
                    <div>
                    <h3>{item.title}</h3>
                    <ProductBtn products={item}/>
                   </div>
                ))
            }
        </div>
    )
}
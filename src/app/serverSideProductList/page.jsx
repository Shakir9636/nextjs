async function productList() {
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    return data.products
}
export default async function page() {
    let products = await productList();
    return (
        <div>
            <h1>Fetch data with api server component</h1>
            {
                products.map((item)=>(
                    <h3>{item.title}</h3>
                ))
            }
        </div>
    )
}
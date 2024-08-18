'use client'
import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const navigate = (name) => {
    router.push(name)
  }
  const [name,setName] = useState('shakir')
  const apple = (item)=>{
    setName(item)
    console.log(name)
  }
  return (
    <main >
      <h1>Event, function and state {name} </h1>
      <br />
      <Link href='/login'>Go to Login</Link>
      <br />
      <br />
      <Link href='/productList'>Go to client Side Product List</Link>
      <br />
      <br />
      <Link href='/serverSideProductList'>Go to Server Side Product List</Link>
      <br />
      <br />
      <button onClick={()=>navigate('/about')}>go to about</button>
    </main>
  );
}

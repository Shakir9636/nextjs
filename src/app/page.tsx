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
    <main className={styles.main}>
      <h1>Event, function and state {name} </h1>
      <Link href='/login'>Go to Login</Link>
      <button onClick={()=>navigate('/about')}>go to about</button>
    </main>
  );
}

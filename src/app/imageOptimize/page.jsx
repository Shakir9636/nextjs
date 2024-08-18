"use client"

import Image from "next/image"
import Public from "../../../public/vercel.svg"

export default function imageOptimize() {
    console.log(Public)
    return (
        <div>
            <h1>Image optimize</h1>
            <Image src={Public} />
        </div>
    )
}
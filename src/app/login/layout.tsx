'use client'
import { usePathname } from "next/navigation"

export default function Layout({
    children
}) {
    const currentPath = usePathname();
    console.log(currentPath)
    return (
        <div>
            {
                currentPath !== "loginTeacher"?
                <h1>common layout for login</h1>
            :''
            }
            {
                children
            }
        </div>
    )
}
'use client'
export default function Dynamic({params}){
    return(
        <main>
            <h1>Dynamic Route {params.dynamic}</h1>
        </main>
    )
}
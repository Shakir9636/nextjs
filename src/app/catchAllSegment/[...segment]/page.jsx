'use client'
export default function segment({params}){
    return(
        <main>
            <h1>Segment Route {params.segment[0]}</h1>
        </main>
    )
}
// http://localhost:3000/catchAllSegment/sadfdsaf/saf/saf
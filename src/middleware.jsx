import { NextResponse } from "next/server"
export function middleware(request){
    if(request.nextUrl.pathname != '/login'){
        return NextResponse.redirect(new URL('/login',request.url))
    }
}
// signle 
export const  config = {
    matcher:"/about/:path*"
}
// multiple
// export const  config = {
//     matcher:["/about/:path*","/student/:path*"]
// }
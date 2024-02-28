import { authProvider } from "@/lib/utils"
import { LoaderFunction, redirect } from "react-router-dom"

export const loginLoader:LoaderFunction = ({request}) =>{
    const url = new URL(request.url)
    const message = url.searchParams.get('message')
    // const token = localStorage.getItem('TOKEN')
    // if(token){
    //     return redirect('/')
    // }
    console.log(authProvider.isAuthenticated)
    if(authProvider.isAuthenticated) {
        return redirect('/')
    }
    return {message}
}
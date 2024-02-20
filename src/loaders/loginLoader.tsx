import { LoaderFunction } from "react-router-dom"

export const loginLoader:LoaderFunction = ({request}) =>{
    const url = new URL(request.url)
    const message = url.searchParams.get('message')
    return {message}
}
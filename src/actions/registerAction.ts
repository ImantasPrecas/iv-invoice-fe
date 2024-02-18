import { redirect, type ActionFunction } from "react-router-dom"

export const RegisterAction:ActionFunction = async ({request}) =>{
    const formData = await request.formData()
    const user = Object.fromEntries(formData)
    console.log(user)
    return redirect('/login')
}
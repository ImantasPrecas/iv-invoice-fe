import { ActionFunction, redirect } from "react-router-dom";

export const loginAction:ActionFunction = async ({request}) => {
    const userData = Object.fromEntries(await request.formData())

    const url = 'http://localhost:8080/auth/login'

    const fetchOptions = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    }

    const response = await fetch(url, fetchOptions)
    const token = await response.json()
    
    console.log(token);
    

    return redirect('/login')


}
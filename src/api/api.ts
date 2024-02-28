export async function loginUser(credentials: {email:string, password: string}){
    const url = 'http://localhost:8080/auth/login'

    const fetchOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }
    const res = await fetch(url, fetchOptions)
    const data = await res.json()

    if(!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }
    return data
}
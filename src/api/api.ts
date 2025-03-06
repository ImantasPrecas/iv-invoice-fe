interface ILoginRequest {
  email: string
  password: string
}

interface ILoginResponse {
  firstName: string
  lastName: string
  email: string
  token: string
}

export async function loginUser(credentials: ILoginRequest): Promise<ILoginResponse> {
    const url = 'http://localhost:8080/auth/login'

    const fetchOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    }
    const res = await fetch(url, fetchOptions)
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message || 'An error occurred',
            statusText: res.statusText,
            status: res.status,
        }
    }
    console.log('data: ', data)
    return data as ILoginResponse
}

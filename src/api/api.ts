const BASE_URL = 'http://localhost:8080';

export async function loginUser(credentials: {
  email: string;
  password: string;
}) {
  const url = `${BASE_URL}/auth/login`;

  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  };
  const res = await fetch(url, fetchOptions);
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }
  return data;
}

export async function postEditUserProfile(userData: FormData, token:string) {
  const url = `${BASE_URL}/user/update`;

  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(userData),
  };

  const res = await fetch(url, fetchOptions);
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }
  return data;
}

import { redirect, type ActionFunction } from 'react-router-dom';

export interface IUser {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPass: string;
}

export interface IRegisterError {
  password?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  error?:string
}

const BASE_URL = 'http://localhost:8080';

export const RegisterAction: ActionFunction = async ({ request }) => {
  const userData = Object.fromEntries(await request.formData());
  const user: IUser = {
    firstname: userData.firstname as string,
    lastname: userData.lastname as string,
    email: userData.email as string,
    password: userData.password as string,
    confirmPass: userData.confirmPass as string,
  };
  const errors: IRegisterError = {};
  if (typeof user.firstname !== 'string' || user.firstname.length < 3) {
    errors.firstname = 'First name should be more than 3 characters';
  }
  if (typeof user.firstname !== 'string' || user.lastname.length < 3) {
    errors.lastname = 'Last name should be more than 3 characters';
  }
  if (typeof user.email !== 'string' || !user.email.includes('@')) {
    errors.email = 'Email should be right format';
  }
  if (typeof user.password !== 'string' || user.password.length < 6) {
    errors.password = 'Password must be > 6 characters';
  }
  if (user.password !== user.confirmPass) {
    errors.password = "Passwords don't match";
  }

  if (Object.keys(errors).length) {
    return errors;
  }

  const url = `${BASE_URL}/auth/register`;

  const fetchOptions = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstname: user?.firstname,
      lastname: user?.lastname,
      email: user?.email,
      password: user?.password,
    }),
  };

  try {
    const response = await fetch(url, fetchOptions);
    const data = await response.json();
    if(!response.ok){
      errors.error = data.message
      throw errors
    }

    // return data
    return redirect('/login');
  } catch (error) {
    console.log(error);
    return error;
  }
};

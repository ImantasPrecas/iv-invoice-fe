import { type ClassValue, clsx } from "clsx"
import { redirect } from "react-router-dom";
import { twMerge } from "tailwind-merge"

import { loginUser } from '@/api/api';

export interface ISession {
  firstName: string,
  lastName: string,
  email: string,
  isNew: boolean,
  token: string,
}

export interface ICredentials {
  email: string;
  password: string;
}

interface IAuthProvider {
  isAuthenticated: boolean;
  userName: string | null;
  email: string | null;
  session: ISession | null
  token: string | null;
  isProfileUpdated: boolean
  logIn(credentials: ICredentials): Promise<void>;
  logOut(): Promise<void>
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function requireAuth () {
  const sessionData  = localStorage.getItem('session')
  if(!sessionData ){
    throw redirect('/login?message=You need to log in first')
  }
  const session = JSON.parse(sessionData || '')
  // console.log('session: ', session)
  authProvider.isAuthenticated = true
  authProvider.session = session
  authProvider.userName = `${session.firstName} ${session.lastName}`
  return null
}

export const authProvider: IAuthProvider = {
  isAuthenticated: false,
  userName: null,
  email: null,
  token: null,
  session: null,
  isProfileUpdated: false,
  async logIn(credentials) {
      const userData = await loginUser(credentials)
      console.log('userData', userData)
      authProvider.isAuthenticated =true
      authProvider.userName = `${userData.firstName} ${userData.lastName}`
      authProvider.email = userData.email
      authProvider.isProfileUpdated = userData.isProfileUpdated
      authProvider.token = userData.token
      localStorage.setItem('session', JSON.stringify(userData));
  },
  async logOut() {
    authProvider.isAuthenticated = false;
    authProvider.userName = '',
    localStorage.removeItem('session')
  }
  
}
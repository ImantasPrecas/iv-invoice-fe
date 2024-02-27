import { type ClassValue, clsx } from "clsx"
import { redirect } from "react-router-dom";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function requireAuth () {
  const isAuthenticated = false;

  if(!isAuthenticated){
    throw redirect('/login?message=You need to log in first')
  }
  return null
}
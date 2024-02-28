import { ActionFunction, redirect } from 'react-router-dom';
import { ICredentials, authProvider } from '@/lib/utils';

export const loginAction: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const redirectTo = formData.get('redirectTo') as string;

  try {
    await authProvider.logIn({ email, password } as ICredentials);
  } catch (error) {
    return error;
  }
  return redirect(redirectTo || '/');
};

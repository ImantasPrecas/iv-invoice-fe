import AppLogo from '@/components/AppLogo';
import AuthHeader from '@/components/Auth/AuthHeader';
import LoginForm from '@/components/Auth/LoginForm';
import RegistrationForm from '@/components/Auth/RegistrationForm';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link, useLocation} from 'react-router-dom';

function AuthenticationPage() {
  const location = useLocation();
  let isLoggingIn = false;
  if (location.pathname === '/login') {
    isLoggingIn = true;
  } else {
    isLoggingIn = false;
  }

  return (
    <>
      <div className='container relative h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
        {!isLoggingIn ? (
          <Link
            to='/login'
            className={cn(
              buttonVariants({ variant: 'ghost' }),
              'absolute hidden md:grid right-4 top-4 md:right-8 md:top-8'
            )}
          >
            Login
          </Link>
        ) : (
          <Link
            to='/register'
            className={cn(
              buttonVariants({ variant: 'ghost' }),
              'absolute hidden md:grid right-4 top-4 md:right-8 md:top-8'
            )}
          >
            Register
          </Link>
        )}
        <div className='relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r'>
          <div className='absolute inset-0 bg-zinc-900' />
          <div className='relative z-20 flex items-center text-lg font-medium'>
            <AppLogo height='20px' width='20px' fill='white' className='mr-2' />
            My Invoice
          </div>
          <div></div>
          <div className='relative z-20 mt-auto'>
            <AppLogo
              width='80px'
              height='80px'
              fill='white'
              className='flex w-full h-[400px] justify-center items-center mb-32 '
            />
            <div className='space-y-2'>
              <p className='text-lg'>
                Easily manage your Incoices. Track your work progress. And worry
                more about what you do and not on "paper work".
              </p>
            </div>
          </div>
        </div>
        <div className='lg:p-8'>
          <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
            <AppLogo
              width='80px'
              height='80px'
              className='flex justify-center w-full'
            />
            {!isLoggingIn ? (
              <>
              <AuthHeader
                title='Create an account'
                description=' Enter your credentials below to create your account'
              />
              <RegistrationForm />
              </>
            ) : (
              <>
              <AuthHeader
                title='Login to an account'
                description=' Enter your credentials below to log in to your account'
              />
              <LoginForm/>
              </>
            )}

            <p className='px-8 text-center text-sm text-muted-foreground'>
              By clicking continue, you agree to our{' '}
              <Link
                to='/terms'
                className='underline underline-offset-4 hover:text-primary'
              >
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link
                to='/privacy'
                className='underline underline-offset-4 hover:text-primary'
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthenticationPage;

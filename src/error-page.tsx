import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  const error = useRouteError() as Error;

  if (!isRouteErrorResponse(error)) {
    return null;
  }

  return (
    <div className='mx-auto w-full flex flex-col justify-center space-y-6 sm:w-[350px] h-[800px]'>
      <div className='flex flex-col text-center space-y-2'>
        <h1 className='text-2xl font-semibold tracking-tight'>Oops!</h1>
        <h4 className='text-muted-foreground'>Sorry, an unexpected error occured!</h4>
        <p className='text-sm text-muted-foreground'>{error.data}</p>
      </div>

    </div>
  );
};

export default ErrorPage;

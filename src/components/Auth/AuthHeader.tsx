import React from 'react';

type Props = {
  title: string;
  description: string;
};

const AuthHeader: React.FC<Props> = ({ title, description }) => {
  return (
    <div className='flex flex-col space-y-2 text-center'>
      <h1 className='text-2xl font-semibold tracking-tight'>{title}</h1>
      <p className='text-sm text-muted-foreground'>{description}</p>
    </div>
  );
};

export default AuthHeader;

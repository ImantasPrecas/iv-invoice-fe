import { cn } from '@/lib/utils';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { Form } from 'react-router-dom';

interface LoginForm extends React.HtmlHTMLAttributes<HTMLDivElement> {}

function LoginForm({ className, ...props }: LoginForm) {
  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <Form method='post' action='/login'>
        <div className='grid grid-cols-1 sm:grid-cols-6 gap-2'>
          <div className='grid gap-1 sm:col-span-6'>
            <Label className='sr-only' htmlFor='email'>
              Email
            </Label>
            <Input
              type='email'
              name='email'
              id='email'
              placeholder='name@example.com'
              autoCapitalize='none'
              autoComplete='email'
              autoCorrect='off'
              disabled={false}
            />
          </div>
          <div className='grid gap-1 sm:col-span-6'>
            <Label className='sr-only' htmlFor='email'>
              Password
            </Label>
            <Input
              type='password'
              name='password'
              id='password'
              placeholder='Password'
              autoCapitalize='none'
              autoComplete='off'
              autoCorrect='off'
              disabled={false}
            />
          </div>
          
          <Button disabled={false} className='sm:col-span-6'>Login</Button>
        </div>
      </Form>
    </div>
  );
}

export default LoginForm;

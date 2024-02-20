import { cn } from '@/lib/utils';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { Form, useActionData } from 'react-router-dom';
import { IRegisterError } from '../../actions/registerAction';

interface RegistrationForm extends React.HtmlHTMLAttributes<HTMLDivElement> {}

function RegistrationForm({ className, ...props }: RegistrationForm) {
  const errors = useActionData() as IRegisterError;
  console.log('actionData: ', errors);

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <Form method='post' action='/register'>
        <div className='grid grid-cols-1 sm:grid-cols-6 gap-2'>
          <div className='grid gap-1 sm:col-span-3'>
            <Label className='sr-only' htmlFor='email'>
              User Name
            </Label>
            <Input
              className={errors && errors.firstname ? 'border-red-500' : ''}
              type='text'
              name='firstname'
              id='firstname'
              placeholder='Name'
              autoCapitalize='none'
              autoComplete='firstname'
              autoCorrect='off'
              disabled={false}
            />
          </div>
          <div className='grid gap-1 sm:col-span-3'>
            <Label className='sr-only' htmlFor='email'>
              User Lastname
            </Label>
            <Input
             className={errors && errors.lastname ? 'border-red-500' : ''}
              type='text'
              name='lastname'
              id='lastname'
              placeholder='Surname'
              autoCapitalize='none'
              autoComplete='lastname'
              autoCorrect='off'
              disabled={false}
            />
          </div>
          <div className='grid gap-1 sm:col-span-6'>
            <Label className='sr-only' htmlFor='email'>
              Email
            </Label>
            <Input
             className={errors && errors.email ? 'border-red-500' : ''}
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
          <div className='grid gap-1 sm:col-span-3'>
            <Label className='sr-only' htmlFor='email'>
              Password
            </Label>
            <Input
             className={errors && errors.password ? 'border-red-500' : ''}
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
          <div className='grid gap-1 sm:col-span-3'>
            <Label className='sr-only' htmlFor='email'>
              Confirm Password
            </Label>
            <Input
             className={errors && errors.password ? 'border-red-500' : ''}
              type='password'
              name='confirmPass'
              id='confirmPass'
              placeholder='Confirm Password'
              autoCapitalize='none'
              autoComplete='off'
              autoCorrect='off'
              disabled={false}
            />
          </div>
          {errors && (
            <div className='grid gap-1 sm:col-span-6'>
              {Object.entries(errors).map(([key, value]) => (
                <p key={key} className='text-xs text-red-500 '>
                  {value}
                </p>
              ))}
            </div>
          )}
          <Button disabled={false} className='sm:col-span-6'>
            Register
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default RegistrationForm;

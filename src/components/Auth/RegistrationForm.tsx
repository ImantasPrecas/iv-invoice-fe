import { cn } from '@/lib/utils';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { Form, useActionData, useNavigation } from 'react-router-dom';
import { IRegisterError } from '../../actions/registerAction';

interface RegistrationForm extends React.HtmlHTMLAttributes<HTMLDivElement> {}

function RegistrationForm({ className, ...props }: RegistrationForm) {
  const errors = useActionData() as IRegisterError;
  const navigation = useNavigation()

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <Form method='post' action='/register'>
        <div className='grid grid-cols-1 sm:grid-cols-6 gap-2'>
          <div className='grid gap-1 sm:col-span-3'>
            <Label className='sr-only' htmlFor='email'>
              User Name
            </Label>
            <Input
              className={errors && errors.firstName ? 'border-red-500' : ''}
              type='text'
              name='firstName'
              id='firstName'
              placeholder='Name'
              autoCapitalize='none'
              autoComplete='firstName'
              autoCorrect='off'
              disabled={false}
            />
          </div>
          <div className='grid gap-1 sm:col-span-3'>
            <Label className='sr-only' htmlFor='email'>
              User LastName
            </Label>
            <Input
             className={errors && errors.lastName ? 'border-red-500' : ''}
              type='text'
              name='lastName'
              id='lastName'
              placeholder='Surname'
              autoCapitalize='none'
              autoComplete='lastName'
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
          <Button disabled={navigation.state === 'submitting'} className='sm:col-span-6'>
          {navigation.state === 'submitting' ? 'Submitting...' : 'Register'}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default RegistrationForm;

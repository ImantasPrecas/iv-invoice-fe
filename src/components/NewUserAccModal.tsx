import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { DialogDescription } from '@radix-ui/react-dialog';
import { Separator } from './ui/separator';
import { Form, useSubmit } from 'react-router-dom';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { MinusCircleIcon, PlusCircleIcon } from 'lucide-react';
import { authProvider } from '@/lib/utils';

interface Input {
  id: number;
  value: string;
}

interface FormatedField {
  code: number;
  title: string;
}
// interface FormDataObject {
//   [key: string]: FormDataEntryValue | FormatedField[] | undefined;
// }

const NewUserAccModal = () => {
  const { session, isProfileUpdated } = authProvider;

  const [typeFields, setTypeFields] = useState<Input[]>([{ id: 0, value: '' }]);
  const submit = useSubmit();

  const addTypeFieldHandler: React.MouseEventHandler<HTMLButtonElement> = (
    e
  ) => {
    e.preventDefault();
    const newId = Math.max(...typeFields.map((field) => field.id)) + 1;
    setTypeFields([...typeFields, { id: newId, value: '' }]);
  };

  const removeTypeFieldHandler = (id: number) => {
    setTypeFields(typeFields.filter((field) => field.id !== id));
  };

  const handleInputChange = (
    id: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newInputs = typeFields.map((field) =>
      field.id === id ? { ...field, value: e.target.value } : field
    );
    setTypeFields(newInputs);
  };

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formatedTypeFields: FormatedField[] = [];
    typeFields.forEach((field) => {
      const activityType = {
        code: +field.value.split('-')[0],
        title: field.value.split('-')[1],
      };
      formatedTypeFields.push(activityType);
      // formData = {...formData, activityTypes: [...formData.activityTypes]}
    });
    formData.append(`activityTypes`, JSON.stringify(formatedTypeFields));

    // const data: FormDataObject = Object.fromEntries(formData);
    // if ('activityTypes' in data && typeof data.activityTypes === 'string') {
    //   data.activityTypes = JSON.parse(data.activityTypes);
    // }

    // console.log(data);

    submit(formData, {
      method: 'post',
      action: '/editUserProfile',
      navigate: false,
    });
  };

  return (
    <Dialog defaultOpen={!isProfileUpdated}>
      <DialogContent className='max-w-[700px]'>
        <DialogHeader>
          <DialogTitle>Update Profile</DialogTitle>
          <DialogDescription className='font-light text-sm'>
            Fill up all fields and continue
          </DialogDescription>
          <Separator />
        </DialogHeader>
        <Form onSubmit={handleSubmitForm} navigate={false}>
          <div className='grid grid-cols-6  gap-2 mt-4'>
            <div className='grid gap-1 col-span-6 sm:col-span-3'>
              <Label className='flex' htmlFor='name'>
                Name, Surname<span className='text-destructive'>*</span>
              </Label>
              <Input
                type='text'
                name='name'
                id='name'
                defaultValue={`${session?.firstName} ${session?.lastName}`}
                placeholder='John Doe'
                autoCapitalize='none'
                autoComplete='name'
                autoCorrect='off'
                disabled={false}
                required={true}
              />
            </div>
            <div className='grid gap-1 col-span-6 sm:col-span-3'>
              <Label className='flex' htmlFor='iaRegistration'>
                IA registration number
                <span className='text-destructive'>*</span>
              </Label>
              <Input
                type='text'
                name='iaRegistration'
                id='iaRegistration'
                placeholder='000000'
                autoCapitalize='none'
                autoComplete='off'
                autoCorrect='off'
                disabled={false}
                required={true}
              />
            </div>
            <div className='col-span-6 w-full border rounded-lg px-4 my-6 py-2'>
              <Label className='flex mb-2'>Types of activities</Label>
              <div className='flex flex-col gap-4'>
                {typeFields.map((field, index) => (
                  <div key={index} className='flex gap-4'>
                    <Input
                      className='flex-grow w-full'
                      type='text'
                      value={field.value}
                      placeholder='900100-Scenos pastatymų veikla'
                      onChange={(e) => handleInputChange(field.id, e)}
                    />
                    <div className='flex'>
                      {typeFields.length - 1 !== index ? (
                        <Button
                          variant={'ghost'}
                          className='m-0 p-0'
                          onClick={() => removeTypeFieldHandler(field.id)}
                        >
                          <MinusCircleIcon />
                        </Button>
                      ) : (
                        <Button
                          type='button'
                          variant={'ghost'}
                          className='m-0 p-0'
                          onClick={addTypeFieldHandler}
                        >
                          <PlusCircleIcon />
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='grid gap-1 col-span-6'>
              <Label className='flex' htmlFor='address'>
                Address
                <span className='text-destructive'>*</span>
              </Label>
              <Input
                type='text'
                name='address'
                id='address'
                placeholder='221B Baker Street, London'
                autoCapitalize='none'
                autoComplete='off'
                autoCorrect='off'
                disabled={false}
                required={true}
              />
            </div>
            <div className='grid gap-1 col-span-6 sm:col-span-3'>
              <Label className='flex' htmlFor='bankName'>
                Bank
                <span className='text-destructive'>*</span>
              </Label>
              <Input
                type='text'
                name='bankName'
                id='bankName'
                placeholder='Bababank'
                autoCapitalize='none'
                autoComplete='off'
                autoCorrect='off'
                disabled={false}
                required={true}
              />
            </div>
            <div className='grid gap-1 col-span-6 sm:col-span-3'>
              <Label className='flex sm:text-base' htmlFor='bankAccount'>
                Bank account number
                <span className='text-destructive'>*</span>
              </Label>
              <Input
                type='text'
                name='bankAccount'
                id='bankAccount'
                placeholder='LT121000011101001000'
                autoCapitalize='none'
                autoComplete='off'
                autoCorrect='off'
                disabled={false}
                required={true}
              />
            </div>
            <div className='col-span-6 text-xs mb-6'>
              <p>You can allways change your settings in account menu.</p>
            </div>
            <Button
              type='submit'
              // disabled={navigation.state === 'submitting'}
              className='col-span-6'
            >
              Submit
              {/* {navigation.state === 'submitting' ? 'Submitting...' : 'Login'} */}
            </Button>
          </div>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default NewUserAccModal;

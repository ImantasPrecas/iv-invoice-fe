import { postEditUserProfile } from '@/api/api';
import { authProvider } from '@/lib/utils';
import { ActionFunction, redirect } from 'react-router-dom';
interface FormatedField {
  code: number;
  title: string;
}
export interface FormDataObject {
  name?: string;
  [key: string]: FormDataEntryValue | FormatedField[] | undefined;
}
export const editUserProfile: ActionFunction = async ({ request }) => {
  const { session } = authProvider;
  const token = session?.token;

  let data: FormDataObject = Object.fromEntries(await request.formData());

  if ('activityTypes' in data && typeof data.activityTypes === 'string') {
    data.activityTypes = JSON.parse(data.activityTypes);
  }
  const name: string = data.name as string;
  const [firstName, lastName] = name.split(' ');
  data = { ...data, firstName: firstName, lastName: lastName };

  try {
    if (token && data) {
      console.log('api call');
      const response = await postEditUserProfile(data, token);
      console.log(response);
      return response
    }
  } catch (error) {
    if(error instanceof Error){
      return error.message
    } else {
      return 'Error'
    }
  }

  return redirect('/');
};

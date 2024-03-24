import { ActionFunction, redirect } from 'react-router-dom';
interface FormatedField {
  code: number;
  title: string;
}
interface FormDataObject {
  [key: string]: FormDataEntryValue | FormatedField[] | undefined;
}
export const editUserProfile: ActionFunction = async ({ request }) => {
  const data: FormDataObject = Object.fromEntries(await request.formData());
  if ('activityTypes' in data && typeof data.activityTypes === 'string') {
    data.activityTypes = JSON.parse(data.activityTypes);
  }
  console.log('log from action', data);

  return redirect('/');
};

import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const create = createUser();
  const upload = uploadPhoto();

  return Promise.all([create, upload])
    .then((data) => console.log(`${data[1].body} ${data[0].firstName} ${data[0].lastName}`))
    .catch(() => console.log('Signup system offline'));
}

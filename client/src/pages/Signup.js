import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react';
//import { Modal } from 'flowbite-react';
import { Label } from 'flowbite-react';
import { TextInput } from 'flowbite-react';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

import { Link } from 'react-router-dom';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className='px-48 py-8'>
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="username"
              value="Your username"
            />
          </div>
          <TextInput
            id="username"
            type="username"
            placeholder="fluffyandpuffy"
            required={true}
            shadow={true}
            onChange={handleChange}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="email2"
              value="Your email"
            />
          </div>
          <TextInput
            id="email2"
            type="email"
            placeholder="name@flowbite.com"
            required={true}
            shadow={true}
            onChange={handleChange}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="password2"
              value="Your password"
            />
          </div>
          <TextInput
            id="password2"
            type="password"
            required={true}
            shadow={true}
            onChange={handleChange}
          />
        </div>
        <Button type="submit">
          Register new account
        </Button>
      </form>
    </div>
  );
}

export default Signup;

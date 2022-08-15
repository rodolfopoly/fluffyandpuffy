import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
//import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react';
import { Modal } from 'flowbite-react';
import { Label } from 'flowbite-react';
import { TextInput } from 'flowbite-react';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props) {
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { username: formState.username, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <React.Fragment>
        {/* <Button onClick={onClick}>
          LOG IN
        </Button> */}
        <Modal
          show={false}
          size="md"
          popup={true}
          //onClose={onClose}
        >
          <Modal.Header />
          <Modal.Body>
            <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
              <h3 className="text-xl font-medium text-[#dce73f] dark:text-white">
                LOG IN AND ORDER
              </h3>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="username"
                    value="Username"
                  />
                </div>
                <TextInput
                  id="username"
                  placeholder="Username"
                  required={true}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="password"
                    value="Password"
                  />
                </div>
                <TextInput
                  id="password"
                  type="Password"
                  required={true}
                />
              </div>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Want dessert?
                <a
                  href="/modal"
                  className="text-blue-700 hover:underline dark:text-blue-500"
                >
                  Create account
                </a>
              </div>
            </div>
          </Modal.Body>
        </Modal>
    </React.Fragment>
  );
  
}

export default Login;
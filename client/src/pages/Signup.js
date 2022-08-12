import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(props) {
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        username: formState.username,
        email: formState.email,
        password: formState.password,
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
    <React.Fragment>
        <Button onClick={onClick}>
          SIGN UP
        </Button>
        <Modal
          show={false}
          size="md"
          popup={true}
          onClose={onClose}
        >
          <Modal.Header />
          <Modal.Body>
            <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
              <h3 className="text-xl font-medium text-[#dce73f] dark:text-white">
                SIGN UP AND ORDER
              </h3>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="email"
                    value="Email"
                  />
                </div>
                <TextInput
                  id="email"
                  placeholder="name@email.com"
                  required={true}
                />
              </div>
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
                Already a member?
                <a
                  href="/modal"
                  className="text-blue-700 hover:underline dark:text-blue-500"
                >
                  Log In
                </a>
              </div>
            </div>
          </Modal.Body>
        </Modal>
    </React.Fragment>
  );


}  

export default Signup;

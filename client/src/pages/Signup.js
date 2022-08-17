import React, { useState } from 'react';
import { Button } from 'flowbite-react';
import { Modal } from 'flowbite-react';
import { Label } from 'flowbite-react';
import { TextInput } from 'flowbite-react';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(props) {
  const [formEmail, setFormEmail] = useState();
  const [formUsername, setFormUsername] = useState();
  const [formPassword, setFormPassword] = useState();

  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formEmail,
        password: formPassword,
        username: formUsername
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChangeEmail = (event) => {
    const { name, value } = event.target;
    setFormEmail(value)
  };
  const handleChangeUsername = (event) => {
    const { name, value } = event.target;
    setFormUsername(value)
  };
  const handleChangePassword = (event) => {
    const { name, value } = event.target;
    setFormPassword(value)
  };


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
      <button onClick={handleShow}>
        Sign Up
      </button>
      <Modal
        show={show}
        size="md"
        popup={true}
        onClose={handleClose}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Sign up to our platform
            </h3>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="username"
                  value="Your username"
                />
              </div>
              <TextInput
                id="username"
                placeholder="fluffyandpuffy"
                required={true}
                onChange={handleChangeUsername}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="email"
                  value="Your email"
                />
              </div>
              <TextInput
                id="email"
                placeholder="name@fluffyandpuffy.com"
                required={true}
                onChange={handleChangeEmail}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="password"
                  value="Your password"
                />
              </div>
              <TextInput
                id="password"
                type="password"
                required={true}
                onChange={handleChangePassword}
              />
            </div>
            <div className="w-full">
              <Button
                onClick={handleFormSubmit}>
                Sign Up
              </Button>
            </div>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}

export default Signup;

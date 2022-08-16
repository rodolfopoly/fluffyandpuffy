import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react';
import { Modal } from 'flowbite-react';
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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
      <Button onClick={handleShow}>
        Sign Up
      </Button>
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
              />
            </div>
            <div className="w-full">
              <Button>
                Sign Up
              </Button>
            </div>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?{' '}
              <button>
              <Link to="/Signup">Login</Link>
              </button>              
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}

export default Signup;

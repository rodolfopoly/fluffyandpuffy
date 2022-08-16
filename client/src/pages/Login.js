import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react';
import { Modal } from 'flowbite-react';
import { Label } from 'flowbite-react';
import { TextInput } from 'flowbite-react';
import { LOGIN } from '../utils/mutations';
//import Signup from './Signup';
import Auth from '../utils/auth';

function Login(props) {

  const [formUsername, setFormUsername] = useState();
  const [formPassword, setFormPassword] = useState();

  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { username: formUsername, password: formPassword },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChangeUsername = (event) => {
    const { name, value } = event.target;
    setFormUsername(value)
  };
  const handleChangePassword = (event) => {
    const { name, value } = event.target;
    setFormPassword(value)
    console.log(value);
  };


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <React.Fragment>
      <Button onClick={handleShow}>
        Login
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
              Sign in to our platform
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
                Log in to your account
              </Button>
            </div>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?{' '}
              <button>
              <Link to="/Signup">Signup</Link>
              </button>              
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );

}

export default Login;
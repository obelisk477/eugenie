import ErrorAlert from './ErrorAlert'
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link, useNavigate } from 'react-router-dom';


import { LOGIN_CREATOR } from '../graphql/mutations';
import { LOGIN_BRAND } from '../graphql/mutations';

import { useCurrentUserContext } from '../context/CurrentUser';

export default function Login() {
  const { loginUser } = useCurrentUserContext();
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    email: '',
    password: ''
  });

  const [loginCreator, { error: creatorError }] = useMutation(LOGIN_CREATOR);
  const [loginBrand, { error: brandError }] = useMutation(LOGIN_BRAND);

  const handleFormSubmit = async event => {
    event.preventDefault();
    // Set single login function to handle 
    const login = event.nativeEvent.submitter.id == 'creator-login' ? loginCreator : loginBrand
    try {
      const mutationResponse = await login({
        variables: {
          email: formState.email,
          password: formState.password,
        },
      });
      let mutationObj = mutationResponse.data[Object.keys(mutationResponse.data)[0]]
      const { token } = mutationObj;
      const user = mutationObj[Object.keys(mutationObj)[Object.keys(mutationObj).findIndex(el => el.includes('current'))]]
      loginUser(user, token);
      navigate('/dashboard');
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  return (
    <>
      {(creatorError || brandError) ? (
         <ErrorAlert  />
      ) : null}
      <form id="login-form" onSubmit={handleFormSubmit}>
        <h2>Login</h2>
        <label htmlFor="email">
          Email:
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            placeholder="******"
            name="password"
            type="password"
            value={formState.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit" id="creator-login">
          Creator Login
        </button>
        <button type="submit" id="brand-login">
          Brand Login
        </button>
        <p>
          Need an account? Sign up
          {' '}
          <Link to="/">here</Link>
        </p>
      </form>
    </>
  );
}
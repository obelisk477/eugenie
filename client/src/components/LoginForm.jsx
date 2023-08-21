import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link, useNavigate } from 'react-router-dom';

import { LOGIN_USER } from '../graphql/mutations';

import { useCurrentUserContext } from '../context/CurrentUser';

export default function Login() {
  const { loginUser } = useCurrentUserContext();
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    email: '',
    password: ''
  });

  const [login, { error }] = useMutation(LOGIN_USER);

  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: {
          email: formState.email,
          password: formState.password
        },
      });
      const { token, user } = mutationResponse.data.login;
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
      {error ? (
        <div>
          <p className="error-text">The provided credentials are incorrect</p>
        </div>
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
        <button type="submit">
          Login
        </button>
        <p>
          Need an account? Sign up
          {' '}
          <Link to="/register">here</Link>
        </p>
      </form>
    </>
  );
}
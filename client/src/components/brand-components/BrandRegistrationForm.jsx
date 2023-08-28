import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link, useNavigate } from 'react-router-dom';

import { REGISTER_BRAND } from '../../graphql/mutations';

import { useCurrentUserContext } from '../../context/CurrentUser';

export default function Registration() {
  const { loginUser } = useCurrentUserContext();
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    brandName: '',
    email: '',
    password: ''
  });

  const [registerBrand, { error }] = useMutation(REGISTER_BRAND);

  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      const mutationResponse = await registerBrand({
        variables: {
          brandName: formState.brandName,
          email: formState.email,
          password: formState.password,
        },
      });
      const { token, currentBrand } = mutationResponse.data.registerBrand;
      loginUser(currentBrand, token);
      navigate('/dashboard');
    } catch (e) {
    // eslint-disable-next-line no-console
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
      <form id="registration-form" onSubmit={handleFormSubmit}>
        <h2>Register</h2>
        <label htmlFor="brandName">
          Brand name:
          <input
            type="text"
            id="brandName"
            name="brandName"
            value={formState.brandName}
            onChange={handleChange}
          />
        </label>
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
          Sign Up
        </button>
        <p>
          Already have an account? Login
          {' '}
          <Link to="/login">here</Link>
        </p>
      </form>
    </>
  );
}
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link, useNavigate } from "react-router-dom";

import "./../../App.css";

import { REGISTER_CREATOR } from "../../graphql/mutations";

import { useCurrentUserContext } from "../../context/CurrentUser";
import { Checkbox } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faFacebook,
  faTiktok,
  faSnapchatGhost,
} from "@fortawesome/free-brands-svg-icons";

export default function Registration() {
  const { loginUser } = useCurrentUserContext();
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    audience: 0,
    platforms: {
      instagram: false,
      youtube: false,
      facebook: false,
      tiktok: false,
      snapchat: false,
    },
  });

  const [registerCreator, { error }] = useMutation(REGISTER_CREATOR);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await registerCreator({
        variables: {
          firstName: formState.firstName,
          lastName: formState.lastName,
          email: formState.email,
          password: formState.password,
          audience: formState.audience,
          platforms: formState.platforms,
        },
      });
      console.log(mutationResponse.data);
      const { token, currentCreator } = mutationResponse.data.registerCreator;
      console.log(token);
      console.log(currentCreator);
      loginUser(currentCreator, token);
      navigate("/dashboard");
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (name === "audience") {
      const parsedValue = parseInt(value, 10);
      setFormState((prevState) => ({
        ...prevState,
        [name]: parsedValue,
      }));
    } else if (type === "checkbox") {
      setFormState((prevState) => ({
        ...prevState,
        platforms: {
          ...prevState.platforms,
          [name]: checked,
        },
      }));
    } else {
      setFormState({ ...formState, [name]: value });
    }
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
        <label htmlFor="firstName">
          First name:
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formState.firstName}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="lastName">
          Last name:
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formState.lastName}
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
        <label htmlFor="audience">
          Audience:
          <input
            type="number"
            id="audience"
            name="audience"
            value={formState.audience}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="platforms">Platforms <br></br>(Select all that apply):</label>
        <div className="checkbox-container">
          <label className="checkbox-label">
            <Checkbox
              name="instagram"
              checked={formState.platforms.instagram}
              onChange={handleChange}
            />
            <FontAwesomeIcon icon={faInstagram} className="checkbox-icon" />
            Instagram
          </label>
          <label className="checkbox-label">
            <Checkbox
              name="youtube"
              checked={formState.platforms.youtube}
              onChange={handleChange}
            />
            <FontAwesomeIcon icon={faYoutube} className="checkbox-icon" />
            YouTube
          </label>
          <label className="checkbox-label">
            <Checkbox
              name="facebook"
              checked={formState.platforms.facebook}
              onChange={handleChange}
            />
            <FontAwesomeIcon icon={faFacebook} className="checkbox-icon" />
            Facebook
          </label>
          <label className="checkbox-label">
            <Checkbox
              name="tiktok"
              checked={formState.platforms.tiktok}
              onChange={handleChange}
            />
            <FontAwesomeIcon icon={faTiktok} className="checkbox-icon" />
            TikTok
          </label>
          <label className="checkbox-label">
            <Checkbox
              name="snapchat"
              checked={formState.platforms.snapchat}
              onChange={handleChange}
            />
            <FontAwesomeIcon
              icon={faSnapchatGhost}
              className="checkbox-icon"
            />
            Snapchat
          </label>
        </div>
        <button type="submit">Sign Up</button>
        <p>
          Already have an account? Login <Link to="/register">here</Link>
        </p>
      </form>
    </>
  );
}

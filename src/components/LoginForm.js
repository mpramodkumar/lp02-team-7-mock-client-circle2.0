import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-md/lib/Buttons/Button';
import TextField from 'react-md/lib/TextFields';

import { validatePresence } from '../utils/inputValidations';

import '../assets/stylesheets/LoginForm.css';

const LoginForm = ({ userName, password, handleChange, onSubmit, message }) => {
  const formValid = () => {
    return validatePresence(userName) && validatePresence(password);
  };

  const renderLoginText = () => {
    return 'Team Seven';
  };

  return (
    <form className="login-form login-form__container" onSubmit={onSubmit}>
      <h2 className="login-form__title">{renderLoginText()}</h2>
      <div className="login-form__content">
        <TextField
          id="userName"
          onChange={value => handleChange('userName', value)}
          placeholder="Username"
          value={userName}
          required
          className="md-cell md-cell--bottom login-form__input"
          inputClassName="font_size__normal"
        />
        <TextField
          id="password"
          onChange={value => handleChange('password', value)}
          placeholder="Password"
          type="password"
          value={password}
          required
          className="md-cell md-cell--bottom login-form__input"
          inputClassName="font_size__normal"
        />

        <div className="login-form__buttons">
          <Button
            className="login-form__submit"
            disabled={!formValid()}
            label="LOGIN"
            onClick={onSubmit}
            raised
            primary
            type="submit"
          />
        </div>
        <p className="">Need help logging in?</p>
      </div>
      <span className="login-form__message">{message}</span>
    </form>
  );
};

LoginForm.propTypes = {
  userName: PropTypes.string,
  password: PropTypes.string,
  handleChange: PropTypes.func,
  onSubmit: PropTypes.func,
  message: PropTypes.string,
};

export default LoginForm;

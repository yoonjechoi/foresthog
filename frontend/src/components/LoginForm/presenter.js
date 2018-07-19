import React from "react";
import PropTypes from "prop-types";
import formStyles from "shared/formStyles.scss";

const LoginForm = (props) => (
  <div className={formStyles.formComponent}>
    <form className={formStyles.form} onSubmit={props.handleSubmit} method="post">
      <input
        type="text"
        placeholder="Username"
        className={formStyles.textInput}
        onChange={props.handleInputChange}
        name="username"
        value={props.usernameValue}
      />
      <input
        type="password"
        placeholder="Password"
        className={formStyles.textInput}
        onChange={props.handleInputChange}
        name="password"
        value={props.passwordValue}
      />
      <input
        type="submit"
        value="Log in"
        className={formStyles.button}
      />
    </form>
    <span className={formStyles.divider}>or</span>
  </div>
);


LoginForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  usernameValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default LoginForm;

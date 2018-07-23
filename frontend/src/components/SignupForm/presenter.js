import React from "react";
import PropTypes from "prop-types";
import formStyles from "shared/formStyles.scss";

const SignupForm = (props) => (
  <div className={formStyles.formComponent}>
    <h3 className={formStyles.signupHeader}>
      Sign up to see photos and videos from your friends.
    </h3>
    {/*add Facebook Login here*/}
    <span className={formStyles.divider}>or</span>
    <form className={formStyles.form} onSubmit={props.handleSubmit} method="post">
      <input
        type="email"
        placeholder="Email"
        className={formStyles.textInput}
        onChange={props.handleInputChange}
        name="email"
        value={props.emailValue}
      />
      <input
        type="text"
        placeholder="Full Name"
        className={formStyles.textInput}
        onChange={props.handleInputChange}
        name="name"
        value={props.nameValue}
      />
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
        value="Sign up"
        className={formStyles.button}
      />
    </form>
    <p className={formStyles.term}>
      By signing up, you agree to our <span>Terms & Privacy Policy</span>
    </p>
  </div>
);


SignupForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  usernameValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SignupForm;

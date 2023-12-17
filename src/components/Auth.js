import { useDispatch, useSelector } from "react-redux";
import classes from "./Auth.module.css";
import { authActions } from "../store/index";

const Auth = () => {
  const currentEmail = useSelector(state => state.auth.insertedEmail);
  const currentPassword = useSelector(state => state.auth.insertedPassword);
  const hasAuthenticationFailed = useSelector(state => state.auth.hasAuthenticationFailed);
  const dispatch = useDispatch();

  function loginSubmitHandler(event) {
    event.preventDefault();
    dispatch(authActions.authenticationFailed(false));
    if(currentPassword === '' || currentEmail === '' || !currentEmail.includes('@'))
    {
      dispatch(authActions.authenticationFailed(true));
    }
    else {
      dispatch(authActions.login());
      dispatch(authActions.resetLogin());
    }
  }

  function setEmailHandler(event) {
    dispatch(authActions.setEmail(event.target.value));
  }

  function setPasswordHandler(event) {
    dispatch(authActions.setPassword(event.target.value));
  }
  

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginSubmitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input onChange={setEmailHandler} type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input onChange={setPasswordHandler} type="password" id="password" />
          </div>
          <button>Login</button>
          {hasAuthenticationFailed && <p>Authentication failed</p>}
        </form>
      </section>
    </main>
  );
};

export default Auth;

import "../style/Login.css";

const Login = () => {
  return (
    <div className="container-loginPage">
      <div className="loginPageTitle">Login</div>
      <div className="container-loginForm">
        <input
          type="text"
          className="inputEmail loginInput"
          placeholder="Email Address"
        />
        <input
          type="text"
          className="inputPassword loginInput"
          placeholder="Password"
        />
        <i class="fa fa-eye-slash" aria-hidden="true"></i>
        <div className="container-forgotPass">
          <div className="forgotPass">Forgot Password?</div>
        </div>
        <button className="loginBtn">Login</button>
        <div className="register">Register For New Account</div>
      </div>
    </div>
  );
};

export default Login;

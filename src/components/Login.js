import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="user-info">
          <p className="login-header">Signin to your PopX account</p>

          <p className="login-details">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>
        <div className="input-container input-login-container">
          <div>
            <input
              type="text"
              className="text-input login-input-email"
              placeholder="Enter email address"
              disabled
            />
            <div className="label-input login-email">
              <p className="login-email-box">Email address</p>
            </div>
          </div>
          <div>
            <input
              type="text"
              className="text-input login-input-password"
              placeholder="Enter password"
              disabled
            />
            <div className="label-input login-password">
              <p className="login-password-box">Password</p>
            </div>
          </div>
        </div>
        <Link to="/Profile">
          <button className="login-button">Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;

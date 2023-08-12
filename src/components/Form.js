import { Link } from "react-router-dom";
import "./Form.css";

function Form() {
  return (
    <div className="container">
      <div className="box">
        <div className="box-header">
          <h1 className="form-text-header">Welcome to PopX</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        </div>
        <div className="buttons">
          <Link to="/account">
            <button className="create-btn">Create Account</button>
          </Link>
          <Link to="/login">
            <button className="login-btn">Already Registered? Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Form;

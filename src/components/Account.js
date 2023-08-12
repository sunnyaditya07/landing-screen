import { Link } from "react-router-dom";
import "./Account.css";
import { useState } from "react";

function Account() {
  const [unChecked, setUnChecked] = useState("false");
  function handleChange() {
    setUnChecked(unChecked);
  }
  return (
    <div className="account-container">
      <div className="account-box">
        <div className="account-text-box">
          <h1 className="account-text-header">Create Your PopX account</h1>
        </div>
        <div className="input-container">
          <div>
            <input
              type="text"
              className="text-input"
              value="Marry Doe"
              disabled
            />
            <div className="label-input full-name">
              <p className="fname-box">
                Full Name<span>*</span>
              </p>
            </div>
          </div>
          <div>
            <input
              type="text"
              className="text-input"
              value="Marry Doe"
              disabled
            />
            <div className="label-input phone-number">
              <p className="phone-box">
                Phone number<span>*</span>
              </p>
            </div>
          </div>
          <div>
            <input
              type="text"
              className="text-input"
              value="Marry Doe"
              disabled
            />
            <div className="label-input email-address">
              <p className="email-box">
                Email address<span>*</span>
              </p>
            </div>
          </div>
          <div>
            <input
              type="text"
              className="text-input"
              value="Marry Doe"
              disabled
            />
            <div className="label-input password">
              <p className="password-box">
                Password<span>*</span>
              </p>
            </div>
          </div>
          <div>
            <input
              type="text"
              className="text-input company"
              value="Marry Doe"
              disabled
            />
            <div className="label-input  company-name">
              <p className="company-box">Company name</p>
            </div>
          </div>
        </div>
        <div className="footer-box">
          <p className="footer-para">
            Are you an Agency?<span>*</span>
          </p>
          <div className="radio-button">
            <input type="radio" defaultChecked className="checkbox-rounded" />

            <label className="checkbox-option">Yes</label>
            <input
              type="radio"
              className="checkbox-rounded"
              value="no"
              checked={!unChecked}
              onChange={handleChange}
            />
            <label className="checkbox-option">No</label>
          </div>
        </div>

        <div className="footer-btn">
          <Link to="/Profile">
            <button className="create-btn">Create Account</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Account;

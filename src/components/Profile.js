import "./Profile.css";
import profilePhoto from "../images/profilePhoto.png";
import cameraLogo from "../images/cameraLogo.png";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <p className="settings-text">Account Settings</p>
      </div>
      <div className="profile-box">
        <img src={profilePhoto} alt="person " className="profile-img" />
        <img src={cameraLogo} alt="camera logo" className="camera-logo" />
        <div className="details">
          <p className="name">Marry Doe</p>
          <p className="email-id">Marry@Gmail.Com</p>
        </div>
        <div className="description-box">
          <p className="description">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>
      </div>
      <div className="border-design-one"></div>
      <div className="border-design-two"></div>
    </div>
  );
}

export default Profile;

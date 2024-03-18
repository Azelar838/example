import searchLogo from '../assets/icons/Search.svg';
import settingsLogo from '../assets/icons/Settings.svg';
import notificationBellLogo from '../assets/icons/NotificationBell.svg';
import userImg from '../assets/images/profile-img.png'

const Header = () => {

  return (
    <div className="header">
      <div className="inputContainer">
        <img className="icon" src={searchLogo} alt="" />
        <input type="text" placeholder="Search" />
      </div>
      <div className="userContainer">
        <div className="setttingContainer btn">
          <img src={settingsLogo} alt="" />
        </div>
        <div className="notificationContainer ">
          <img src={notificationBellLogo} alt="" />
          <div>18</div>
        </div>
        <div className="userName">Jihed</div>
        <div className="userImg">
          <img  src={userImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;

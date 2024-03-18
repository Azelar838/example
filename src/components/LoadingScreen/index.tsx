import Logo from "../../assets/images/softyeducation-logo.svg";
import './index.css'

const LoadingScreen = () => {
  return (
    <div className='loading-screen'>
      <img alt='logo' src={Logo} />
    </div>
  );
};

export default LoadingScreen;

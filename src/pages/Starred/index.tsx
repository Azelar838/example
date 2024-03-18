import StarIcon from '../../assets/icons/Star.svg';
import Files from '../../components/Files/File';
import '../../pages/Starred'
import FILES from '../../constants/files';
import './index.css'
const Starred = () => {
  const data = FILES.slice(0,5)

  return (
    <div className="starred">
      <nav>
        <div className="logo-container">
          <div className="logo">
            <img src={StarIcon} alt="" />
          </div>
          <h2> Starred Files</h2>
        </div>
      </nav>
      <Files data={data} />
    </div>
  );
};

export default Starred;

import BoxIcon from '../../assets/icons/Box.svg';
import Files from '../../components/Files/File';
import FILES from '../../constants/files';
import './index.css'

const Archived = () => {
const data=FILES.slice(0,5)

  return (
    <div className="archived">
      <nav>
        <div className="logo-container">
          <div className="logo">
            <img src={BoxIcon} alt="" />
          </div>
          <h2>Achived Files</h2>
        </div>
      </nav>
      <Files data={data} />
    </div>
  );
};

export default Archived;

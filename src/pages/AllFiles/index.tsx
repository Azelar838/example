import FileStructureIcon from '../../assets/icons/FileStructure.svg';
import Files from '../../components/Files/File';
import FILES from '../../constants/files';
import './index.css'

const AllFiles = () => {
  const data=FILES.slice(0,10)
  return (
    <div className="all-files">
      <nav>
        <div className="logo-container">
          <div className="logo">
            <img src={FileStructureIcon} alt="" />
          </div>
          <h2> All Files</h2>
        </div>
      </nav>
      <Files data={data} />
    </div>
  );
};
export default AllFiles;

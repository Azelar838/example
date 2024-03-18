import Upload from '../../assets/icons/Upload.svg';
import './index.css'
const UploadFiles = () => {

  return (
    <div className="upload-file">
      <input type="file" id="file" multiple  />
      <label htmlFor="file" className="btn-2">
        <img src={Upload} alt="" />
        Upload
      </label>
    </div>
  );
};

export default UploadFiles;

import Card from '../../components/UI/Card';
import FileIcon from '../../assets/icons/File.svg';
import VideoIcon from '../../assets/icons/Video.svg';
import ImageIcon from '../../assets/icons/Image.svg';
import bytesToSize from '../../utils/bytesToSize';
import StoragePercentage from '../../utils/storagePercentage';

const DataSummary = () => {

  const summary = [
    {
      name: 'Documents',
      icon: FileIcon,
      className: 'file',
      size:1,
      maxSize: 1,
    },
    {
      name: 'Images',
      icon: ImageIcon,
      className: 'image',
      size: 1,
      maxSize:1,
    },
    {
      name: 'Video',
      icon: VideoIcon,
      className: 'video',
      size: 1,
      maxSize:1,
    },
  ];

  return (
    <div className="dataSummary">
      {summary?.map((el, index) => {
        return (
          <Card key={index}>
            <div className={`home-card ${el.className}`}>
              <div className="img-container">
                <img src={el.icon} alt="" />
              </div>
              <h3>{el.name}</h3>
              <div className="progress-bar">
                <div
                  style={{
                    width: `${StoragePercentage(el.size, el.maxSize)}%`,
                  }}
                ></div>
              </div>
              <div className="description">
                <span> {StoragePercentage(el.size, el.maxSize)}%</span>
                <p>
                  {bytesToSize(el.size)} of {bytesToSize(el.maxSize)}
                </p>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default DataSummary;

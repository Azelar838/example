import { useLocation } from 'react-router-dom';
import bytesToSize from '../../utils/bytesToSize';
import addIcon from '../../utils/addIcon';
import dateFormat from '../../utils/dateFormat';
import FileAction from './FileAction';

export interface CardFileProps{
  id:string,
  name:string,
  size:number,
  type:string,
  createdAt:string,
  archivedAt:string | null
  starredAt:string | null
  isStarred:boolean,
  isArchived:boolean,
}

const CardFile = ({
  name,
  size,
  type,
  createdAt,
  id,
  isStarred,
  isArchived,
  starredAt,
  archivedAt,
}:CardFileProps) => {
  const location = useLocation();
  let currentLocation = location.pathname;
  let dateType = createdAt;
  if (currentLocation === '/starred') dateType = starredAt as string;
  if (currentLocation === '/archived') dateType = archivedAt as string;
  const newSize = bytesToSize(size);
  const newDate = dateFormat(dateType);
  const icon = addIcon(type);

  return (
    <ul
      key={id}
      className={
        currentLocation === '/'
          ? 'card-file-home card-file'
          : 'card-file-action card-file'
      }
    >
      <li className="fileName">
        <div className="file-icon">
          <img src={icon} alt="" />
          {currentLocation === '/all-files' && (
            <div>
              {isStarred && <div className="file-starred point"></div>}
              {isArchived && <div className="file-archived point"></div>}
            </div>
          )}
        </div>
        {name}.{type}
      </li>
      <li className="fileDate">{newDate}</li>
      <li className="fileSize"> {newSize}</li>
      <FileAction id={id} isStarred={isStarred} isArchived={isArchived} />
    </ul>
  );
};

export default CardFile;

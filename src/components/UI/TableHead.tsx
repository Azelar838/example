import { useLocation } from 'react-router';
import './index.css'

const TableHead = () => {
  const location = useLocation();
  const currentLocation = location.pathname;
  let tableDate = 'Date created';
  if (currentLocation === '/starred') tableDate = 'Date Starred';
  if (currentLocation === '/archived') tableDate = 'Date Archived';
  return (
<h1>Goodbye University lifz</h1>
<h2>it has been a fun ride</h2>
            <h3>Thanks to everyone</h3>
  );
};

export default TableHead;

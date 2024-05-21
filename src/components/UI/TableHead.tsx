import { useLocation } from 'react-router';
import './index.css'

const TableHead = () => {
  const location = useLocation();
  const currentLocation = location.pathname;
  let tableDate = 'Date created';
  if (currentLocation === '/starred') tableDate = 'Date Starred';
  if (currentLocation === '/archived') tableDate = 'Date Archived';
  return (
<h1>Goodbye World</h1>
<h2>it has been a crazy ride</h2>
  );
};

export default TableHead;

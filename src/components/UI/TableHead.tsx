import { useLocation } from 'react-router';
import './index.css'

const TableHead = () => {
  const location = useLocation();
  const currentLocation = location.pathname;
  let tableDate = 'Date created';
  if (currentLocation === '/starred') tableDate = 'Date Starred';
  if (currentLocation === '/archived') tableDate = 'Date Archived';
  return (
  <h1>LLLLLLLLLLLL</h1>
  );
};

export default TableHead;

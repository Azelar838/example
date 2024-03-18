import Files from '../../components/Files/File';
import DataSummary from './DataSummary';
import SidebarCard from './SidebarCard';
import FILES from '../../constants/files';
import './index.css'

const Home = () => {
  let data=FILES.slice(0,5)
  return (
    <div className="home">
      <DataSummary />
      <div className="recentFile">
        <div className="recentFile-container">
          <h1>Recent Files</h1>
          <Files data={data} />
        </div>
        <SidebarCard />
      </div>
    </div>
  );
};

export default Home;

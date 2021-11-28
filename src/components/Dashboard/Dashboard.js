import styles from '../Dashboard/Dashboard.module.scss';
import TopBar from '../TopBar/TopBar';
import AppBoard from '../AppBoard/AppBoard';
import IconBar from '../IconBar/IconBar';


const Dashboard = () => {
    return (
        <div className={styles.wrapper}>
          <TopBar/>
      <AppBoard />
      <IconBar />
    </div>
  );
}

export default Dashboard;

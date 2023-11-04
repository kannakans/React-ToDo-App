import logo from './logo.svg';
import styles from './App.module.css';
import PageHeader from './components/PageHeader';
import AppHeader from './components/AppHeader'
import AppContent from './components/AppContent'

function App() {
  return (
      <div className={styles.container}>
      <PageHeader>TODO LIST</PageHeader>
      <div className={styles.app_wrapper}>
        <AppHeader></AppHeader>
        <AppContent></AppContent>
      </div>
      </div>
  );
}

export default App;

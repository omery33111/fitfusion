import { Outlet } from 'react-router-dom';
import MyNavbar from './features/navigators/MyNavbar';
import MyFooter from './features/navigators/MyFooter';
import './index.css';



function App() {


  
  return (
    <div className="App">

      <MyNavbar />

      <Outlet />

      <MyFooter />
      
    </div>
  );
}

export default App;

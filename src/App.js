import './css/style.css'
import './css/MediaQuery.css'
import './css/stylesheet.css'
import './App.css';
import Navbarr from './components/Navbarr';
import AllRouter from './router/AllRouter';
import Footer from './components/Footer';
import AddProduct from './pages/Addproduct';

function App() {
  return (
    <>
      {/* <Navbarr/>
      <AllRouter/>
      <Footer/> */}
      <AddProduct/>
    </>
  );
}

export default App;

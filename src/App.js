import logo from './logo.svg';
import './App.css';
import Room from './Components/Room';
import "bootstrap/dist/css/bootstrap.css"
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Barchart from './Components/Barchart/Barchart';


function App() {
  
  
  return (
    <div>
      <Navbar/>
      <Room/>
      <Home/>
      <Barchart/>
      
      
      
    </div>
  );
}

export default App;

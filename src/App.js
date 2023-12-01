import logo from './logo.svg';
import './App.css';
import Room from './Components/Room';
import "bootstrap/dist/css/bootstrap.css"
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
function App() {
  return (
    <div>
      <Navbar/>
      <Room/>
      <Home/>
      
    </div>
  );
}

export default App;

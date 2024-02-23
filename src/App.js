import "./Components/Feedback.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from './Components/Navbar';
import MyRouts from './Components/Router';


function App() { 
  return (
    <div>
      <Navbar/>
      <MyRouts/>
    </div>
  );
}
export default App;

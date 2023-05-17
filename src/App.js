
import './App.css';
import PageNotFound from './components/PageNotFound'
import Main from './components/Navbar/Main';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element ={<div><Main/></div>} />
      <Route path="/notexist" element ={<div><PageNotFound/></div>} />
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;

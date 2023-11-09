import './App.css';
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Home from './components/Home/Home';
import CompanyInfo from './components/CompanyInfo/CompanyInfo';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/companyinfo" element={<CompanyInfo/>}/>
      </Routes>
    </Router>
  );
}

export default App;

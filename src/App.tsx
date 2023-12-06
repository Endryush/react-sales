import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import SignUp from './components/Login/Register';
import Navbar from './components/Navbar/Navbar';

import './styles/App.scss';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={SignUp} />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import SignUp from './components/Login/Register';
import './styles/App.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={SignUp} />
      </Routes>
    </Router>
  );
}

export default App;

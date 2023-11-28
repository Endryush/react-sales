import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import './styles/App.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" Component={Login} />
      </Routes>
    </Router>
  );
}

export default App;

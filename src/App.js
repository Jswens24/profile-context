import logo from './logo.svg';
import './App.css';
import Auth from './components/Auth';
import { Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Auth />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;

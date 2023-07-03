import { Route, Routes } from 'react-router-dom';
import './App.css';
import Counter from './Counter';
import LoginPage from './LoginPage';

function App() {

  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/' element={<Counter />} />
    </Routes>
  )
}

export default App;

import { Route, Routes } from 'react-router-dom';
import RandomCharacter from './views/RandomCharacter';
import LandingPage from './views/LandingPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/random-character' element={<RandomCharacter />} />
    </Routes>
  );
}

export default App;

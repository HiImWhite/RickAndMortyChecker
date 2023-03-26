import { Route, Routes } from 'react-router-dom';
import RandomCharacter from './views/RandomCharacter';
import LandingPage from './views/LandingPage';
import NotFound from './views/NotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/random-character' element={<RandomCharacter />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;

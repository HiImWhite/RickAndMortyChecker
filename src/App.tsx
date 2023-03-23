import { Route, Routes } from 'react-router-dom';
import CreateCharacter from './views/CreateCharacter';
import LandingPage from './views/LandingPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/create-character' element={<CreateCharacter />} />
    </Routes>
  );
}

export default App;

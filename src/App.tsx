import { Route, Routes } from 'react-router-dom';

import RandomCharacter from './views/RandomCharacter';
import LandingPage from './views/LandingPage';
import NotFound from './views/NotFound';
import Wrapper from './components/Wrapper/Wrapper';

function App() {
  return (
    <Routes>
      <Route path='/RickAndMortyChecker' element={<Wrapper />}>
        <Route path='/RickAndMortyChecker' element={<LandingPage />} />
        <Route
          path='/RickAndMortyChecker/random-character'
          element={<RandomCharacter />}
        />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

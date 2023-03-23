import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

const MainContent = () => {
  const [characterData, setCharacterData] = useState<Character[]>([]);

  useEffect(() => {
    const url = 'https://rickandmortyapi.com/api/character';

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setCharacterData(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box>
      {characterData.map((character) => (
        <div key={character.id}>
          <h2>{character.name}</h2>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender}</p>
          <img src={character.image} alt={character.name}></img>
        </div>
      ))}
    </Box>
  );
};

export default MainContent;

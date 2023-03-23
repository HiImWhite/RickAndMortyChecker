import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

const MainContent = () => {
  const [characterData, setCharacterData] = useState([]);

  useEffect(() => {
    const url = 'https://rickandmortyapi.com/api/character';

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setCharacterData(data.result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    console.log(characterData);
  }, []);

  return <Box>{}</Box>;
};

export default MainContent;

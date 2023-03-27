import { useState } from 'react';
import { Box, Button } from '@mui/material';

import { Character } from '../../interfaces/Character';
import Loader from '../Loader/Loader';
import CustomCard from '../CustomCard/CustomCard';

const RandomContent = () => {
  const [characterData, setCharacterData] = useState<Character>();
  const [loading, setLoading] = useState(false);

  const randomNumber = Math.floor(Math.random() * 600);
  const randomUrl = `https://rickandmortyapi.com/api/character/${randomNumber}`;

  const fetchData = async () => {
    try {
      const response = await fetch(randomUrl);
      const data = await response.json();
      setCharacterData(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const handleClick = () => {
    fetchData();
  };

  if (loading) return <Loader />;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
      <Button
        sx={{ mt: 10, mb: 2 }}
        size='large'
        variant='contained'
        onClick={handleClick}>
        Generate Character
      </Button>
      {characterData && <CustomCard character={characterData} />}
    </Box>
  );
};

export default RandomContent;

import { useState } from 'react';
import {
  Grid,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { Character } from '../../interfaces/Character';

const RandomContent = () => {
  const [characterData, setCharacterData] = useState<Character>({
    id: 0,
    name: '',
    status: '',
    species: '',
    gender: '',
    image: '',
  });
  const [loading, setLoading] = useState<boolean>(false);

  const randomNumber = Math.floor(Math.random() * 600);
  const randomUrl = `https://rickandmortyapi.com/api/character/${randomNumber}`;

  const fetchData = async () => {
    try {
      const response = await fetch(randomUrl);
      const data = await response.json();
      setCharacterData(data);

      console.log(data);
      console.log(characterData);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const handleClick = () => {
    fetchData();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
      {characterData.id === 0 ? (
        <Button
          sx={{ margin: 3 }}
          size='large'
          variant='contained'
          onClick={handleClick}>
          Generate Character
        </Button>
      ) : (
        <>
          <Button
            sx={{ margin: 3 }}
            size='large'
            variant='contained'
            onClick={handleClick}>
            Generate Character
          </Button>
          <Card
            sx={{
              width: '75%',
              ['@media (min-width:600px)']: {
                width: '50%',
              },
              ['@media (min-width:960px)']: {
                width: '25%',
              },
            }}>
            <CardMedia
              component='img'
              image={characterData.image}
              alt={characterData.name}
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {characterData.name}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Status: {characterData.status}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Species: {characterData.species}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Gender: {characterData.gender}
              </Typography>
            </CardContent>
          </Card>
        </>
      )}
    </Box>
  );
};

export default RandomContent;

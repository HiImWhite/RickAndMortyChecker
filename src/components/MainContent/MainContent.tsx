import { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Card,
  CardMedia,
  Typography,
  CardContent,
} from '@mui/material';
import { Character } from '../../interfaces/Character';

const MainContent = () => {
  const [characterData, setCharacterData] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const url = 'https://rickandmortyapi.com/api/character';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setCharacterData(data.results);

        console.log(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  console.log(characterData);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Box>
      <Grid container>
        {characterData.map((character) => (
          <Grid item xs={12} sm={6} md={4} key={character.id}>
            <Card sx={{ margin: 3 }}>
              <CardMedia
                component='img'
                image={character.image}
                alt={character.name}
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  {character.name}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Status: {character.status}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Species: {character.species}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Gender: {character.gender}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MainContent;

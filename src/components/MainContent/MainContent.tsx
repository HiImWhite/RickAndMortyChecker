import { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Card,
  CardMedia,
  Typography,
  CardContent,
  Button,
} from '@mui/material';
import { Character } from '../../interfaces/Character';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import IconButton from '@mui/material/IconButton';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import MainModal from '../Modal/MainModal';

const MainContent = () => {
  const [characterData, setCharacterData] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [newCharacterData, setNewCharacterData] = useState<Character>({
    id: 0,
    name: '',
    status: '',
    species: '',
    gender: '',
    image: '',
  });
  const [editingCharacterId, setEditingCharacterId] = useState<number>(0);

  const url = 'https://rickandmortyapi.com/api/character';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedData = localStorage.getItem('characterData');
        if (storedData) {
          setCharacterData(JSON.parse(storedData));
        } else {
          const response = await fetch(url);
          const data = await response.json();
          setCharacterData(data.results);
          localStorage.setItem('characterData', JSON.stringify(data.results));
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    fetchData();
  }, [url]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setEditingCharacterId(0);
    setNewCharacterData({
      id: 0,
      name: '',
      status: '',
      species: '',
      gender: '',
      image: '',
    });
  };

  const handleDelete = (id: number) => {
    setCharacterData((prevData) => {
      const updatedData = prevData.filter((data) => data.id !== id);
      localStorage.setItem('characterData', JSON.stringify(updatedData));
      return updatedData;
    });
  };

  const handleEdit = (id: number) => {
    const character = characterData.find((c) => c.id === id);
    setNewCharacterData(character as Character);
    setEditingCharacterId(id);
    setIsEditMode(true);
    handleOpen();
  };

  const handleSubmit = () => {
    const newCharacter = {
      id: editingCharacterId || characterData.length + 1,
      name: newCharacterData.name,
      status: newCharacterData.status,
      species: newCharacterData.species,
      gender: newCharacterData.gender,
      image:
        newCharacterData.image ||
        'https://rickandmortyapi.com/api/character/avatar/19.jpeg',
    };

    if (editingCharacterId) {
      setCharacterData((prevData) => {
        const updatedData = prevData.map((data) => {
          if (data.id === editingCharacterId) {
            return newCharacter;
          }
          return data;
        });
        localStorage.setItem('characterData', JSON.stringify(updatedData));
        return updatedData;
      });
    } else {
      setCharacterData([...characterData, newCharacter]);

      localStorage.setItem(
        'characterData',
        JSON.stringify([...characterData, newCharacter]),
      );
    }
    handleClose();
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const files = event.target.files;
    if (!files || files.length === 0) {
      return;
    }
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      setNewCharacterData((prevData) => ({
        ...prevData,
        image: reader.result as string,
      }));
    };
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
        Loading...
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
      <Button
        sx={{ marginTop: 3 }}
        size='large'
        variant='contained'
        onClick={() => {
          handleOpen();
        }}>
        Add character
      </Button>
      <MainModal
        open={open}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        handleImageChange={handleImageChange}
        newCharacterData={newCharacterData}
        setNewCharacterData={setNewCharacterData}
        isEditMode={isEditMode}
      />
      <Grid container>
        {characterData.map((character) => (
          <Grid item xs={12} sm={6} md={4} xl={3} key={character.id} mb={5}>
            <Card sx={{ margin: 3 }}>
              <CardMedia
                component='img'
                image={character.image}
                alt={character.name}
                sx={{ height: '600px', width: '100%', minWidth: '585' }}
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
                <Box
                  display='flex'
                  alignItems='flex-end'
                  justifyContent='flex-end'>
                  <IconButton onClick={() => handleDelete(character.id)}>
                    <DeleteForeverRoundedIcon />
                  </IconButton>
                  <IconButton onClick={() => handleEdit(character.id)}>
                    <EditRoundedIcon />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MainContent;

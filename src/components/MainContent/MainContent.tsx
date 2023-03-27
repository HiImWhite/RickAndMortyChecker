import { useState, useEffect } from 'react';
import { Box, Grid, Button } from '@mui/material';
import CustomCard from '../CustomCard/CustomCard';
import { Character } from '../../interfaces/Character';
import MainModal from '../Modal/MainModal';
import Loader from '../Loader/Loader';
import { nanoid } from 'nanoid';

const url = 'https://rickandmortyapi.com/api/character';

const MainContent = () => {
  const defaultCharacter = {
    id: nanoid(),
    name: '',
    status: '',
    species: '',
    gender: '',
    image: '',
  };
  const [characterData, setCharacterData] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [newCharacterData, setNewCharacterData] =
    useState<Character>(defaultCharacter);
  const [editingCharacterId, setEditingCharacterId] = useState('');

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
    setEditingCharacterId('');
    setNewCharacterData(defaultCharacter);
  };

  const handleDelete = (id: string) => {
    setCharacterData((prevData) => {
      const updatedData = prevData.filter((data) => data.id !== id);
      localStorage.setItem('characterData', JSON.stringify(updatedData));
      return updatedData;
    });
  };

  const handleEdit = (id: string) => {
    const character = characterData.find((c) => c.id === id);
    setNewCharacterData(character as Character);
    setEditingCharacterId(id);
    setIsEditMode(true);
    handleOpen();
  };

  const handleSubmit = () => {
    const newCharacter = {
      id: editingCharacterId || newCharacterData.id,
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
        sx={{ mt: 10 }}
        size='large'
        variant='contained'
        onClick={handleOpen}>
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
            <CustomCard
              isList
              character={character}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MainContent;

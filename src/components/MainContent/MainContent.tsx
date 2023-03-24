import { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Card,
  CardMedia,
  Typography,
  CardContent,
  Button,
  Modal,
  TextField,
} from '@mui/material';
import { Character } from '../../interfaces/Character';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import IconButton from '@mui/material/IconButton';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

const MainContent = () => {
  const [characterData, setCharacterData] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [species, setSpecies] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [image, setImage] = useState(null);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

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

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = (id: number) => {
    setCharacterData((prevData) => {
      return prevData.filter((data) => data.id !== id);
    });
  };

  const [editCharacterId, setEditCharacterId] = useState(null);

  const handleEdit = (id: number) => {
    setEditCharacterId(id);
    setOpen(true);
    const characterToEdit = characterData.find(
      (character) => character.id === id,
    );
    setName(characterToEdit.name);
    setStatus(characterToEdit.status);
    setSpecies(characterToEdit.species);
    setGender(characterToEdit.gender);
    setImage(characterToEdit.image);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCharacter = {
      id: characterData.length + 1,
      name,
      status,
      species,
      gender,
      image:
        image || 'https://rickandmortyapi.com/api/character/avatar/19.jpeg',
    };
    setCharacterData([...characterData, newCharacter]);
    handleClose();
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
      <Button
        sx={{ marginTop: 3 }}
        size='large'
        variant='contained'
        onClick={handleOpen}>
        Add character
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box sx={style}>
          <Typography variant='h6' component='h3' color={'black'}>
            {name ? 'Edit character' : 'Add character'}
          </Typography>
          <Box
            component='form'
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <TextField
              id='image'
              type='file'
              margin='normal'
              onChange={(event) => setImage(event.target.files[0])}
            />
            <TextField
              id='name'
              label='name'
              margin='normal'
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <TextField
              id='status'
              label='status'
              margin='normal'
              required
              value={status}
              onChange={(event) => setStatus(event.target.value)}
            />
            <TextField
              id='species'
              label='species'
              margin='normal'
              required
              value={species}
              onChange={(event) => setSpecies(event.target.value)}
            />
            <TextField
              id='gender'
              label='gender'
              margin='normal'
              required
              value={gender}
              onChange={(event) => setGender(event.target.value)}
            />
            <Button type='submit' variant='contained' sx={{ mt: 3 }}>
              Submit
            </Button>
          </Box>
        </Box>
      </Modal>
      <Grid container>
        {characterData.map((character) => (
          <Grid item xs={12} sm={6} md={4} xl={3} key={character.id}>
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
                <IconButton onClick={() => handleDelete(character.id)}>
                  <DeleteForeverRoundedIcon />
                </IconButton>
                <IconButton onClick={() => handleEdit(character.id)}>
                  <EditRoundedIcon />
                </IconButton>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MainContent;

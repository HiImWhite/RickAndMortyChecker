import { Modal, Box, Typography, TextField, Button } from '@mui/material';
import AddCharacterModal from '../../interfaces/AddCharaterModal';

const MainModal: React.FC<AddCharacterModal> = ({
  open,
  handleClose,
  handleSubmit,
  handleImageChange,
  newCharacterData,
  setNewCharacterData,
}) => {
  const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'>
      <Box sx={style}>
        <Typography variant='h6' component='h3' color={'black'}>
          Add character
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
            onChange={handleImageChange}
          />
          <TextField
            id='name'
            label='name'
            margin='normal'
            required
            value={newCharacterData.name}
            onChange={(event) =>
              setNewCharacterData((prevData) => ({
                ...prevData,
                name: event.target.value,
              }))
            }
          />
          <TextField
            id='status'
            label='status'
            margin='normal'
            required
            value={newCharacterData.status}
            onChange={(event) =>
              setNewCharacterData((prevData) => ({
                ...prevData,
                status: event.target.value,
              }))
            }
          />
          <TextField
            id='species'
            label='species'
            margin='normal'
            required
            value={newCharacterData.species}
            onChange={(event) =>
              setNewCharacterData((prevData) => ({
                ...prevData,
                species: event.target.value,
              }))
            }
          />
          <TextField
            id='gender'
            label='gender'
            margin='normal'
            required
            value={newCharacterData.gender}
            onChange={(event) =>
              setNewCharacterData((prevData) => ({
                ...prevData,
                gender: event.target.value,
              }))
            }
          />
          <Button type='submit' variant='contained' sx={{ mt: 3 }}>
            Submit
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default MainModal;

import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import IconButton from '@mui/material/IconButton';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import ICustomCardProps from '../../interfaces/ICustomCardProps';

const CustomCard = ({
  isList,
  character: { image, name, status, species, gender, id },
  handleDelete,
  handleEdit,
}: ICustomCardProps) => {
  const cardStyles = isList
    ? { m: 3 }
    : {
        width: '65%',
        ['@media (min-width:600px)']: {
          width: '45%',
        },
        ['@media (min-width:960px)']: {
          width: '25%',
        },
      };

  const cardMediaStyles = isList
    ? { height: '600px', width: '100%', minWidth: '585' }
    : {};

  return (
    <Card sx={cardStyles}>
      <CardMedia
        component='img'
        image={image}
        alt={name}
        sx={cardMediaStyles}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Status: {status}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Species: {species}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Gender: {gender}
        </Typography>
        {isList && (
          <Box display='flex' alignItems='flex-end' justifyContent='flex-end'>
            <IconButton onClick={() => handleDelete?.(id)}>
              <DeleteForeverRoundedIcon />
            </IconButton>
            <IconButton onClick={() => handleEdit?.(id)}>
              <EditRoundedIcon />
            </IconButton>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default CustomCard;

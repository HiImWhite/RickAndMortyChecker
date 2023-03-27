import { Typography } from '@mui/material';
import ScienceRoundedIcon from '@mui/icons-material/ScienceRounded';

const MenuLeft = () => (
  <>
    <ScienceRoundedIcon />
    <Typography variant='h6' component='div' sx={{ flexGrow: 1 }} pl={2}>
      Rick and Morty APP
    </Typography>
  </>
);

export default MenuLeft;

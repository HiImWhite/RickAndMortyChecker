import {
  AppBar,
  Button,
  Toolbar,
  Stack,
  IconButton,
  Typography,
} from '@mui/material';
import ScienceRoundedIcon from '@mui/icons-material/ScienceRounded';

const Navbar = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton size='large' aria-label='logo'>
          <ScienceRoundedIcon />
        </IconButton>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          Rick and Morty APP
        </Typography>
        <Stack direction='row' spacing={2}>
          <Button color='inherit'>R&M World</Button>
          <Button color='inherit'>Create Character</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

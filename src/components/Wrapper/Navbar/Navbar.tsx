import {
  AppBar,
  Button,
  Toolbar,
  Stack,
  IconButton,
  Typography,
  Link,
} from '@mui/material';
import ScienceRoundedIcon from '@mui/icons-material/ScienceRounded';
import { NavLink } from 'react-router-dom';

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
          <Link to='/' component={NavLink} underline='none' color='inherit'>
            <Button color='inherit'>R&M World</Button>
          </Link>
          <Link
            to='/create-character'
            component={NavLink}
            underline='none'
            color='inherit'>
            <Button color='inherit'>Create Character</Button>
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

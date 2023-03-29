import { NavLink } from 'react-router-dom';
import { Button, Stack, Link } from '@mui/material';

const MenuRight = () => (
  <Stack direction='row' spacing={2}>
    <Link to='/' component={NavLink} underline='none' color='inherit'>
      <Button color='inherit'>R&M World</Button>
    </Link>
    <Link
      to='/random-character'
      component={NavLink}
      underline='none'
      color='inherit'>
      <Button color='inherit'>Random Character</Button>
    </Link>
  </Stack>
);

export default MenuRight;

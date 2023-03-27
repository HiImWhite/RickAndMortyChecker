import { AppBar, Toolbar } from '@mui/material';

import MenuLeft from './MenuLeft/MenuLeft';
import MenuRight from './MenuRight/MenuRight';

const Navbar = () => (
  <AppBar position='fixed'>
    <Toolbar>
      <MenuLeft />
      <MenuRight />
    </Toolbar>
  </AppBar>
);

export default Navbar;

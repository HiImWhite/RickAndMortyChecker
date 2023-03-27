import { NavLink } from 'react-router-dom';
import { Link, Typography, Box } from '@mui/material';

const Footer = () => (
  <Box
    sx={{
      display: 'flex',
      position: 'fixed',
      width: '100%',
      bottom: 0,
      py: '1rem',
      backgroundColor: '#1976d2',
      justifyContent: 'center',
    }}
    component='footer'>
    <Typography variant='caption' color='white'>
      Copyright ©2023{' '}
      <Link
        to='https://github.com/HiImWhite'
        component={NavLink}
        underline='none'
        color='yellow'>
        Wojciech Bielawa
      </Link>
    </Typography>
  </Box>
);

export default Footer;

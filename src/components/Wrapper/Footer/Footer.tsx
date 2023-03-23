import { NavLink } from 'react-router-dom';
import { Container, Link, Box, Typography, Paper } from '@mui/material';

const Footer = () => {
  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
      }}
      component='footer'
      square
      variant='outlined'>
      <Container maxWidth='lg'>
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: 'center',
            display: 'flex',
            my: 1,
          }}></Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: 'center',
            display: 'flex',
            mb: 2,
          }}>
          <Typography variant='caption' color='initial'>
            Copyright ©2023{' '}
            <Link
              to='https://github.com/HiImWhite'
              component={NavLink}
              underline='none'>
              Wojciech Bielawa
            </Link>
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
};

export default Footer;

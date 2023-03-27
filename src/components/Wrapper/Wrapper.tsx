import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

const Wrapper = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}>
      <Navbar />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default Wrapper;

import { NavLink } from 'react-router-dom';
import { Box, Typography, Button, Link, Container } from '@mui/material';

const NotFoundContent = () => {
  return (
    <Box
      height={'calc(100vh - 102px - 16px)'}
      display={'flex'}
      alignItems={'center'}
      // padding={'16px 0 '}
    >
      <Container>
        <Box>
          <Typography
            variant='h1'
            component={'h1'}
            align={'center'}
            sx={{ fontWeight: 700 }}>
            404
          </Typography>
          <Typography
            variant='h6'
            component='p'
            align={'center'}
            maxWidth='430px'
            mx='auto'>
            Oops! Looks like you followed a bad link
            <br />
            If you think this is a problem with us, please{' '}
            <Link
              component={NavLink}
              to={'/contact'}
              underline='none'
              sx={{
                '&:hover': {
                  opacity: 0.75,
                },
              }}>
              tell us
            </Link>
          </Typography>
          <Box marginTop={4} display={'flex'} justifyContent={'center'}>
            <Button
              component={NavLink}
              variant='contained'
              size='large'
              to={'/'}>
              Back home
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NotFoundContent;

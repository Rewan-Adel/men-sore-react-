import { Link, Box, Typography } from '@mui/material';

const CallToAction = () => {
  return (
    <Box sx={{ textAlign: 'center', marginTop: 4 }}>
      <Typography variant="h5" paragraph
        sx={{ color: 'white', fontSize: { xs: '1.0rem', sm: '1.5rem', md: '2rem' } }}
      >
        Want to know more? Reach out to us!
      </Typography>
      <Link variant="contained" href="/contactus">
        Contact Us
      </Link>
    </Box>
  );
};


export default CallToAction;
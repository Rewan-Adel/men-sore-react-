import { Box, Typography, Grid } from '@mui/material';
import image from '/images/WhatsApp Image 2023-12-08 at 18.20.23_93124418.jpg';

const Introduction = () => {
  return (
    <Box sx={{marginTop: 8, marginBottom: 6, padding: 4,  color: 'white' }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={6}>
          <Typography 
            variant="h4" 
            paragraph 
            sx={{ color: '#de9e15', fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }, textAlign: 'left' }}
          >
            About Us
          </Typography>
          <Typography 
            variant="body1"
            sx={{ fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' }, textAlign: 'left' }}
          >
            Where Elegance Meets Perfection
            At MB Plus, we are dedicated to offering the finest tailored suits that define class and style.
            Our collection blends timeless sophistication with modern flair, crafted with precision to ensure the perfect fit.
          </Typography>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} sm={6} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src={image}
            alt="MB Plus Image"
            style={{
              maxWidth: '100%',
              height: 'auto',
              objectFit: 'contain',
              display: 'block',
              margin: '0 auto',
              borderRadius: '12%',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Introduction;

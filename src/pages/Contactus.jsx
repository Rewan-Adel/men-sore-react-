import React from 'react';
import { TextField, Button, Typography, Grid, Paper } from '@mui/material';

const ContactForm = () => (
  <Paper elevation={0} sx={{ padding: { xs: '60px', sm: '40px' }, backgroundColor: 'transparent' }}>
    <Typography variant="h5" gutterBottom sx={{ color: '#fff', fontSize: { xs: '1.5rem', sm: '2rem' } }}>
      Contact Us
    </Typography>
    <form>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Name"
            id="name"
            name="name"
            required
            variant="standard"
            sx={{
              '& .MuiInput-underline:before': {
                borderBottom: '1px solid #fff',
              },
              '& .MuiInput-underline:hover:before': {
                borderBottom: '2px solid #f0c65f',
              },
              '& .MuiInput-underline:after': {
                borderBottom: '2px solid #f0c65f',
              },
              '& .MuiFormLabel-root': {
                color: '#fff', // Default label color
                fontSize: { xs: '0.875rem', sm: '1rem' }, // Responsive font size
              },
              '& .Mui-focused .MuiFormLabel-root': {
                color: '#f0c65f', // Label color when focused
              },
              input: {
                color: '#fff', // Input text color
                fontSize: { xs: '0.875rem', sm: '1rem' }, // Responsive input text size
              },
              '& .Mui-focused input': {
                color: '#fff', // Input text color when focused
              },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            id="email"
            name="email"
            required
            variant="standard"
            sx={{
              '& .MuiInput-underline:before': {
                borderBottom: '1px solid #fff',
              },
              '& .MuiInput-underline:hover:before': {
                borderBottom: '2px solid #f0c65f',
              },
              '& .MuiInput-underline:after': {
                borderBottom: '2px solid #f0c65f',
              },
              '& .MuiFormLabel-root': {
                color: '#fff', // Default label color
                fontSize: { xs: '0.875rem', sm: '1rem' }, // Responsive font size
              },
              '& .Mui-focused .MuiFormLabel-root': {
                color: '#f0c65f', // Label color when focused
              },
              input: {
                color: '#fff', // Input text color
                fontSize: { xs: '0.875rem', sm: '1rem' }, // Responsive input text size
              },
              '& .Mui-focused input': {
                color: '#fff', // Input text color when focused
              },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Message"
            id="message"
            name="message"
            required
            multiline
            rows={5}
            variant="standard"
            sx={{
              '& .MuiInput-underline:before': {
                borderBottom: '1px solid #fff',
              },
              '& .MuiInput-underline:hover:before': {
                borderBottom: '2px solid #f0c65f',
              },
              '& .MuiInput-underline:after': {
                borderBottom: '2px solid #f0c65f',
              },
              '& .MuiFormLabel-root': {
                color: '#fff', // Default label color
                fontSize: { xs: '0.875rem', sm: '1rem' }, // Responsive font size
              },
              '& .Mui-focused .MuiFormLabel-root': {
                color: '#f0c65f', // Label color when focused
              },
              input: {
                color: '#fff', // Input text color
              },
              '& .Mui-focused input': {
                color: '#fff', // Input text color when focused
              },
              textarea: {
                color: '#fff', // Textarea text color
                fontSize: { xs: '0.875rem', sm: '1rem' }, // Responsive text size for textarea
              },
              '& .Mui-focused textarea': {
                color: '#fff', // Textarea text color when focused
              },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            variant="contained"
            color="gold"
            type="submit"
            sx={{
              backgroundColor: '#de9e15',
              color: 'black',
              '&:hover': {
                backgroundColor: 'black',
                color: '#f0c65f',
              },
              fontSize: { xs: '0.875rem', sm: '1rem' }, // Responsive button text size
            }}
          >
            Contact Us
          </Button>
        </Grid>
      </Grid>
    </form>
  </Paper>
);

const StoreInfo = () => {
  const textStyle = { color: '#fff' };

  return (
    <Paper elevation={0} sx={{ marginTop: '20px', padding: { xs: '20px', sm: '40px' }, backgroundColor: 'transparent' }}>
      <Typography variant="h5" gutterBottom sx={{ ...textStyle, fontSize: { xs: '1.1rem', sm: '1.5rem' }, display: 'flex', alignItems: 'center', justifyContent: { xs: 'flex-start' } }}>
        Is the answer to your question missing?
      </Typography>
      <Typography variant="h5" gutterBottom sx={{ ...textStyle, fontSize: { xs: '1.1rem', sm: '1.5rem' }, marginBottom: '35px', display: 'flex', alignItems: 'center', justifyContent: { xs: 'flex-start'} }}>
        Get in touch with us.
      </Typography>
      <Typography variant="body1" sx={{ ...textStyle, fontSize: { xs: '0.875rem', sm: '1rem' }, color: 'gray', display: 'flex', alignItems: 'center', marginBottom: '12px', justifyContent: { xs: 'flex-start'} }}>
        Phone
      </Typography>
      <Typography variant="body1" sx={{ ...textStyle, fontSize: { xs: '0.875rem', sm: '1rem' }, display: 'flex', alignItems: 'center', marginBottom: '20px', justifyContent: { xs: 'flex-start'} }}>
        +20 110 021 5931
      </Typography>
      <Typography variant="body1" sx={{ ...textStyle, fontSize: { xs: '0.875rem', sm: '1rem' }, color: 'gray', display: 'flex', alignItems: 'center', marginBottom: '20px', justifyContent: { xs: 'flex-start' } }}>
        Email
      </Typography>
      <Typography variant="body1" sx={{ ...textStyle, fontSize: { xs: '0.875rem', sm: '1rem' }, display: 'flex', alignItems: 'center', marginBottom: '20px', justifyContent: { xs: 'flex-start'} }}>
        mbplussuits@gmail.com
      </Typography>
      <Typography variant="body1" sx={{ ...textStyle, fontSize: { xs: '0.875rem', sm: '1rem' }, color: 'gray', display: 'flex', alignItems: 'center', marginBottom: '20px', justifyContent: { xs: 'flex-start' } }}>
        Business Hours
      </Typography>
      <Typography variant="body1" sx={{ ...textStyle, fontSize: { xs: '0.875rem', sm: '1rem' }, display: 'flex', alignItems: 'center', marginBottom: '20px', justifyContent: { xs: 'flex-start'} }}>
        Everyday 12:00 PM - 12:00 AM
      </Typography>
      <Typography variant="body1" sx={{ ...textStyle, fontSize: { xs: '0.875rem', sm: '1rem' }, color: 'gray', display: 'flex', alignItems: 'center', marginBottom: '12px', justifyContent: { xs: 'flex-start'} }}>
        Location
      </Typography>
      <Typography variant="body1" sx={{ ...textStyle, fontSize: { xs: '0.875rem', sm: '1rem' }, display: 'flex',  marginBottom: '12px', justifyContent: { xs: 'flex-start' } }}>
        St elmanzlawy-moharam beh-In Front Of New El Sheikh Sons Mosque, Alexandria, Egypt
      </Typography>
    </Paper>
  );
};

function Contactus() {
  return (
    <div className="contactContainer">
      <main className="contactMain">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} sx={{ marginTop: '80px' }}>
            <ContactForm />
          </Grid>

          <Grid item xs={12} md={6} sx={{ marginTop: '80px' }}>
            <StoreInfo />
          </Grid>
        </Grid>
      </main>
    </div>
  );
}

export default Contactus;
import { Grid, Paper, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

const Values = () => {
  return (
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={12} sm={4}>
        <Paper elevation={0} sx={{
          padding: 3, 
          textAlign: 'center', 
          backgroundColor: 'black', 
          color: 'gold', 
          boxShadow: 3,
        }}>
          <CheckCircle sx={{ color: 'gold', fontSize: 40 }} />
          <Typography variant="h6" gutterBottom sx={{  color: 'white'  }}>
            Premium Quality
          </Typography>
          <Typography variant="body2" sx={{  color: 'white'  }}>
            Only the finest fabrics for the most sophisticated look.
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper elevation={0} sx={{
          padding: 3, 
          textAlign: 'center', 
          backgroundColor: 'black', 
          color: 'gold', 
          boxShadow: 3,
        }}>
          <CheckCircle sx={{ color: 'gold', fontSize: 40 }} />
          <Typography variant="h6" gutterBottom sx={{ color: 'white' }}>
            Tailored Fit
          </Typography>
          <Typography variant="body2" sx={{  color: 'white' }}>
            Perfectly fitted suits designed to elevate your appearance.
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper elevation={0} sx={{
          padding: 3, 
          textAlign: 'center', 
          backgroundColor: 'black', 
          boxShadow: 3,
        }}>
          <CheckCircle sx={{ color: 'gold', fontSize: 40 }} />
          <Typography variant="h6" gutterBottom sx={{  color: 'white'  }}>
            Timeless Style
          </Typography>
          <Typography variant="body2" sx={{  color: 'white'  }}>
            Classic designs that remain stylish for years to come.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Values;

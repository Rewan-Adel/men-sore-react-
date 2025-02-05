import * as React from 'react';
import { Typography, Container, CardActionArea, CardMedia, CardContent, Card, Grid } from '@mui/material';

const itemData = [
  {
    img: '/images/WhatsApp Image 2023-12-08 at 18.20.28_4652953f.jpg',
    title: 'Shoes',
  },
  {
    img: '/images/WhatsApp Image 2023-12-08 at 18.20.25_2a2c3f23.jpg',
    title: 'Suits',
  },
  {
    img: '/images/WhatsApp Image 2023-12-08 at 18.20.27_50acda06.jpg',
    title: 'Shirts',
  },
  {
    img: '/images/WhatsApp Image 2023-12-08 at 18.20.23_93124418.jpg',
    title: 'Accessories',
  },
];

export default function Collections() {
  const handleRedirect = (title) => {
    // Assuming you have a route set up for each category
    window.location.href = `/category/${title.toLowerCase()}`;
  };

  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" sx={{ marginBottom: 4, textAlign: 'center', fontSize: { xs: '1.8rem', sm: '2rem' } }}>
        Our Categories
      </Typography>

      <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
        {itemData.map((item) => (
          <Grid item xs={12} sm={6} md={2.4} key={item.title}>
            <div
              onClick={() => handleRedirect(item.title)}
              style={{
                maxWidth: 645,
                cursor: 'pointer',
                '&:hover': {
                  boxShadow: '0 0 10px 0 rgb(61, 60, 60)',
                  transform: 'scale(1.05)',
                  transitionDelay: '0.3s',
                },
              }}
            >
              <div>
                <img
                  src={item.img}
                  alt={item.title}
                  style={{ width: '100%', height: '340px', objectFit: 'cover', borderRadius: '10px' }}
                />
                <div style={{ padding: '10px', fontSize: '1.0rem', textAlign: 'center' }}>
                  <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: { xs: '1.3rem', sm: '1.2rem' } }}>
                    {item.title}
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

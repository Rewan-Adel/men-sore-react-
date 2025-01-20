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
  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" sx={{ marginBottom: 4, textAlign: 'center' }}>
        Our Collections
      </Typography>

      <Grid container spacing={2} >
        {itemData.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item.title} >
            <Card
              sx={{
                maxWidth: 345,
                '&:hover': {
                  boxShadow: '0 0 10px 0 rgb(61, 60, 60)',
                  transform: 'scale(1.05)',
                  transitionDelay: "0.3s",
                }
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.img}
                  alt={item.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {item.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

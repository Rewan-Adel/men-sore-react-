import * as React from "react";
import { Box, Typography, Grid, useMediaQuery, useTheme } from "@mui/material";

function Gallery() {
  const theme = useTheme();

  // Media queries for responsive columns
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Small screen (mobile)
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md")); // Medium screen (tablet)

  const cols = isSmallScreen ? 1 : isMediumScreen ? 2 : 3;

  return (
    <Box sx={{ padding: 2, margin: 0 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 2 }}>
        Our Gallery
      </Typography>
      <Typography sx={{ marginBottom: 4 }}>
        Explore our gallery of stunning images showcasing our work and
        inspiration
      </Typography>
      <Grid container spacing={2}>
        {itemData.map((item) => (
          <Grid item xs={12 / cols} key={item.img}>
            <Box
              component="img"
              src={item.img}
              alt={item.title}
              loading="lazy"
              sx={{
                width: "100%",
                borderRadius: "10px",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
                },
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

const itemData = [
  {
    img: "/images/WhatsApp Image 2023-12-08 at 18.20.28_4652953f.jpg",
    title: "Bed",
  },
  {
    img: "/images/WhatsApp Image 2023-12-08 at 18.20.28_643615ba.jpg",
    title: "Books",
  },
  {
    img: "/images/WhatsApp Image 2023-12-08 at 18.20.28_314296f6.jpg",
    title: "Sink",
  },
  {
    img: "/images/WhatsApp Image 2023-12-08 at 18.20.27_50acda06.jpg",
    title: "Kitchen",
  },
  {
    img: "/images/WhatsApp Image 2023-12-08 at 18.20.27_50acda06.jpg",
    title: "Blinds",
  },
  {
    img: "/images/hero.jpg",
    title: "Chairs",
  },
  {
    img: "/images/WhatsApp Image 2023-12-08 at 18.20.25_2a2c3f23.jpg",
    title: "Laptop",
  },
  {
    img: "/images/hero.jpg",
    title: "Doors",
  },
  {
    img: "/images/WhatsApp Image 2023-12-08 at 18.20.25_2a2c3f23.jpg",
    title: "Coffee",
  },
  {
    img: "/images/WhatsApp Image 2023-12-08 at 18.20.27_50acda06.jpg",
    title: "Storage",
  },
  {
    img: "/images/WhatsApp Image 2023-12-08 at 18.20.23_93124418.jpg",
    title: "Candle",
  },
  {
    img: "/images/WhatsApp Image 2023-12-08 at 18.20.28_643615ba.jpg",
    title: "Coffee table",
  },
];

export default Gallery;

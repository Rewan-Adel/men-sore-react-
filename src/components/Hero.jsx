import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";

const Hero = () => {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        height: { xs: "90vh", sm: "90vh" }, 
        backgroundImage:
          'url("/images/WhatsApp Image 2023-12-08 at 18.20.28_643615ba.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        margin: 0, 
        padding: 0,
        marginTop: 0 // Ensure no space at the top
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
      />
      <Container
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "left",
          color: "white",
          margin: 0,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            // fontWeight: "bold",
            marginBottom: 2,
            fontSize: { xs: "2.5rem", sm: "2.5rem" }, // Adjust font size based on screen size
          }}
        >
          MB Plus - Men's Suits
        </Typography>
        <Typography
          variant="h5"
          sx={{
            marginBottom: 2,
            fontSize: { xs: "1.25rem", sm: "1.5rem" }, // Adjust font size for smaller devices
          }}
        >
          Find Your Perfect Suit Today.
        </Typography>
        <Button
          href="/products"
          variant="contained"
          sx={{
            backgroundColor: "#de9e15",
            color: "black",
            paddingX: 2,
            paddingY: 1,
            "&:hover": {
              backgroundColor: "#de9e15",
              color: "black",
            },
            fontSize: { xs: "0.9rem", sm: "1rem" }, // Adjust button font size for small screens
          }}
        >
          Learn more
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;

import * as React from "react";
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, Link } from "@mui/material";

function TopSellersBanner() {
  const topSellers = [
    {
      img: "/images/product1.jpg",
      title: "Product 1",
      description: "This is an amazing product that you will love.",
    },
    {
      img: "/images/product2.jpg",
      title: "Product 2",
      description: "This product is a bestseller. Don't miss out!",
    },
    {
      img: "/images/product3.jpg",
      title: "Product 3",
      description: "A top-rated product that everyone is talking about.",
    },
    // Add more products as needed
  ];

  return (
    <Box sx={{ padding: 4, margin: "auto", maxWidth: "100%", backgroundColor: "#f0f0f0" }}>
      {/* Section Heading */}
      <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 3, textAlign: "center" }}>
        Top Sellers
      </Typography>

      {/* Section Subtitle */}
      <Typography sx={{ marginBottom: 4, textAlign: "center" }}>
        Explore our top-selling products, carefully selected based on customer feedback and demand.
      </Typography>

      {/* Banner-style Grid Layout */}
      <Box sx={{ display: "flex", overflowX: "auto", gap: 3 }}>
        {topSellers.map((item, index) => (
          <Box sx={{ flexShrink: 0, width: 250, borderRadius: 2, boxShadow: 3 }} key={index}>
            {/* Product Card */}
            <Card sx={{ height: "100%" }}>
              <CardMedia
                component="img"
                image={item.img}
                alt={item.title}
                sx={{
                  height: 180,
                  objectFit: "cover",
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {item.description}
                </Typography>
              </CardContent>
              <Box sx={{ padding: 2, textAlign: "center" }}>
                <Button variant="contained" color="primary">
                  View Details
                </Button>
              </Box>
            </Card>
          </Box>
        ))}
      </Box>

      {/* Link to view all top sellers */}
      <Box sx={{ textAlign: "center", marginTop: 3 }}>
        <Link href="/top-sellers" sx={{ fontWeight: "bold", color: "primary.main" }}>
          View All Top Sellers
        </Link>
      </Box>
    </Box>
  );
}

export default TopSellersBanner;

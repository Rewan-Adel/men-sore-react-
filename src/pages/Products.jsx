import { Typography, Box } from "@mui/material";
import * as React from "react";
import Gallery from './Gallery';

function Products() {
    return (
    <Box sx={{ marginTop: '80px' }}>
        <Typography variant="h6" align="center" sx={{ color: '#de9e15', fontSize: { xs: '2rem', sm: '3rem' } }}>   
        Explore Our Products
        </Typography>
        <Typography variant="body 1" align="center" sx={{ color: '#fff', fontSize: { xs: '1rem', sm: '1rem' } }}>   
        Browse through a curated collection of products tailored to your lifestyle. From cozy apartments to luxurious villas, we have something for everyone
        </Typography>
        <Gallery />
    </Box>
);
}

export default Products;

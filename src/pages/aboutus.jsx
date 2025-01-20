import React from 'react';
import { Container } from '@mui/material';
import Introduction from './Introduction';
import Values from './Values';
import CallToAction from './CallToAction';

const AboutUsPage = () => {
  return (
    <Container bgcolor="black">
      <Introduction />
      <Values />
      <CallToAction /> 
    </Container>
  );
};

export default AboutUsPage;
// export default AboutUsPage;
// // import React from 'react';
// // import { Box, Typography, Container } from '@mui/material';
// // import img from '/images/WhatsApp Image 2023-12-08 at 18.20.23_93124418.jpg';

// // export default function About() {
// //   return (
// //     <Box 
// //       component="section" 
// //       sx={{ 
// //         display: 'flex', 
// //         flexDirection: { xs: 'column', lg: 'row' }, 
// //         minHeight: '100vh', 
// //         bgcolor: 'background.default', 
// //         color: 'text.primary', 
// //         justifyContent: 'center',  // Ensure centering of content
// //         alignItems: 'center',      // Align content in center on smaller screens
// //         p: 2, // Padding to prevent content from sticking to edges
// //       }}
// //     >
// //       {/* Image Section */}
// //       <Box
// //         component="div"
// //         sx={{
// //           flex: '1 1 auto',
// //           maxWidth: { lg: '50%' },
// //           height: { xs: 300, lg: 'auto' },
// //           overflow: 'hidden',
// //           borderRadius: '8px', // Add rounded corners for better visuals
// //         }}
// //       >
// //         <Box
// //           component="img"
// //           src={img}
// //           alt="About us"
// //           sx={{
// //             width: '100%',
// //             height: '100%',
// //             objectFit: 'cover',
// //             borderRadius: '118px', 
// //           }}
// //         />
// //       </Box>

// //       {/* Text Section */}
// //       <Box
// //         component="div"
// //         sx={{
// //           flex: '1 1 auto',
// //           maxWidth: { lg: '50%' },
// //           p: 4,
// //           display: 'flex',
// //           flexDirection: 'column',
// //           justifyContent: 'center',
// //           textAlign: 'center', // Ensure text is aligned properly
// //         }}
// //       >
// //         {/* Title */}
// //         <Typography 
// //           variant="h4" 
// //           component="h1" 
// //           sx={{ 
// //             color: '#de9e15', 
// //             fontWeight: 'bold', 
// //             mb: 2 // Margin below title
// //           }}
// //         >
// //           About Us
// //         </Typography>

// //         {/* Content */}
// //         <Typography 
// //           variant="body1" 
// //           sx={{ 
// //             color: 'text.primary', 
// //             lineHeight: 1.6,  // Better readability by adjusting line height
// //             fontSize: { xs: '1rem', sm: '1.2rem' }, // Responsive font size
// //           }}
// //         >
// //           Founded in 1995, Elegant Suits has been at the forefront of men's fashion for over two decades. Our commitment to quality, style, and customer satisfaction has made us a leader in the industry.
// //           <br /><br />
// //           We believe that every man deserves to look and feel his best. That's why we offer a wide range of exquisitely crafted suits, each one a testament to the art of fine tailoring.
// //           <br /><br />
// //           Our team of expert tailors and fashion consultants work tirelessly to ensure that every suit that leaves our store is nothing short of perfection. We source only the finest materials from around the world, ensuring that our suits not only look great but stand the test of time.
// //           <br /><br />
// //           At Elegant Suits, we're not just selling suits - we're crafting confidence, one suit at a time.
// //         </Typography>
// //       </Box>
// //     </Box>
// //   );
// // }

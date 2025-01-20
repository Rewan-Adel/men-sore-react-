import React from 'react';
import { Box, Container, Grid, Typography, IconButton, Link } from '@mui/material';
import { Phone, MapPin, Mail } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'; // From react-icons
import logo from '/icons/fa5342ea-bc50-4b67-b17c-9e6c87884669.png';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#2d2d2d',
        color: 'white',
        padding: { xs: 2, sm: 3 },
        marginTop: 4, // Space between sections
      }}
    >
      <Container>
        <Grid
          container
          spacing={4}
          sx={{
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'center', sm: 'flex-start' },
          }}
        >
          {/* Logo and Description */}
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{
              textAlign: { xs: 'center', sm: 'left' },
              marginLeft: 0, // Ensure no left margin
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{
                height: { xs: 50, sm: 70 },
                display: 'block',
                margin: { xs: '0 auto', sm: '0' },
              }}
            />
            <Typography
              variant="body2"
              sx={{
                textAlign: { xs: 'center', sm: 'left' },
                paddingX: { xs: 2, sm: 0 },
                marginTop: 2, // Add spacing below the logo
                lineHeight: 1.6,
              }}
            >
              We are committed to providing high-quality products and excellent customer service, offering a wide range of premium men's suits and essentials tailored to elevate every man's wardrobe, from timeless classics to modern styles, ensuring you look sharp and confident for any occasion.
            </Typography>
          </Grid>

          {/* Legal and Support (Right aligned and more space for text) */}
          <Grid item xs={12} sm={6} md={6} sx={{ textAlign: 'right' }}>
            <Grid container spacing={6} sx={{ justifyContent: 'flex-end' }}>
              {/* Legal Section */}
              <Grid item xs={6}>
                <Typography variant="h7" sx={{ marginBottom: 2 }}>
                  Legal
                </Typography>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {['Terms of Service', 'Privacy Policy', 'Privacy Request'].map((link) => (
                    <li key={link}>
                      <Link
                        href={`/${link.toLowerCase().replace(/\s+/g, '')}`}
                        sx={{
                          color: 'white',
                          textDecoration: 'none',
                          '&:hover': { color: '#de9e15' },
                          marginBottom: 1, // Space between links
                        }}
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Grid>

              {/* Support Section */}
              <Grid item xs={6}>
                <Typography variant="h7" gutterBottom sx={{ marginBottom: 2 }}>
                  Support
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    '& svg:hover': { color: '#de9e15', cursor: 'pointer' },
                    marginBottom: 2,
                  }}
                >
                  <Phone style={{ marginRight: 8 }} /> +20 110 021 5931
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    '& svg:hover': { color: '#de9e15', cursor: 'pointer' },
                  }}
                >
                  <Mail style={{ marginRight: 8 }} /> mbplussuits@gmail.com
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Social Media and Rights */}
        <Grid
          container
          spacing={2}
          sx={{
            marginTop: 4,
            alignItems: 'center',
            justifyContent: { xs: 'center', sm: 'space-between' },
          }}
        >
          {/* Social Media */}
          <Grid item xs={12} sm={6} textAlign={{ xs: 'center', sm: 'right' }}>
            <Box>
              <IconButton
                href="https://www.facebook.com/share/1B3KcNM5DM/"
                target="_blank"
                sx={{
                  color: '#dcdcdc',
                  '&:hover': { color: '#de9e15' },
                  margin: '0 8px',
                }}
                aria-label="Facebook"
              >
                <FaFacebook />
              </IconButton>

              <IconButton
                href="https://www.instagram.com/_mb_suits_/ "
                target="_blank"
                sx={{
                  color: '#dcdcdc',
                  '&:hover': { color: '#de9e15' },
                  margin: '0 8px',
                }}
                aria-label="Instagram"
              >
                <FaInstagram />
              </IconButton>

              <IconButton
                href="https://www.tiktok.com/"
                target="_blank"
                sx={{
                  color: '#dcdcdc',
                  '&:hover': { color: '#de9e15' },
                  margin: '0 8px',
                }}
                aria-label="TikTok"
              >
                <FaTiktok />
              </IconButton>

              <IconButton
                href="https://www.google.com/maps/place/El+Sheikh+Sons"
                target="_blank"
                sx={{
                  color: '#dcdcdc',
                  '&:hover': { color: '#de9e15' },
                  margin: '0 8px',
                }}
                aria-label="Map"
              >
                <MapPin style={{ marginRight: 8 }} />
              </IconButton>
            </Box>
          </Grid>

          {/* Rights */}
          <Grid item xs={12} sm={6} textAlign={{ xs: 'center', sm: 'left' }}>
            <Typography variant="body2">
              &copy; {new Date().getFullYear()} Elegant Suits. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

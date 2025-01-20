import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from '/icons/fa5342ea-bc50-4b67-b17c-9e6c87884669.png';
import Link from '@mui/material/Link';
import { Facebook, Instagram } from 'lucide-react'; // From lucide-react
import { FaTiktok, FaFacebook, FaInstagram  } from 'react-icons/fa'; // From react-icons

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact', 'Collections'];

function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };


  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
        backgroundColor: 'black',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-between',
      }}

      anchor='left'
    >
      {/* Logo at the top */}
      <Box sx={{ p: 1 }}>
        <Link href="home">
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{
              height: 50,
              width: 'auto',
              marginBottom: 0,
            }}
          />
        </Link>
      </Box>
  
      {/* List of navigation items */}
      <Box sx={{ flexGrow: 1, textAlign: 'center'  }}>
        <Divider />
        <List>
          {navItems.map((item) => (
            <Link href={`/${item}`} onClick={handleDrawerToggle} key={item}>
              <ListItem sx={{ color: 'white' }}>
                <ListItemButton sx={{ textAlign: 'center' }}>
                  {item}
                  <ListItemText />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Box>
      <Box  textAlign="center">
          <Typography variant="body2">
            &copy; Copyright  {new Date().getFullYear()}. All Rights Reserved.
          </Typography>
        </Box>
      {/* Social Media Icons at the bottom */}
      <Box sx={{ p: 1 }}>
        <IconButton
          href="https://www.facebook.com/share/1B3KcNM5DM/"
          target="_blank"
          sx={{ color: '#dcdcdc', '&:hover': { color: '#de9e15' }, margin: '0 8px' }}
          aria-label="Facebook"
        >
          <FaFacebook />
        </IconButton>
  
        <IconButton
          href="https://www.instagram.com/_mb_suits_/"
          target="_blank"
          sx={{ color: '#dcdcdc', '&:hover': { color: '#de9e15' }, margin: '0 8px' }}
          aria-label="Instagram"
        >
          <FaInstagram />
        </IconButton>
  
        <IconButton
          href="https://www.tiktok.com/"
          target="_blank"
          sx={{ color: '#dcdcdc', '&:hover': { color: '#de9e15' }, margin: '0 8px' }}
          aria-label="TikTok"
        >
          <FaTiktok />
        </IconButton>
      </Box>
    </Box>
  );
  
  

  return (
    <Box sx={{ display: 'flex', margin: 0, padding: 0 }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: scrolled ? 'black' : 'transparent',
          transition: 'background-color 0.3s ease-in-out',
          boxShadow: 'none',
          margin: 0,
        }}
      >
        <Toolbar sx={{ padding: 0 }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Link href="home">
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{
                height: { xs: 50, sm: 70 },
                display: { xs: 'block', sm: 'block' },
              }}
            />
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Link href={`/${item}`} key={item}>
                <Button
                  sx={{
                    color: '#fff',
                    '&:hover': {
                      color: '#f0c65f',
                    },
                    '&:focus': {
                      outline: 'none',
                    },
                  }}
                >
                  {item}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: 'black',
              color: 'white',
            },
          }}
          anchor="right"
          // Use document.body directly as the container
          container={document.body}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 0 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default Nav;

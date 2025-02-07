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
import Button from '@mui/material/Button';
import logo from '/icons/fa5342ea-bc50-4b67-b17c-9e6c87884669.png';
import { Link } from 'react-router-dom'; 
import { FaTiktok, FaFacebook, FaInstagram } from 'react-icons/fa';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';

const drawerWidth = 310;
const navItems = ['Home', 'Products', 'About Us', 'Contact Us'];

function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSearchIcon, setShowSearchIcon] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleLinkClick = () => {
    setMobileOpen(false); 
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
      anchor="left"
    >
      {/* Logo at the top */}
      <Box sx={{ p: 1 }}>
        <Link to="/" style={{ textDecoration: 'none' }}> {/* Remove text decoration here */}
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
      <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
        <Divider />
        <List>
          {navItems.map((item) => (
            <Link 
              to={`/${item.replace(/\s+/g, '').toLowerCase()}`} 
              onClick={handleLinkClick} 
              key={item} 
              style={{ textDecoration: 'none' }} // Remove text decoration here
            >
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

      {/* Social Media Icons */}
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
          href="https://www.instagram.com/_mb_suits_/ "
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
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          position: 'fixed', 
          backgroundColor: 'black',
          transition: 'background-color 0.2s ease-in-out',
          boxShadow: 'none', 
          zIndex: 1300,
          height: { xs: 5, sm: 55 },
          // borderBottom: '1px solid gray',
          // backgroundColor: window.location.pathname === '/' || window.location.pathname === '/home'  ? (scrolled ? 'black' : 'transparent') : 'black',
          // borderBottom: scrolled ? '1px solid transparent' : '1px solid gray',

        }}
      >
        <Toolbar sx={{ padding: 0 }}>
          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{
                height: { xs: 50, sm: 70 },
              }}
            />
          </Link>

          {/* Drawer and login button for mobile */}
          <Box sx={{ position: 'fixed', right: 0, display: 'flex', justifyContent: 'flex-end', top: 0 }}>
            <IconButton
              color="inherit"
              aria-label="login"
              sx={{
                display: { xs: 'block', sm: 'none' },
                '&:focus, &:active': {
                  outline: 'none',
                  border: 'none',
                },
              }}
            >
              <MeetingRoomIcon />
            </IconButton>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                mr: 2,
                display: { sm: 'none' },
                '&:focus, &:active': {
                  outline: 'none',
                  border: 'none',
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Navbar Links */}
          <Box sx={{ display: { xs: 'none', sm: 'block' }, ml: 'auto' }}>
            {navItems.map((item) => (
              <Link to={`/${item.replace(/\s+/g, '').toLowerCase()}`} key={item} style={{ textDecoration: 'none' }}>
                <Button
                  sx={{
                    color: '#fff',
                    '&:hover': {
                      color: '#f0c65f',
                      background: 'none',
                    },
                    marginLeft: '10px',
                  }}
                >
                  {item}
                </Button>
              </Link>
            ))}
          </Box>

          {/* Right-side Icon */}
          <Box sx={{ flexGrow: 2 }} />
          <IconButton color="inherit" aria-label="search" sx={{ display: { xs: 'none', sm: 'block' } }}>
            <MeetingRoomIcon />
          </IconButton>

        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
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
          container={document.body}
        >
          {drawer}
        </Drawer>
      </nav>

    </Box>
  );
}

export default Nav;

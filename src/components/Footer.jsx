import { Box, Typography, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import IconButton from '@mui/material/IconButton';
import { FaTiktok, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "black",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "20px 0",
      }}
    >
      <Box
        sx={{
          width: "80%",
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: "30px auto",
            gap: "5px",
          }}
        >
          <Typography
            variant="h5"
            color="#de9e15"
            sx={{ textAlign: "left", fontSize: { xs: "16px", sm: "24px" } }}
          >
            EQ3 SHOP{" "}
          </Typography>
          <Link href="/products" color="white" underline="none">
            <Typography variant="body1" color="" sx={{ fontSize: { xs: "12px", sm: "16px" } }}>
              All Products
            </Typography>
          </Link>
          <Link href="/collections" color="white" underline="none">
            <Typography variant="body1" color="" sx={{ fontSize: { xs: "12px", sm: "16px" } }}>
              Categories
            </Typography>
          </Link>
          <Link href="/new-arrivals" color="white" underline="none">
            <Typography variant="body1" color="" sx={{ fontSize: { xs: "12px", sm: "16px" } }}>
              New Arrivals
            </Typography>
          </Link>
          <Link href="/sale" color="white" underline="none">
            <Typography variant="body1" color="" sx={{ fontSize: { xs: "12px", sm: "16px" } }}>
              Sale
            </Typography>
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: "30px auto",
            gap: "5px",
          }}
        >
          <Typography
            variant="h5"
            color="#de9e15"
            sx={{ textAlign: "left", fontSize: { xs: "16px", sm: "24px" } }}
          >
            CUSTOMER SERVICE{" "}
          </Typography>
          <Link href="/contactus" color="white" underline="none">
            <Typography variant="body1" color="" sx={{ fontSize: { xs: "12px", sm: "16px" } }}>
              Contact Us
            </Typography>
          </Link>
          <Link href="/faq" color="white" underline="none">
            <Typography variant="body1" color="" sx={{ fontSize: { xs: "12px", sm: "16px" } }}>
              FAQ
            </Typography>
          </Link>
          <Link href="/returns" color="white" underline="none">
            <Typography variant="body1" color="" sx={{ fontSize: { xs: "12px", sm: "16px" } }}>
              Returns & Exchanges
            </Typography>
          </Link>
          <Link href="/shipping" color="white" underline="none">
            <Typography variant="body1" color="" sx={{ fontSize: { xs: "12px", sm: "16px" } }}>
              Shipping Information
            </Typography>
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: "30px auto",
            gap: "5px",
          }}
        >
          <Typography
            variant="h5"
            color="#de9e15"
            sx={{ textAlign: "left", fontSize: { xs: "16px", sm: "24px" } }}
          >
            ABOUT US{" "}
          </Typography>
          <Link href="/aboutus" color="white" underline="none">
            <Typography variant="body1" color="" sx={{ fontSize: { xs: "12px", sm: "16px" } }}>
              Our Story
            </Typography>
          </Link>
          <Link href="/careers" color="white" underline="none">
            <Typography variant="body1" color="" sx={{ fontSize: { xs: "12px", sm: "16px" } }}>
              Careers
            </Typography>
          </Link>
          <Link href="/press" color="white" underline="none">
            <Typography variant="body1" color="" sx={{ fontSize: { xs: "12px", sm: "16px" } }}>
              Press
            </Typography>
          </Link>
          <Link href="/sustainability" color="white" underline="none">
            <Typography variant="body1" color="" sx={{ fontSize: { xs: "12px", sm: "16px" } }}>
              Sustainability
            </Typography>
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          width: "80%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid #444",
          paddingTop: "25px",
          margin: "30px auto",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Typography
          variant="body2"
          color="inherit"
          sx={{ textAlign: "left", fontSize: { xs: "12px", sm: "16px" } }}
        >
          &copy; {new Date().getFullYear()} EQ3. All Rights Reserved.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Link href="/cookie-policy" color="gray" underline="none">
            <Typography variant="body2" color="inherit" sx={{ fontSize: { xs: "12px", sm: "16px" } }}>
              Cookie Policy
            </Typography>
          </Link>
          <Link href="/privacy-policy" color="gray" underline="none">
            <Typography variant="body2" color="inherit" sx={{ fontSize: { xs: "12px", sm: "16px" } }}>
              Privacy Policy
            </Typography>
          </Link>
          <Link href="/terms" color="gray" underline="none">
            <Typography variant="body2" color="inherit" sx={{ fontSize: { xs: "12px", sm: "16px" } }}>
              Terms of Service
            </Typography>
          </Link>
          <Link href="/help-center" color="gray" underline="none">
            <Typography variant="body2" color="inherit" sx={{ fontSize: { xs: "12px", sm: "16px" } }}>
              Help Center
            </Typography>
          </Link>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
            }}
          >
            <Link href="https://www.facebook.com/share/1B3KcNM5DM/" target="_blank">
              <FacebookIcon sx={{ fontSize: { xs: "20px", sm: "30px" }, color: "#ffffff" }} />
            </Link>
            <Link href="https://www.instagram.com/_mb_suits_/" target="_blank">
              <InstagramIcon sx={{ fontSize: { xs: "20px", sm: "30px" }, color: "#ffffff" }} />
            </Link>
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
      </Box>
    </Box>
  );
};

export default Footer;
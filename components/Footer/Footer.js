import { Box, Typography, Grid, Stack } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/Assets/Logo.png';

function FooterComp() {
  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        px: 2,
        py: 2,
        color: '#2f2f2f',
        borderTop: '1px solid #e5e5e5',
        flexDirection: { xs: 'column', sm: 'row' },
        backgroundColor: '#faf6f0',
      }}
    >
      {/* Address Section */}
      <Box
        sx={{
          flex: { md: '0 0 auto' }, // Prevent flex from overriding the width
          mt: 2,
          mr: { xl: 5, lg: 0, md: 8, sm: 5, xs: 0 },
          ml: { xs: 0, sm: 1, md: 1, lg: 15, xl: 20 },
          mb: 3,
          width: {
            xl: '500px',
            lg: '350px',
            md: '300px',
            sm: '27%',
            xs: '100%',
          }, // Explicit width for md devices
          textAlign: 'justify',
        }}
      >
        <Image src={Logo} height={45} width={100} alt="Logo" />
        <Typography
          // variant="body2"
          sx={{
            mt: 2,
            color: '#999',
            fontSize: { xs: '13px', sm: '13px', md: '15px' },
          }}
        >
          All Travel Services offers transport solutions in East Anglia
          specializing in school transport, private contracts, assisted travel,
          and VIP chauffeur services. Our trained, DBS-certified staff ensures
          safety and exceptional service.
        </Typography>
      </Box>

      {/* Navigation Links */}
      <Box
        sx={{
          flex: '1 1 50%',
          display: 'flex',
          flexWrap: 'wrap',
          ml: { xs: 0, sm: 0, md: 2, lg: 20 },
          height: { xs: 'auto', sm: '260px', md: 'auto' },
        }}
      >
        {/* Information Section */}
        <Grid
          container
          spacing={{ xs: 0, sm: 2 }}
          sx={{
            flexDirection: { xs: 'column', sm: 'column', md: 'row' }, // Stack links on sm and below
            mt: { xs: 0, sm: 5, md: 5, lg: 3, xl: 0 },
          }}
        >
          <Grid item xs={4} sm={7} md={3}>
            <Typography sx={{ fontSize: '15px', fontWeight: 400 }}>
              Information
            </Typography>
            <Stack spacing={1} mt={1.5}>
              <Link
                href="/"
                style={{ color: '#999', underline: 'none', fontSize: '13px' }}
              >
                Home
              </Link>
              <Link
                href="/about"
                style={{ color: '#999', underline: 'none', fontSize: '13px' }}
              >
                About Us
              </Link>
              <Link
                href="#services"
                style={{ color: '#999', underline: 'none', fontSize: '13px' }}
              >
                Services
              </Link>
              <Link
                href="/getaquote"
                style={{ color: '#999', underline: 'none', fontSize: '13px' }}
              >
                Request a Quote
              </Link>
              <Link
                href="/enquiries"
                style={{ color: '#999', underline: 'none', fontSize: '13px' }}
              >
                Contact Us
              </Link>
            </Stack>
          </Grid>

          {/* Services Section */}
          <Grid
            item
            xs={4}
            sm={7}
            md={3}
            sx={{ ml: { lg: 0, xl: -3, md: 0, sm: 0, xs: 0 } }}
          >
            <Typography variant="h6" sx={{ fontSize: '15px', fontWeight: 400 }}>
              Services
            </Typography>
            <Stack spacing={1} mt={1.5}>
              <Link
                href="#services"
                style={{ color: '#999', underline: 'none', fontSize: '13px' }}
              >
                Executive Travel for VIPs
              </Link>
              <Link
                href="#services"
                style={{ color: '#999', underline: 'none', fontSize: '13px' }}
              >
                Private Contracts
              </Link>
              <Link
                href="#services"
                style={{ color: '#999', underline: 'none', fontSize: '13px' }}
              >
                School Runs
              </Link>
              <Link
                href="#services"
                style={{ color: '#999', underline: 'none', fontSize: '13px' }}
              >
                Assisted Travel
              </Link>
            </Stack>
          </Grid>

          {/* Enquiry Section */}
          <Grid
            item
            xs={4}
            sm={7}
            md={3}
            sx={{ ml: { lg: 5, xl: 0, md: 3, sm: 0, xs: 0 } }}
          >
            <Typography variant="h6" sx={{ fontSize: '15px', fontWeight: 400 }}>
              Enquiries
            </Typography>
            <Stack spacing={1} mt={1.5}>
              {/* <Typography sx={{ color: '#999', fontSize: '13px' }}>
                For enquiries or quotes, please fill out the enquiry form for
                quick assistance.
              </Typography> */}
              <Link
                href="/enquiries" // Link to your enquiry form page
                style={{ color: '#999', underline: 'none', fontSize: '13px' }}
              >
                Send an Enquiry
              </Link>
              <Link
                href="/getaquote" // Link to your enquiry form page
                style={{ color: '#999', underline: 'none', fontSize: '13px' }}
              >
                Request a Quote
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </Box>

      {/* Legal */}
      <Box
        sx={{
          width: '100%',
          mt: { xs: 0, sm: 1.5 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          ml: { xs: 0, sm: 1, md: 1, lg: 15, xl: 20 },
        }}
      >
        <Typography sx={{ fontSize: '12px', color: '#999' }}>
          © 2024 All Travel Services
        </Typography>
        {/* <Typography
          sx={{
            display: 'flex',
            alignItems: 'center',
            fontSize: '12px',
            color: '#999',
          }}
        >
          Made with <span style={{ color: '#2f2f2f', margin: '0 4px' }}>♥</span>{' '}
          by Your Company
        </Typography> */}
      </Box>
    </Box>
  );
}

export default FooterComp;

import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Hero from '/Assests/HeroPage.png';

export default function HelloPageAlt2() {
  return (
    <Box
      display="flex"
      justifyContent={{ sm: 'flex-start', xs: 'center' }}
      textAlign={{ sm: 'end', xs: 'center' }}
      id="welcome"
      sx={{
        pt: { xs: 2, sm: 3, lg: 5 },

        ml: { xl: 12, lg: 5, md: 4, sm: 2, xs: 1 },

        mb: { sm: 15, xs: 5 },
      }}
    >
      <Stack
        direction={{ lg: 'row', md: 'column' }}
        alignItems="center"
        justifyContent="center"
        spacing={4}
        sx={{ width: '100%', px: { xs: 2, sm: 3, lg: 5 } }}
      >
        {/* Text Content */}
        <Box
          sx={{
            width: { lg: '45%', md: '70%', sm: '100%', xs: '100%' },
            mt: { lg: 0, md: 1, sm: 2, xs: 2 },
            textAlign: { lg: 'left', sm: 'center' },
            px: { xs: 2, sm: 3 },
          }}
        >
          <Box className="drop-shadow">
            <Typography
              color="#1A3C6E"
              fontSize={{ lg: '35px', md: '30px', sm: '26px', xs: '22px' }}
              lineHeight={{ lg: '70px', md: '50px', sm: '40px', xs: '35px' }}
              fontWeight="700"
            >
              Your Trusted Partner in
            </Typography>
            <Typography
              color="#1A3C6E"
              fontSize={{ lg: '34px', md: '30px', sm: '26px', xs: '20px' }}
              lineHeight={{ lg: '70px', md: '50px', sm: '40px', xs: '35px' }}
              fontWeight="700"
              paddingBottom="20px"
            >
              Assisted Travel Solutions
            </Typography>
          </Box>
          <Typography
            className="drop-shadow-service"
            color="#2B193D"
            fontSize={{ lg: '19px', md: '18px', sm: '16px', xs: '14px' }}
            fontWeight="700"
          >
            Safe and reliable transport services
          </Typography>
          <Typography
            className="drop-shadow-service"
            color="#2B193D"
            fontSize={{ lg: '19px', md: '18px', sm: '16px', xs: '14px' }}
            fontWeight="700"
            paddingBottom="30px"
          >
            for schools, companies, and those requiring assistance.
          </Typography>

          <Button
            className="btn-like"
            href="/about"
            sx={{
              borderRadius: 3,
              height: { sm: 60, xs: 50 },
              width: { sm: 170, xs: 130 },
              fontSize: { xs: '12px', sm: '13px' },
            }}
          >
            Submit an Enquiry
          </Button>
        </Box>

        {/* Image Content */}
        <Box
          sx={{
            width: { lg: '65%', md: '60%', sm: '80%', xs: '90%' },
            mb: 3,
            mt: { xs: 6, sm: 0 },
          }}
        >
          <Image
            src={Hero}
            alt="Hero Image"
            width={1050}
            height={400}
            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            className="hero-image"
          />
        </Box>
      </Stack>
    </Box>
  );
}

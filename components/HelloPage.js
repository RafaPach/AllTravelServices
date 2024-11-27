import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import ScrollArrow from './scrollArrow.js';
import Image from 'next/image.js';
import Hero from '/Assests/HeroPage.png';
import Link from 'next/link';

export default function HelloPage() {
  return (
    <Box
      // height="100vh"
      // width="100%"
      display="flex"
      justifyContent="start"
      textAlign="start"
      p="10px"
      ml="130px"
      id="welcome"
      // backgroundColor="red"
    >
      <Stack
        direction="row"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          sx={{
            width: { lg: '655px', md: '360px', md: '300px', xs: '230px' },
            background: '',
            mt: { lg: '20px', md: '360px', md: '300px', xs: '230px' },
          }}
        >
          <Box className="drop-shadow">
            <Typography
              color="#1A3C6E"
              fontSize={{ lg: '40px', md: '30px', sm: '28px', xs: '22px' }}
              lineHeight="70px"
              fontWeight="700"
            >
              Your Trusted Partner in
            </Typography>

            <Typography
              color="#1A3C6E"
              fontSize={{ lg: '36px', md: '30px', sm: '28px', xs: '22px' }}
              lineHeight="70px"
              fontWeight="700"
              paddingBottom="30px"
            >
              Assisted Travel Solutions
            </Typography>
          </Box>
          <Typography
            className="drop-shadow-service"
            color="#2B193D"
            fontSize={{ lg: '20px', md: '30px', sm: '28px', xs: '22px' }}
            fontWeight="700"
          >
            Safe and reliable transport services
          </Typography>
          <Typography
            className="drop-shadow-service"
            color="#2B193D"
            fontSize={{ lg: '20px', md: '30px', sm: '28px', xs: '22px' }}
            fontWeight="700"
            paddingBottom="30px"
          >
            for schools, companies, and those requiring assistance.
          </Typography>

          {/* <Button
            variant="contained"
            style={{
              background: '#ADD8E6',
              color: 'black',
              borderRadius: 10,
              height: 70,
              fontWeight: 500,
            }}
          >
            Submit an Enquiry
          </Button> */}
          <Button
            className="btn-like"
            href="/about"
            // variant="contained"
            style={{
              borderRadius: 15,
              height: 70,
              width: 170,
            }}
          >
            Submit an Enquiry
          </Button>
        </Box>

        <Box mb="35px">
          <Link href="#welcome">
            <Image
              src={Hero}
              alt="Logo"
              width={1050}
              height={400}
              id="logoIMG"
              className="hero-image"
            />
          </Link>
        </Box>
        {/* <Box>
            <ScrollArrow />
          </Box> */}
      </Stack>
    </Box>
  );
}

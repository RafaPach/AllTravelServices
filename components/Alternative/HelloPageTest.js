import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Hero from '/Assests/HeroPage.png';

export default function HelloPageAlt2() {
  // return (
  //   <Box
  //     display="flex"
  //     justifyContent="start"
  //     textAlign="start"
  //     id="welcome"
  //     sx={{
  //       pt: { xs: '20px', sm: '30px', lg: '50px' },
  //       ml: { lg: '100px', md: '80px', sm: '20px', xs: '10px' },
  //     }}
  //   >
  //     <Stack
  //       direction={{ lg: 'row', md: 'column', sm: 'column', xs: 'column' }}
  //       display="flex"
  //       alignItems="center"
  //       justifyContent="center"
  //       spacing={4}
  //     >
  //       {/* Text Content */}
  //       <Box
  //         sx={{
  //           width: { lg: '655px', md: '500px', sm: '100%', xs: '100%' },
  //           mt: { lg: '0', md: '5px', sm: '20px', xs: '20px' },
  //           textAlign: { lg: 'start', m: 'start', sm: 'center', xs: 'center' },
  //           p: { xs: '10px', sm: '20px' },
  //         }}
  //       >
  //         <Box className="drop-shadow">
  //           <Typography
  //             color="#1A3C6E"
  //             fontSize={{ lg: '35px', md: '30px', sm: '26px', xs: '22px' }}
  //             lineHeight={{ lg: '70px', md: '50px', sm: '40px', xs: '35px' }}
  //             fontWeight="700"
  //           >
  //             Your Trusted Partner in
  //           </Typography>
  //           <Typography
  //             color="#1A3C6E"
  //             fontSize={{ lg: '34px', md: '30px', sm: '26px', xs: '20px' }}
  //             lineHeight={{ lg: '70px', md: '50px', sm: '40px', xs: '35px' }}
  //             fontWeight="700"
  //             paddingBottom="20px"
  //           >
  //             Assisted Travel Solutions
  //           </Typography>
  //         </Box>
  //         <Typography
  //           className="drop-shadow-service"
  //           color="#2B193D"
  //           fontSize={{ lg: '19px', md: '18px', sm: '16px', xs: '14px' }}
  //           fontWeight="700"
  //         >
  //           Safe and reliable transport services
  //         </Typography>
  //         <Typography
  //           className="drop-shadow-service"
  //           color="#2B193D"
  //           fontSize={{ lg: '19px', md: '18px', sm: '16px', xs: '14px' }}
  //           fontWeight="700"
  //           paddingBottom="30px"
  //         >
  //           for schools, companies, and those requiring assistance.
  //         </Typography>

  //         <Button
  //           className="btn-like"
  //           href="/about"
  //           // style={{
  //           //   borderRadius: 15,
  //           //   height: { lg: 70, md: 60, sm: 50, xs: 45 },
  //           //   width: { lg: 170, md: 150, sm: 130, xs: 120 },
  //           // }}
  //           style={{
  //             borderRadius: 15,
  //             height: 60,
  //             width: 170,
  //           }}
  //         >
  //           Submit an Enquiry
  //         </Button>
  //       </Box>

  //       {/* Image Content */}
  //       <Box
  //         mb="35px"
  //         sx={{
  //           width: { lg: '60%', md: '50%', sm: '80%', xs: '90%' },
  //           display: 'flex',
  //           justifyContent: { sm: 'center', xs: 'center' },
  //         }}
  //       >
  //         <a href="#welcome">
  //           <Image
  //             src={Hero}
  //             alt="Hero Image"
  //             width={1050}
  //             height={400}
  //             id="logoIMG"
  //             className="hero-image"
  //             style={{ width: '100%', height: 'auto' }}
  //           />
  //         </a>
  //       </Box>
  //     </Stack>
  //   </Box>
  // );

  return (
    <Box
      display="flex"
      justifyContent="flex-start"
      textAlign="start"
      id="welcome"
      sx={{
        pt: { xs: 2, sm: 3, lg: 5 },
        ml: { lg: 12, md: 10, sm: 2, xs: 1 },
        mb: 15,
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
            style={{
              borderRadius: 15,
              height: 60,
              width: 170,
            }}
          >
            Submit an Enquiry
          </Button>
        </Box>

        {/* Image Content */}
        <Box
          sx={{
            width: { lg: '65%', md: '60%', sm: '80%', xs: '90%' },
            display: 'flex',
            justifyContent: 'center',
            mb: 3,
          }}
        >
          <a href="#welcome">
            <Image
              src={Hero}
              alt="Hero Image"
              width={1050}
              height={400}
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
              className="hero-image"
            />
          </a>
        </Box>
      </Stack>
    </Box>
  );
}

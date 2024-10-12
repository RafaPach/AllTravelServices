import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import AllTravel3D from '../Assests/AllTravel3D.png';
import Image from 'next/image.js';

const About = () => {
  return (
    <Box ml="130px">
      <Stack
        mt="150px"
        display="flex"
        justifyContent="start"
        sx={{ backgroundColor: '' }}
      >
        <Stack spacing={2} direction="row">
          <Typography
            color="#1E1E1E"
            fontWeight="500"
            fontSize="36px"
            lineHeight="40px"
            letterSpacing="0em"
            textAlign="center"
          >
            About Me <span className="dotColor">.</span>
          </Typography>
        </Stack>
        <div className="aboutline"></div>
      </Stack>
      <Stack direction="row">
        <Box
          mt="50px"
          sx={{ width: { lg: '971px', md: '360px', md: '300px', xs: '230px' } }}
          backgroundColor=""
        >
          <ol
            style={{
              listStyle: 'none',
              lineHeight: '40px',
              paddingLeft: '0px',
            }}
          >
            <li style={{ marginBottom: '30px' }}>
              {' '}
              Yeah we do basically school runs only and private contracts to
              activity centres etc mostly disabled people that need assistance
              while travelling.{' '}
            </li>
            <li style={{ marginBottom: '30px' }}>
              {' '}
              And the site would be mainly for enquiries for example if people
              want to work for us, companies wanting to make a private contracts
              with us etc but should be all done through the enquiry section
              where they fill out a simple message{' '}
            </li>
            <li style={{ marginBottom: '30px' }}>
              {' '}
              So we don’t really do normal taxi bookings as you don’t really
              make money unless you have around 30-50 drivers paying you weekly
              rent, however to get those drivers to work with you instead of
              other companies you need a lot of constant bookings to keep them
              busy otherwise they wouldn’t mminus off the rent and fuel
            </li>
          </ol>
        </Box>
        <Box
          href="#welcome"
          display="flex"
          alignItems="center"
          justifyContent="center"
          backgroundColor=""
          sx={{ width: '70%', height: '500px' }}
        >
          <Image
            src={AllTravel3D}
            alt="Logo"
            width={800}
            height={300}
            id="logoIMG"
            className="d3-image"
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default About;

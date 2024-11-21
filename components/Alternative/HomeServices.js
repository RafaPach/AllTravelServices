import React from 'react';
import { Typography, Grid, Box, Stack } from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import AssistedTravel from '../../Assests/AssistedTravel.png';
import Bus from '../../Assests/Bus.png';
import WheelChair from '../../Assests/WheelChair.png';
import Private from '../../Assests/PrivateContract.png';
import VIP from '../../Assests/VIP.png';
import ScrollArrow from '../scrollArrow';
import { useInView } from 'react-intersection-observer';

const HomeServicesAlt = () => {
  const theme = useTheme(); // Make sure to use `useTheme` hook
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Correctly using the theme

  const images = [
    {
      name: 'School Transport',
      img: Bus,
      width: { sm: 110, xs: 90 },
      height: { sm: 106, xs: 90 },
    },
    {
      name: 'Private Contracts',
      img: Private,
      width: { sm: 105, xs: 80 }, // Added xs property
      height: { sm: 106, xs: 90 },
    },
    {
      name: 'Assisted Travel',
      img: WheelChair,
      width: { sm: 100, xs: 80 }, // Added xs property
      height: { sm: 106, xs: 90 },
    },
    {
      name: 'VIP Chauffeur Services',
      img: VIP,
      width: { sm: 105, xs: 80 }, // Added xs property
      height: 106,
    },
  ];

  const { ref: myRef, inView: isVisible } = useInView();

  return (
    <Box>
      <Box backgroundColor="" ml={{ sm: 15, xs: 5 }} mr={{ sm: 15, xs: 6 }}>
        <Grid
          container
          spacing={0}
          mt="45px"
          display="flex"
          justifyContent="space-between"
          sx={{
            columnGap: { xs: 3, sm: '0px' }, // Adjust gap for xs devices
          }}
        >
          {images.map((item) => (
            <Grid item key={item.name} xs={4} sm={4} md={4} lg={2} ml="20px">
              <Stack
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                textAlign={'center'}
                mb="60px"
              >
                <Image
                  width={isSmallScreen ? item.width.xs : item.width.sm}
                  height={isSmallScreen ? item.height.xs : item.width.sm}
                  src={item.img}
                  alt="icon"
                />
                <Typography
                  className="drop-shadow-smaller"
                  sx={{ fontWeight: 500, fontSize: { sm: '20px', xs: '14px' } }}
                  mt="px"
                >
                  {item.name}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box display="flex" justifyContent="center">
        <Stack
          direction="row"
          spacing={4}
          display="flex"
          alignItems="center"

          // className="drop-shadow-service"
        >
          <Typography
            fontSize={{ lg: '18px', md: '30px', sm: '28px', xs: '16px' }}
            fontWeight="600"
            className="drop-shadow-smaller"
            sx={{ fontWeight: 500 }}
          >
            Find more
          </Typography>
          <ScrollArrow />
          <Typography
            fontSize={{ lg: '18px', md: '30px', sm: '28px', xs: '16px' }}
            fontWeight="600"
            className="drop-shadow-smaller"
            sx={{ fontWeight: 500 }}
          >
            about us
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default HomeServicesAlt;

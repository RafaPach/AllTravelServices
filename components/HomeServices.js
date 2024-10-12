import React from 'react';
import { Typography, Grid, Box, Stack } from '@mui/material';
import Image from 'next/image';
import AssistedTravel from '../Assests/AssistedTravel.png';
import Bus from '../Assests/Bus.png';
import WheelChair from '../Assests/WheelChair.png';
import Private from '../Assests/PrivateContract.png';
import VIP from '../Assests/VIP.png';
import ScrollArrow from './scrollArrow';
import { useInView } from 'react-intersection-observer';

const HomeServices = () => {
  const images = [
    { name: 'School Transport', img: Bus, width: 130, height: 120 },
    { name: 'Private Contracts', img: Private, width: 110, height: 115 },
    { name: 'Assisted Travel', img: WheelChair, width: 100, height: 115 },
    {
      name: 'VIP Chauffeur Services',
      img: VIP,
      width: 105,
      height: 120,
    },
  ];

  const { ref: myRef, inView: isVisible } = useInView();

  return (
    <Box>
      <Box sx={{ textAlign: 'center' }}>
        <Typography
          className="drop-shadow-service"
          sx={{ mb: 2, color: '#395390', fontWeight: 600, fontSize: 30 }}
        >
          All Travel Services
        </Typography>
        <Typography
          className="drop-shadow-service"
          variant="h6"
          sx={{ mb: 4, fontWeight: 400 }}
        >
          Core Services
        </Typography>
      </Box>
      <Box backgroundColor="" ml={15} mr={15}>
        <Grid
          container
          spacing={0}
          mt="50px"
          display="flex"
          justifyContent="space-between"
        >
          {images.map((item) => (
            <Grid item key={item.name} xs={4} sm={4} md={4} lg={2} ml="20px">
              <Stack
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                backgroundColor=""
                mb="100px"
              >
                <Image
                  width={item.width}
                  height={item.height}
                  src={item.img}
                  alt="icon"
                />
                <Typography
                  className="drop-shadow-smaller"
                  sx={{ fontWeight: 500 }}
                  fontSize="20px"
                  mt="5px"
                >
                  {item.name}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box display="flex" justifyContent="center">
        <ScrollArrow />
      </Box>
    </Box>
  );
};

export default HomeServices;

import React from 'react';
import { Typography, Grid, Box, Stack } from '@mui/material';
import Image from 'next/image';
import AssistedTravel from '../../Assests/AssistedTravel.png';
import Bus from '../../Assests/Bus.png';
import WheelChair from '../../Assests/WheelChair.png';
import Private from '../../Assests/PrivateContract.png';
import VIP from '../../Assests/VIP.png';
import ScrollArrow from '../scrollArrow';
import { useInView } from 'react-intersection-observer';

const HomeServicesAlt2 = () => {
  const images = [
    { name: 'School Transport', img: Bus, width: 120, height: 106 },
    { name: 'Private Contracts', img: Private, width: 105, height: 106 },
    { name: 'Assisted Travel', img: WheelChair, width: 100, height: 106 },
    {
      name: 'VIP Chauffeur Services',
      img: VIP,
      width: 90,
      height: 106,
    },
  ];

  const { ref: myRef, inView: isVisible } = useInView();

  return (
    <Box>
      <Box
        ml={{ lg: 15, md: 10, sm: 5, xs: 2 }}
        mr={{ lg: 15, md: 10, sm: 5, xs: 2 }}
      >
        <Grid
          container
          spacing={2}
          mt="45px"
          display="flex"
          justifyContent="space-between"
        >
          {images.map((item) => (
            <Grid item key={item.name} xs={6} sm={6} md={3} lg={2}>
              <Stack
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb="30px"
              >
                <Image
                  width={item.width}
                  height={item.height}
                  src={item.img}
                  alt={item.name}
                  style={{ width: 'auto', height: 'auto' }}
                />
                <Typography
                  className="drop-shadow-smaller"
                  sx={{ fontWeight: 500, textAlign: 'center' }}
                  fontSize={{ lg: '20px', md: '17px', sm: '16px', xs: '14px' }}
                >
                  {item.name}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box display="flex" justifyContent="center">
        <Stack direction="row" spacing={2} display="flex" alignItems="center">
          <Typography
            fontSize={{ lg: '18px', md: '16px', sm: '14px', xs: '12px' }}
            fontWeight="600"
            className="drop-shadow-smaller"
          >
            Find more
          </Typography>
          <ScrollArrow />
          <Typography
            fontSize={{ lg: '18px', md: '16px', sm: '14px', xs: '12px' }}
            fontWeight="600"
            className="drop-shadow-smaller"
          >
            about us
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default HomeServicesAlt2;

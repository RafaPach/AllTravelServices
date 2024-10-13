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

const HomeServicesAlt = () => {
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
      <Box backgroundColor="" ml={15} mr={15}>
        <Grid
          container
          spacing={0}
          mt="45px"
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
                mb="60px"
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
            fontSize={{ lg: '18px', md: '30px', sm: '28px', xs: '22px' }}
            fontWeight="600"
            className="drop-shadow-smaller"
            sx={{ fontWeight: 500 }}
          >
            Find more
          </Typography>
          <ScrollArrow />
          <Typography
            fontSize={{ lg: '18px', md: '30px', sm: '28px', xs: '22px' }}
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

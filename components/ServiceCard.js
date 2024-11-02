import React from 'react';
import { Container, Typography, Grid, Box, Stack } from '@mui/material';
import { styled } from '@mui/system';
import CarImg from '../Assests/CarImg.jpg';
import Image from 'next/image';

const ServicesCard = ({ src }) => (
  <Box
    sx={{
      // margin: 0, // Ensure no margin
      // padding: 0, // Ensure no padding
      perspective: '1000px',
      width: '100%',
      height: { lg: '255px', xs: '200px' },
      '&:hover .flip-card-inner': { transform: 'rotateY(180deg)' },
    }}
  >
    <Box
      className="flip-card-inner"
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.8s',
      }}
    >
      {/* Front Side */}
      <Box
        className="flip-card-front"
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backfaceVisibility: 'hidden',
          backgroundColor: '#e0f7fa',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          src={src}
          alt="Service Icon"
          layout="fill"
          style={{ borderRadius: '10px' }}
        />
      </Box>
      {/* Back Side */}
      <Box
        className="flip-card-back"
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Image
          src={src}
          alt="Service Icon"
          layout="fill"
          style={{ borderRadius: '10px' }}
          className="d3-image"
        />
        <Typography variant="body3">Service Details</Typography>
        {/* Add more details as necessary */}
      </Box>
    </Box>
  </Box>
);

export default ServicesCard;

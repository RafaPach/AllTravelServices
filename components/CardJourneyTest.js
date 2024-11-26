import React, { useState } from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid2';
import ReturnJourney from '../Assests/ReturnCar.png';
import Image from 'next/image';
import Oneway from '../Assests/OneWay.png';

const JourneyCard = ({ journeyType, setJourneyType, setReturnDate }) => {
  const handleJourneyTypeChange = (type) => {
    setJourneyType(type);
    setReturnDate(null); // Reset return date if they switch back to one-way
  };

  return (
    <Box component="form" sx={{ mt: 0, maxWidth: 'md', backgroundColor: '' }}>
      <Grid
        container
        direction="row"
        // spacing={2}
        justifyContent="space-around"
      >
        <Grid item xs={6} sx={{ width: '30%' }}>
          <Card
            onClick={() => setJourneyType('oneWay')}
            sx={{
              position: 'relative',
              overflow: 'hidden',
              backgroundColor:
                journeyType === 'oneWay' ? 'rgba(255, 193, 7, 0.2)' : 'inherit', // Background on click
              '&:hover': {
                // backgroundColor: 'rgba(255, 193, 7, 0.2)', // Background on hover
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: '#FFC107',
                opacity: '0.2',
                transform: 'scaleX(0)',
                transformOrigin: 'left',
                transition: 'transform 0.6s ease',
                zIndex: 0,
              },
              '&:hover::after': {
                transform: 'scaleX(1)', // Slide-in shadow on hover
              },
              '& > *': { position: 'relative', zIndex: 1 }, // Content above shadow
            }}
          >
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image src={Oneway} width={110} height={50} alt="oneWayJourney" />{' '}
              <Typography
                sx={
                  {
                    fontSize: '14px',
                    mt: '10px',
                    fontWeight: journeyType === 'oneWay' ? '700' : '500',
                    color: journeyType === 'oneWay' ? '#FFC107' : 'black', // Typography color on click
                  } // Typography color on hover
                }
              >
                ONE WAY JOURNEY
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sx={{ width: '30%' }}>
          <Card
            onClick={() => handleJourneyTypeChange('return')}
            sx={{
              position: 'relative',
              overflow: 'hidden',
              backgroundColor:
                journeyType === 'return' ? 'rgba(255, 193, 7, 0.2)' : 'inherit', // Background on click
              '&:hover': {
                // backgroundColor: 'rgba(255, 193, 7, 0.2)', // Background on hover
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: '#FFC107',
                opacity: '0.2',
                transform: 'scaleX(0)',
                transformOrigin: 'left',
                transition: 'transform 0.6s ease',
                zIndex: 0,
              },
              '&:hover::after': {
                transform: 'scaleX(1)', // Slide-in shadow on hover
              },
              '& > *': { position: 'relative', zIndex: 1 }, // Content above shadow
            }}
          >
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image
                src={ReturnJourney}
                width={60}
                height={50}
                alt="returnJouney"
              />{' '}
              <Typography
                sx={
                  {
                    fontSize: '14px',
                    mt: '10px',
                    fontWeight: journeyType === 'return' ? '700' : '500',
                    color: journeyType === 'return' ? '#FFC107' : 'black', // Typography color on click
                    // '&:hover': {
                    //   color: '#FFC107',
                    //   fontWeight: '700',
                  } // Typography color on hover
                }
              >
                RETURN JOURNEY
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      {/* <Typography>{journeyType}</Typography> */}
    </Box>
  );
};

export default JourneyCard;

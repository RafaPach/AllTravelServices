import React, { useState } from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Grid,
  TextField,
} from '@mui/material';
import { styled } from '@mui/system';

import ReturnJourney from '../Assests/ReturnJourney.png';
import Image from 'next/image';

const JourneyTypeCard = styled(Card)(({ selected }) => ({
  backgroundColor: selected ? '#FFC107' : '#F5F5F5', // Highlight selected card with a color
  boxShadow: selected
    ? '0 4px 8px rgba(0, 0, 0, 0.3)'
    : '0 2px 4px rgba(0, 0, 0, 0.1)',
  transition: '0.3s',
  '&:hover': {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    cursor: 'pointer',
  },
}));

const RequestQuoteForm = () => {
  const [journeyType, setJourneyType] = useState('oneWay'); // Default to one-way journey

  const handleJourneyTypeChange = (type) => {
    setJourneyType(type);
  };

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Choose Your Journey Type
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <JourneyTypeCard
            onClick={() => handleJourneyTypeChange('oneWay')}
            selected={journeyType === 'oneWay'}
          >
            <CardActionArea>
              <CardContent>
                <Typography variant="h6" component="div">
                  One-Way Journey
                </Typography>
              </CardContent>
            </CardActionArea>
          </JourneyTypeCard>
        </Grid>
        <Grid item xs={6}>
          <JourneyTypeCard
            onClick={() => handleJourneyTypeChange('return')}
            selected={journeyType === 'return'}
          >
            <CardActionArea>
              <CardContent>
                <Image src={ReturnJourney} width={130} height={130} />
                <Typography variant="h6" component="div">
                  Return Journey
                </Typography>
              </CardContent>
            </CardActionArea>
          </JourneyTypeCard>
        </Grid>
      </Grid>
    </div>
  );
};

export default RequestQuoteForm;

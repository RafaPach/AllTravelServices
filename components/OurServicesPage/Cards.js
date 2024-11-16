import React, { useState } from 'react';
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Stack,
} from '@mui/material';
import Image from 'next/image';

import GroupIcon from '@mui/icons-material/Group';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PaymentIcon from '@mui/icons-material/Payment';
import AccessibleIcon from '@mui/icons-material/Accessible';
import LuggageIcon from '@mui/icons-material/Luggage';
import PetsIcon from '@mui/icons-material/Pets';
import PregnantWomanIcon from '@mui/icons-material/PregnantWoman';

function ServCards({ title, pic, description }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  const icons = [
    { icon: GroupIcon, title: 'Passengers', description: '10' },
    {
      icon: DirectionsCarIcon,
      title: 'Vehicle Type',
      description: 'Sedan, SUV, Minivan',
    },
    { icon: LuggageIcon, title: 'Luggage', description: 'Up to 3 bags' },
    {
      icon: PaymentIcon,
      title: 'Payment Options',
      description: 'Credit, Cash, Mobile',
    },
    {
      icon: AccessibleIcon,
      title: 'Accessibility',
      description: 'Wheelchair Accessible',
    },
    { icon: PetsIcon, title: 'Pets', description: 'Pets Allowed' },
    {
      icon: PregnantWomanIcon,
      title: 'Pregnancy Support',
      description: 'Extra Comfort',
    },
  ];
  return (
    <Box className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
      <Box className="flip-card-inner">
        {/* Front Side */}
        <Box className="flip-card-front">
          <Card
            variant="outlined"
            sx={{
              width: '350px',
              mx: 'auto',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}
          >
            {/* Card Media takes 50% of the card height */}
            <CardMedia sx={{ height: '50%' }}>
              <Image
                src={pic}
                alt="Car Image"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </CardMedia>

            {/* Card Content takes the remaining 50% of the card height */}
            <CardContent
              sx={{ height: '50%', display: 'flex', flexDirection: 'column' }}
            >
              <Stack direction="column" spacing={3} sx={{ m: 0, p: 0 }}>
                <Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    marginBottom={1}
                  >
                    <Typography
                      sx={{ fontSize: '15px', fontWeight: '700' }}
                      marginBottom={0}
                      marginTop={1}
                    >
                      {title}
                    </Typography>
                  </Box>
                  <Typography sx={{ fontSize: '13px', color: '#6F7E8C' }}>
                    {description}
                  </Typography>
                </Box>
              </Stack>
              <Stack
                mt={3}
                direction="row"
                display="flex"
                justifyContent="space-around"
              >
                <Button
                  className="btn-svcard"
                  sx={{
                    borderRadius: 2,
                    height: { lg: 30, md: 30, sm: 30 },
                    width: { lg: 90, md: 25, sm: 25 },
                    fontSize: { lg: '0.6rem', md: '0.55rem', sm: '0.5rem' },
                  }}
                >
                  Get a Quote
                </Button>
                <Button
                  sx={{
                    borderRadius: 2,
                    height: { lg: 30, md: 30, sm: 30 },
                    width: { lg: 95, md: 25, sm: 25 },
                    fontSize: { lg: '0.6rem', md: '0.55rem', sm: '0.5rem' },
                  }}
                  className="btn-svcard"
                  onClick={handleFlip}
                >
                  More Details
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Box>

        {/* Back Side */}
        <Box
          className="flip-card-back"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f0f0f0',
          }}
        >
          {icons.map((item, index) => (
            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              key={index}
              mb={1.5}
            >
              <Box>
                <item.icon />
              </Box>
              <Box width="150px" display="flex" justifyContent="center">
                <Typography sx={{ fontSize: '12px' }} color="textSecondary">
                  {item.description}
                </Typography>
              </Box>
            </Stack>
          ))}

          <Button
            sx={{
              borderRadius: 2,
              height: { lg: 30, md: 30, sm: 30 },
              width: { lg: 95, md: 25, sm: 25 },
              fontSize: { lg: '0.6rem', md: '0.55rem', sm: '0.5rem' },
            }}
            className="btn-like"
            onClick={handleFlip}
          >
            Go Back
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ServCards;

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
import Link from 'next/link';

function ServCards({ title, pic, description, backContent }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <Box className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
      <Box className="flip-card-inner">
        {/* Front Side */}
        <Box className="flip-card-front">
          <Card
            variant="outlined"
            sx={{
              width: { xs: '285px', sm: '350px' },
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
                pb={10}
                direction="row"
                display="flex"
                justifyContent="space-around"
              >
                <Link href="/getaquote">
                  <Button
                    sx={{
                      borderRadius: 2,
                      height: { lg: 35, md: 30, sm: 30, xs: 35 },
                      width: { xl: 100, lg: 95, md: 85, sm: 75, xs: 100 },
                      fontSize: {
                        lg: '0.6rem',
                        md: '0.55rem',
                        sm: '0.5rem',
                        xs: '10px',
                      },
                      backgroundColor: '#fcb017',
                      color: '#fff',
                      opacity: 0.9,
                      textAlign: 'center',
                      '&:hover': {
                        boxShadow:
                          '0px 0px 0px 2.5px #fff, 0px 0px 0px 5px #fcb017, 0px 0px 0px 10px white, 0px 0px 0px 10.5px #fcb017',
                        backgroundColor: 'white',
                        color: '#fcb017',
                      },
                    }}
                  >
                    Get a Quote
                  </Button>
                </Link>
                <Button
                  sx={{
                    borderRadius: 2,
                    height: { lg: 35, md: 30, sm: 30, xs: 35 },
                    width: { xl: 100, lg: 97, md: 85, sm: 75, xs: 100 },
                    fontSize: {
                      lg: '0.65rem',
                      md: '0.55rem',
                      sm: '0.5rem',
                      xs: '10px',
                    },
                    backgroundColor: '#fcb017',
                    color: '#fff',
                    opacity: 0.9,
                    textAlign: 'center',
                    '&:hover': {
                      boxShadow:
                        '0px 0px 0px 2.5px #fff, 0px 0px 0px 5px #fcb017, 0px 0px 0px 10px white, 0px 0px 0px 10.5px #fcb017',
                      backgroundColor: 'white',
                      color: '#fcb017',
                    },
                  }}
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
          {backContent.map((item, index) => (
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
              <Box
                width="150px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                textAlign="center" // Ensures text is centered within the Box
              >
                <Typography
                  sx={{
                    fontSize: {
                      xl: '14px',
                      lg: '13px',
                      md: '13px',
                      sm: '12.5px',
                      xs: '12px',
                    },
                    lineHeight: 1.5, // Consistent line spacing
                  }}
                  color="textSecondary"
                >
                  {item.description}
                </Typography>
              </Box>
            </Stack>
          ))}

          <Button
            sx={{
              borderRadius: 2,
              height: { lg: 35, md: 30, sm: 30, xs: 35 },
              width: { lg: 100, md: 25, sm: 25, xs: 100 },
              fontSize: {
                lg: '0.6rem',
                md: '0.55rem',
                sm: '0.5rem',
                xs: '10px',
              },
              backgroundColor: '#fcb017',
              color: '#fff',
              textAlign: 'center',
              '&:hover': {
                boxShadow:
                  '0px 0px 0px 2.5px #fff, 0px 0px 0px 5px #fcb017, 0px 0px 0px 10px white, 0px 0px 0px 10.5px #fcb017',
                backgroundColor: 'white',
                color: '#fcb017',
              },
            }}
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

import React from 'react';
import { Box, Typography, Card, CardContent, Button } from '@mui/material';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import Grid from '@mui/material/Grid2';
import { useRef, useEffect, useState } from 'react';

const WhyBookWithUs = () => {
  const myRef = useRef();

  const [isVisible, setIsVisible] = useState();

  const [scrollDirection, setScrollDirection] = useState(null); // "up" or "down"
  const [prevY, setPrevY] = useState(0); // Tracks the previous position of the section

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      const currentY = entry.boundingClientRect.top;

      // Check if the user is scrolling down
      if (currentY < prevY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }

      setPrevY(currentY);

      // Trigger the effect only if scrolling down and the section becomes visible
      if (scrollDirection === 'down' && entry.isIntersecting) {
        setIsVisible(true);
      }
    });

    if (myRef.current) {
      observer.observe(myRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [scrollDirection, prevY]);

  return (
    <Box
      sx={{
        textAlign: 'center',
        py: 5,
        mt: 15,
        mb: { xs: 0, sm: 0, md: -7.5 },
        backgroundColor: '#f9f9f9',
        height: { lg: '750px', md: '1200px' },
        position: 'relative',
        top: 0,
      }}
      ref={myRef}
      className={`${isVisible}view`}
    >
      <Typography sx={{ fontSize: { xs: '22px', sm: '32px' } }} gutterBottom>
        Why Choose Us
      </Typography>
      <Typography
        sx={{ fontSize: { xs: '15px', sm: '18px' } }}
        color="textSecondary"
        gutterBottom
        mt="20px"
        p={{ xs: 2.5, sm: 0 }}
      >
        Variety of Vehicles and Broad Coverage: Ensuring reliable, high-quality
        service for every journey.
      </Typography>

      <Grid
        container
        spacing={{ sm: 15, xs: 3.5 }}
        justifyContent="center"
        sx={{ mt: { sm: 10, xs: 7 } }}
      >
        {/* First Card */}
        <Grid item xs={6} sm={6} md={4}>
          <Card
            sx={{
              p: 3,
              width: { xs: '180px', sm: '320px' },
              height: { xs: '260px', sm: '370px' },
              borderRadius: '10px',
              display: 'flex', // Makes the card flexible
              flexDirection: 'column', // Stacks the content vertically
              justifyContent: 'center', // Centers the content vertically
              alignItems: 'center', // Centers the content horizontally
            }}
          >
            <CardContent>
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: { xs: 60, sm: 90 },
                  height: { xs: 60, sm: 90 },
                  backgroundColor: '#FFF2F0',
                  borderRadius: '50%',
                  margin: '0 auto',
                  mb: 4, // Adds margin below the icon for spacing
                }}
              >
                <BookmarkAddedIcon
                  sx={{ fontSize: { xs: 40, sm: 50 }, color: '#ff6f61' }}
                />
              </Box>
              <Typography
                sx={{
                  mt: { xs: -1, sm: 2 },
                  fontWeight: 700,
                  fontSize: { xs: '14px', sm: '16px' },
                }}
              >
                Exceptional Value & Flexibility
              </Typography>
              <Box
                sx={{ width: { xs: '165px', sm: '100%' } }}
                textAlign="center"
                p={1}
              >
                <Typography
                  sx={{
                    mt: 3,
                    cursor: 'pointer',
                    fontSize: { xs: '13px', sm: '14.5px' },
                    color: '#6F7E8C',
                  }}
                >
                  Best rates, flexible bookings, and no hidden fees.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Second Card */}
        <Grid item xs={6} sm={6} md={4}>
          <Card
            sx={{
              p: 3,
              width: { xs: '170px', sm: '320px' },
              height: { xs: '260px', sm: '370px' },
              borderRadius: '10px',
              display: 'flex', // Makes the card flexible
              flexDirection: 'column', // Stacks the content vertically
              justifyContent: 'center', // Centers the content vertically
              alignItems: 'center', // Centers the content horizontally
            }}
          >
            <CardContent>
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: { xs: 60, sm: 90 },
                  height: { xs: 60, sm: 90 },
                  backgroundColor: '#FFF2F0',
                  borderRadius: '50%',
                  margin: '0 auto',
                  mb: 4, // Adds margin below the icon for spacing
                }}
              >
                <LocalTaxiIcon
                  sx={{ fontSize: { xs: 40, sm: 50 }, color: '#ff6f61' }}
                />
              </Box>
              <Typography
                sx={{
                  mt: { xs: -1, sm: 2 },
                  fontWeight: 700,
                  fontSize: { xs: '14px', sm: '16px' },
                }}
              >
                Tailored Travel Experience
              </Typography>
              <Box
                sx={{ width: { xs: '165px', sm: '100%' } }}
                textAlign="center"
                p={1}
              >
                <Typography
                  sx={{
                    mt: 3,
                    cursor: 'pointer',
                    fontSize: { xs: '13px', sm: '14.5px' },
                    color: '#6F7E8C',
                  }}
                >
                  Personalized itineraries and seamless, hassle-free transfers.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Third Card */}
        <Grid
          item
          xs={6}
          sm={6}
          md={4}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Card
            sx={{
              p: 3,
              width: { xs: '190px', sm: '320px' },
              height: { xs: '260px', sm: '370px' },
              borderRadius: '10px',
              display: 'flex', // Makes the card flexible
              flexDirection: 'column', // Stacks the content vertically
              justifyContent: 'center', // Centers the content vertically
              alignItems: 'center', // Centers the content horizontally
            }}
          >
            <CardContent>
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: { xs: 60, sm: 90 },
                  height: { xs: 60, sm: 90 },
                  backgroundColor: '#FFF2F0',
                  borderRadius: '50%',
                  margin: '0 auto',
                  mb: { xs: 2, sm: 4 }, // Adds margin below the icon for spacing
                }}
              >
                <ContactSupportIcon
                  sx={{ fontSize: { xs: 40, sm: 50 }, color: '#ff6f61' }}
                />
              </Box>
              <Typography
                sx={{
                  mt: 2,
                  fontWeight: 700,
                  fontSize: { xs: '14px', sm: '16px' },
                }}
              >
                Support at Every Step{' '}
              </Typography>
              <Box
                sx={{ width: { xs: '165px', sm: '100%' } }}
                textAlign="center"
                p={1}
              >
                <Typography
                  sx={{
                    mt: 3,
                    cursor: 'pointer',
                    fontSize: { xs: '13px', sm: '14.5px' },
                    color: '#6F7E8C',
                  }}
                >
                  Responsive support to help with any questions or changes
                  during your trip.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhyBookWithUs;

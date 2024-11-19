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
        mb: 8,
        backgroundColor: '#f9f9f9',
        height: { lg: '750px', md: '1200px' },
        position: 'relative',
        top: 0,
      }}
      ref={myRef}
      className={`${isVisible}view`}
    >
      <Typography variant="h4" component="h2" gutterBottom>
        Why Choose Us
      </Typography>
      <Typography
        variant="subtitle1"
        color="textSecondary"
        gutterBottom
        mt="20px"
      >
        Variety of Vehicles and Broad Coverage: Ensuring reliable, high-quality
        service for every journey.
      </Typography>

      <Grid container spacing={15} justifyContent="center" sx={{ mt: 10 }}>
        {/* First Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              p: 3,
              width: '320px',
              height: '370px',
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
                  width: 90,
                  height: 90,
                  backgroundColor: '#FFF2F0',
                  borderRadius: '50%',
                  margin: '0 auto',
                  mb: 4, // Adds margin below the icon for spacing
                }}
              >
                <BookmarkAddedIcon style={{ fontSize: 50, color: '#ff6f61' }} />
              </Box>
              <Typography sx={{ mt: 2, fontWeight: 700, fontSize: '16px' }}>
                Exceptional Value & Flexibility
              </Typography>
              <Typography
                sx={{
                  mt: 3,
                  cursor: 'pointer',
                  fontSize: '13px',
                  color: '#6F7E8C',
                }}
              >
                Best rates, flexible bookings, and no hidden fees.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Second Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              p: 3,
              width: '320px',
              height: '370px',
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
                  width: 90,
                  height: 90,
                  backgroundColor: '#FFF2F0',
                  borderRadius: '50%',
                  margin: '0 auto',
                  mb: 4, // Adds margin below the icon for spacing
                }}
              >
                <LocalTaxiIcon style={{ fontSize: 50, color: '#ff6f61' }} />
              </Box>
              <Typography sx={{ mt: 2, fontWeight: 700, fontSize: '16px' }}>
                Tailored Travel Experience
              </Typography>
              <Typography
                sx={{
                  mt: 3,
                  cursor: 'pointer',
                  fontSize: '13px',
                  color: '#6F7E8C',
                }}
              >
                Personalized itineraries and seamless, hassle-free transfers.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Third Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              p: 3,
              width: '320px',
              height: '370px',
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
                  width: 90,
                  height: 90,
                  backgroundColor: '#FFF2F0',
                  borderRadius: '50%',
                  margin: '0 auto',
                  mb: 4, // Adds margin below the icon for spacing
                }}
              >
                <ContactSupportIcon
                  style={{ fontSize: 50, color: '#ff6f61' }}
                />
              </Box>
              <Typography sx={{ mt: 2, fontWeight: 700, fontSize: '16px' }}>
                Support at Every Step{' '}
              </Typography>
              <Typography
                sx={{
                  mt: 3,
                  cursor: 'pointer',
                  fontSize: '13px',
                  color: '#6F7E8C',
                }}
              >
                Responsive support to help with any questions or changes during
                your trip.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhyBookWithUs;

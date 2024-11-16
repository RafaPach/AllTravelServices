import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Pagination,
  Box,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import FooterComp from '../Footer/Footer';

const testimonials = [
  {
    title: 'Burberryx',
    location: 'Nuts',
    content: `The team at Hunter Express have consistently provided top-notch logistics solutions for our business. 
              Their attention to detail and customer support has been exemplary.`,
  },
  {
    title: 'Pamal',
    location: 'NO comment',
    content: `The team at Hunter Express have consistently provided top-notch logistics solutions for our business. 
              Their attention to detail and customer support has been exemplary.`,
  },
  {
    title: 'Logistics',
    location: 'London',
    content: `The team at Hunter Express have consistently provided top-notch logistics solutions for our business. 
              Their attention to detail and customer support has been exemplary.`,
  },
  {
    title: 'Retail',
    location: 'Birmingham',
    content: `Hunter Express has played a vital role in ensuring our supply chain runs smoothly. 
              Their reliable service and communication have been invaluable to our operations.`,
  },
  {
    title: 'Supply Chain',
    location: 'New York',
    content: `Thanks to Hunter Express, we've streamlined our distribution processes. 
              Their expertise has been a game-changer.`,
  },
  {
    title: 'E-commerce',
    location: 'Paris',
    content: `Hunter Express's solutions have improved our delivery times significantly. 
              Our customers couldn't be happier!`,
  },
];

const Testimonials = () => {
  const itemsPerPage = 2;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + itemsPerPage) % testimonials.length
      );
    }, 5000); // Change every 15 seconds

    return () => clearInterval(interval);
  }, []);

  // Dynamically select 2 testimonials at a time
  const displayedTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
  ];

  return (
    <>
      <Container
        style={{
          textAlign: 'center',
          marginTop: '50px',
          backgroundColor: '#f9f9f9',
          height: 'auto',
          minHeight: '90vh',
          width: '100%', // Use 100% instead of 100vw
          maxWidth: '100%', // Ensure no overflow due to max-width
          display: 'flex',
          flexDirection: 'column', // Stack content vertically
          // justifyContent:'center',
          alignItems: 'center', // Center all content horizontally
          overflowX: 'hidden', // Hide any accidental horizontal overflow
          padding: '10px 0',
          flexGrow: 1,
        }}
      >
        {/* TESTIMONIALS Heading */}

        <Box
          sx={{
            display: 'flex',

            justifyContent: 'center', // Centers content horizontally

            alignItems: 'center', // Centers content vertically

            width: '100%',

            marginBottom: '100px',

            marginTop: '50px',
          }}
        >
          <Typography variant="h4" component="h2" gutterBottom>
            TESTIMONIALS
          </Typography>
        </Box>

        {/* Testimonial Cards Container */}

        <Box
          sx={{
            display: 'flex',

            justifyContent: 'center', // Center cards horizontally

            alignItems: 'center',

            gap: { xs: 8, sm: 5 }, // Reduce gap size to prevent overflow

            flexWrap: 'wrap', // Allow wrapping on smaller screens

            width: '100%', // Full width of the container

            maxWidth: '100%', // Limit maximum width for better appearance

            padding: '0 20px', // Padding to ensure content doesn't hit edges

            boxSizing: 'border-box', // Include padding in width calculations

            flexGrow: 0,
          }}
        >
          {displayedTestimonials.map((testimonial, index) => (
            <Card
              key={index} // Don't forget the key!
              sx={{
                width: { xs: '100%', sm: '45%', md: '40%' },

                height: '350px',

                display: 'flex', // Makes the card flexible

                flexDirection: 'column', // Stacks the content vertically

                justifyContent: 'center', // Centers the content vertically

                alignItems: 'center', // Centers the content horizontally

                borderRadius: '15px',

                margin: '10px', // Margin for spacing without causing overflow
              }}
            >
              <CardContent className="card-content">
                <div key={currentIndex} className="content">
                  <Typography
                    variant="h6"
                    style={{ fontWeight: 'bold', marginBottom: '10px' }}
                  >
                    {testimonial.title}
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    gutterBottom
                  >
                    {testimonial.location.toUpperCase()}
                  </Typography>

                  <Typography
                    sx={{
                      mt: 3,

                      cursor: 'pointer',

                      fontSize: '16px',

                      color: '#6F7E8C',

                      fontStyle: 'italic',
                    }}
                  >
                    {testimonial.content}
                  </Typography>
                </div>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
      <FooterComp />
    </>
  );
};
export default Testimonials;

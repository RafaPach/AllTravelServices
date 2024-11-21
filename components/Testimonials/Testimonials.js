import React, { useState, useEffect, useRef } from 'react';
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
import Image from 'next/image';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';

const testimonials = [
  {
    title: 'Ashley Thompson',
    location: '',
    content: `This company is the only company which is able to effectively provide transport for my daughter. A lot have tried, but failed as she has very complex needs, and I know she can be very difficult to handle. Honestly she couldn’t be happier with this service and I appreciate everything you guys at ATS do! ❤️❤️`,
  },
  {
    title: 'Richard Davies',
    location: '',
    content: `Got picked up in a brand new Mercedes AMG GLC, safe to say I arrived to my business meeting in style. The driver was dressed smart, opened the door for me and made me feel like a king. The executive option was pricey but completely worth it, definitely will be coming back.`,
  },
  {
    title: 'Jackie Clarke',
    location: '',
    content: `The staff in your company are very talented, I was shocked when I found out that the driver was able to use sign language with my disabled son to communicate with him. Please let them know I am so grateful that they go out of their way to make my son feel at ease.`,
  },
  {
    title: 'Grace Bennett',
    location: '',
    content: `In the past I have used a lot of taxi services all over Suffolk, but by far this is the best one I have used. Drivers are always on time even during rush hour. The drivers are very experienced and polite, this company is exceptional.`,
  },
  {
    title: 'Tom Harrison',
    location: '',
    content: `I’ve never experienced such excellent customer service before. The driver was extremely friendly, professional, and knew the best routes to avoid traffic. It’s rare to find a company that truly cares about its customers, but this one certainly does. I highly recommend them to anyone looking for a reliable and top-quality transport service!`,
  },
  {
    title: 'Emma Mitchell',
    location: '',
    content: ` was truly impressed with the service I received from this company. The driver not only arrived ahead of time but also ensured I had everything I needed for my trip. I’ve never felt more comfortable and taken care of during a ride. The level of professionalism and care is unmatched, and I’ll definitely be using this service again!`,
  },
];

const Testimonials = () => {
  const itemsPerPage = 2;
  const [currentIndex, setCurrentIndex] = useState(0);

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

      // Trigger visibility only if scrolling down
      if (scrollDirection === 'down' && entry.isIntersecting) {
        setIsVisible(true);
      }
    });

    if (myRef.current) {
      observer.observe(myRef.current);
    }

    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + itemsPerPage) % testimonials.length
      );
    }, 5000); // Change every 5 seconds

    return () => {
      // Cleanup both the observer and the interval
      if (myRef.current) {
        observer.disconnect();
      }
      clearInterval(interval);
    };
  }, [scrollDirection, prevY]); // Dependencies for the new states

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
          marginTop: '0px',
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
        ref={myRef}
        className={`${isVisible}view`}
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
              key={index} // Key for list rendering
              sx={{
                width: { xs: '100%', sm: '45%', md: '40%' },
                height: '350px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start', // Content starts at the top
                alignItems: 'center',
                borderRadius: '15px',
                margin: '10px',
                textAlign: 'center', // Centers text inside the card
                paddingTop: '50px', // Add space for the image overlap
                position: 'relative', // Enable absolute positioning for the image
                overflow: 'visible', // Allow content to overflow outside the card
              }}
            >
              {/* Circular Icon Container */}
              <div
                style={{
                  position: 'absolute',
                  top: '-40px', // Push the icon up (adjust as needed)
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%', // Makes it circular
                  overflow: 'hidden',
                  border: '3px solid white', // Adds a border around the icon
                  background: 'white', // Light background for contrast
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <LocalTaxiIcon
                  sx={{
                    fontSize: '40px', // Adjust icon size
                    color: '#ff6f61', // Customize the color as needed
                  }}
                />
              </div>

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
                      p: 4,
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

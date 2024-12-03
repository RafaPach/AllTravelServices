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
    title: 'Ashley',
    location: '',
    content: `This company is the only company which is able to effectively provide transport for my daughter. Many have tried, but failed as she has very complex needs, and I know she can be very difficult to handle. Honestly she couldn’t be happier with this service and I appreciate everything you guys at ATS do. ❤️❤️`,
  },
  {
    title: 'Richard ',
    location: '',
    content: `Picked up in a pristine Mercedes AMG GLC, I arrived at my business meeting feeling confident and sophisticated. The driver was dressed smart, opened the door for me and made me feel like a king. The executive option was pricey but completely worth it, definitely will be coming back.`,
  },
  {
    title: 'Jackie',
    location: '',
    content: `The staff in your company are very talented, I was shocked when I found out that the driver was able to use sign language with my disabled son to communicate with him. Please let them know I am so grateful that they go out of their way to make my son feel at ease.`,
  },
  {
    title: 'Grace',
    location: '',
    content: `In the past I have used a lot of taxi services all over Suffolk, but by far this is the best one I have used. Drivers are always on time even during rush hour. The drivers are very experienced and polite, this company is exceptional.`,
  },
  {
    title: 'Tyrone',
    location: '',
    content: `The customer service was outstanding! The driver was friendly, professional, and knew the best routes to avoid traffic. It's rare to find a company so dedicated to its customers. Highly recommended for reliable, top-quality transport.`,
  },
  {
    title: 'Emma',
    location: '',
    content: `Truly impressed by the exceptional service! The driver arrived early, ensuring a comfortable trip. Their professionalism and attention to detail were evident throughout. I felt well cared for during the ride and will definitely book with them again.`,
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
    }, 4000); // Change every 3 seconds

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
      <Box
        sx={{
          textAlign: 'center',
          marginTop: 0,
          backgroundColor: '#f9f9f9',
          height: 'auto', // Automatically adjusts height based on content
          minHeight: { xs: 'auto', sm: 'auto', md: '55vh', lg: '90vh' }, // Dynamic minHeight based on screen size
          width: '100%', // Take full width of parent container
          maxWidth: '100%', // Ensure no overflow beyond container width
          display: 'flex',
          flexDirection: 'column', // Stack content vertically
          alignItems: 'center', // Center content horizontally
          overflowX: 'hidden', // Prevent any horizontal overflow
          padding: '10px 0',
          flexGrow: 1, // Allow container to grow and take available space
        }}
        ref={myRef}
        className={`${isVisible}view`}
      >
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
          <Typography
            sx={{ fontSize: { xs: '20px', sm: '32px' } }}
            gutterBottom
          >
            TESTIMONIALS
          </Typography>
        </Box>

        {/* Testimonial Cards Container */}

        <Box
          sx={{
            display: 'flex',

            justifyContent: 'center', // Center cards horizontally

            alignItems: 'center',

            gap: { xs: 8, sm: 15, md: 5 },

            flexWrap: 'wrap', // Allow wrapping on smaller screens

            width: '100%', // Full width of the container

            maxWidth: '100%', // Limit maximum width for better appearance

            padding: '0 20px', // Padding to ensure content doesn't hit edges

            boxSizing: 'border-box', // Include padding in width calculations

            flexGrow: 0,
            marginBottom: { xs: 5, sm: 7, md: 0, lg: 0 },
          }}
        >
          {displayedTestimonials.map((testimonial, index) => (
            <Card
              key={index} // Key for list rendering
              sx={{
                width: { xs: '85%', sm: '45%', md: '40%' },
                height: '350px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start', // Content starts at the top
                alignItems: 'center',
                borderRadius: '15px',
                margin: '10px',
                textAlign: 'center', // Centers text inside the card
                paddingTop: { lg: '50px', md: '30px', sm: '20px', xs: '30px' }, // Add space for the image overlap
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
                    sx={{
                      fontWeight: 'bold',
                      marginBottom: '10px',
                      fontSize: { xs: '16px', sm: '18px', md: '20px' }, // Responsive font size
                      wordBreak: 'break-word', // Break words to prevent overflow
                      textAlign: 'center', // Center the text
                      p: 0,
                    }}
                  >
                    {testimonial.title}
                  </Typography>
                  <Typography
                    sx={{
                      mt: { xs: -1, sm: 0, md: 0, lg: 3, xl: 3 },
                      p: { xs: 3.5, sm: 4 },
                      cursor: 'pointer',
                      fontSize: { xs: '14px', sm: '15px', md: '15.5px' }, // Responsive font size for content
                      color: '#6F7E8C',
                      fontStyle: 'italic',
                      textAlign: 'center', // Center content text
                      lineHeight: 1.5, // Adjust line-height for readability
                      wordBreak: 'break-word', // Ensures the text does not overflow
                      overflow: 'hidden', // Hides overflow content
                      textOverflow: 'ellipsis', // Adds ellipsis when content overflows
                    }}
                  >
                    {testimonial.content}
                  </Typography>
                </div>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
      <FooterComp />
    </>
  );
};
export default Testimonials;

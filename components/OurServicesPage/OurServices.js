import React, { useRef, useState, useEffect } from 'react';

import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Stack,
  CardMedia,
  Grid,
  Paper,
  Container,
} from '@mui/material';
// import Grid from '@mui/material/Grid2';
import ServCards from './Cards';

import RealPrivate from '../../Assests/RealPrivate.jpg';
import RealAssisted from '../../Assests/RealAssisted.jpeg';
import RealExecute from '../../Assests/RealExecute.jpeg';
import RealSchool from '../../Assests/RealSchool.jpeg';

import GroupIcon from '@mui/icons-material/Group';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PaymentIcon from '@mui/icons-material/Payment';
import AccessibleIcon from '@mui/icons-material/Accessible';
import LuggageIcon from '@mui/icons-material/Luggage';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import FeatureComp from './Features';

function InfoCards() {
  const serviceRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null); // "up" or "down"
  const [prevY, setPrevY] = useState(0); // Tracks the previous position of the section

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
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
      },
      { threshold: 0.3 } // Existing threshold for intersection
    );

    if (serviceRef.current) {
      observer.observe(serviceRef.current);
    }

    return () => {
      if (serviceRef.current) {
        observer.disconnect();
      }
    };
  }, [scrollDirection, prevY]); // Add new dependencies

  return (
    <Box className="background-box" id="services">
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        {/* <Typography variant="h4" component="h2" gutterBottom>
          Our Services
        </Typography> */}
      </Box>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
          sx={{
            marginLeft: { xs: '0', lg: '-80px' },
          }}
        >
          {/* Cards Section */}
          <Grid
            item
            xs={12}
            md={8}
            sx={{ marginBottom: '30px' }}
            className={`cardEffect ${isVisible ? 'fadeInRight' : ''}`}
          >
            <Grid container spacing={6}>
              {' '}
              {/* Increased spacing between cards */}
              <Grid
                item
                xs={12}
                sm={6}
                ref={serviceRef}
                // className={`cardEffect ${isVisible ? 'fadeInRight' : ''}`}
              >
                <ServCards
                  pic={RealExecute}
                  title={'Executive Travel for VIP clients'}
                  description={
                    'Delivering premium, discreet chauffeur services for VIP clients, ensuring comfort, professionalism, and a luxury experience tailored to your specific needs.'
                  }
                  backContent={[
                    { icon: GroupIcon, description: '4-8 Seater Vehicles ' },
                    {
                      icon: DirectionsCarIcon,
                      description: 'Luxury Sedans, SUVs and Minibuses ',
                    },
                    {
                      icon: PaymentIcon,
                      description:
                        'Prepayment Required (invoice sent to email) ',
                    },
                    {
                      icon: AccessTimeIcon,
                      description: 'Punctual and Professional Chauffeur  ',
                    },
                    {
                      icon: EmojiPeopleIcon,
                      description: 'Meet And Greet Provided ',
                    },
                    {
                      icon: WorkspacePremiumIcon,
                      description:
                        'DBS Cleared Driver With Extensive Experience ',
                    },
                  ]}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                ref={serviceRef}
                // className={`cardEffect ${isVisible ? 'fadeInLeft' : ''}`}
              >
                <ServCards
                  pic={RealPrivate}
                  title={'Private Contracts'}
                  description={
                    'Reliable transport solutions for private clients, including long-term partnerships with schools, businesses, and healthcare for scheduled travel.'
                  }
                  backContent={[
                    { icon: GroupIcon, description: '4-8 Seater Vehicles ' },
                    {
                      icon: DirectionsCarIcon,
                      description: (
                        <>
                          Sedans, SUVs and Minibuses -{' '}
                          <strong>Multiple Vehicles if required</strong>
                        </>
                      ),
                    },
                    {
                      icon: PaymentIcon,
                      description: 'Monthly Prepayment (Invoice Sent To Email)',
                    },
                    {
                      icon: AccessTimeIcon,
                      description: 'Punctual And Reliable Staff',
                    },
                    {
                      icon: EmojiPeopleIcon,
                      description: 'Meet And Greet Provided ',
                    },
                    {
                      icon: WorkspacePremiumIcon,
                      description: 'DBS Cleared Staff',
                    },
                  ]}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                ref={serviceRef}
                // className={`cardEffect ${isVisible ? 'fadeInRight' : ''}`}
              >
                <ServCards
                  pic={RealAssisted}
                  title={'Assisted Travel'}
                  description={
                    'Safe, comfortable transport for disabled passengers, with trained drivers offering personalized assistance and support throughout the journey.'
                  }
                  backContent={[
                    {
                      icon: GroupIcon,
                      description:
                        '4-8 Seater Vehicles (Can Fit 1-2 wheelchairs which extra seats for additional passengers)',
                    },
                    {
                      icon: DirectionsCarIcon,
                      description:
                        'Vehicles Fitted With Automatic Electric Tailgate Lifts',
                    },
                    {
                      icon: EmojiPeopleIcon,
                      description: 'Meet And Greet Provided ',
                    },
                    {
                      icon: AccessTimeIcon,
                      description: 'Punctual And Reliable Staff',
                    },
                    {
                      icon: WorkspacePremiumIcon,
                      description: 'DBS Cleared Driver',
                    },
                  ]}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                ref={serviceRef}
                // className={`cardEffect ${isVisible ? 'fadeInLeft' : ''}`}
              >
                <ServCards
                  pic={RealSchool}
                  title={'School Transport'}
                  description={
                    'Providing safe, punctual, and convenient transportation for students, with a strong focus on reliability, care, and flexibility for schools and families.'
                  }
                  backContent={[
                    {
                      icon: GroupIcon,
                      description: 'Sedans, SUVs and Minibuses',
                    },
                    {
                      icon: PaymentIcon,
                      description:
                        'Monthly Prepayment (invoice sent to email) ',
                    },
                    {
                      icon: EmojiPeopleIcon,
                      description: 'Meet And Greet Provided ',
                    },
                    {
                      icon: AccessibleIcon,
                      description: 'Passenger Assistant Can Be Provided ',
                    },
                    {
                      icon: WorkspacePremiumIcon,
                      description: 'DBS Cleared Staff',
                    },
                  ]}
                />
              </Grid>
            </Grid>
          </Grid>

          {/* Feature Box Section */}
          <Grid
            item
            xs={12}
            md={4}
            ref={serviceRef}
            className={`cardEffect ${isVisible ? 'fadeInLeft' : ''}`}
            sx={{
              order: { xs: 2, md: 1 }, // Moves to the end on small screens
            }}
          >
            <Box
              className="advantages-card"
              sx={{
                backgroundColor: '#f9f9f9',
                border: '1px solid rgba(252, 176, 23, 0.9)',
                borderRadius: '8px',
                padding: '20px',
                height: '97%',
                width: { xs: '100%', md: '400px' }, // Full width on small screens
                marginLeft: { md: '100px', xs: 0 },
              }}
            >
              <FeatureComp />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default InfoCards;

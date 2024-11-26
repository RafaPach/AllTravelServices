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
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import FeatureComp from './Features';

import { useTheme, useMediaQuery } from '@mui/material';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

function InfoCards() {
  const serviceRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null); // "up" or "down"
  const [prevY, setPrevY] = useState(0); // Tracks the previous position of the section

  const theme = useTheme(); // Use the theme
  const isMediumUp = useMediaQuery(theme.breakpoints.up('md'));

  const isMediumDown = useMediaQuery(theme.breakpoints.down('md'));

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

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;

    return (
      <div
        onClick={onClick}
        style={{
          position: 'absolute',
          left: '0px',
          top: '50%',
          transform: 'translateY(-50%)',
        }}
        className={`arrow ${className}`}
      >
        <ArrowBackIcon class="arrows" />
      </div>
    );
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;

    return (
      <div onClick={onClick} className={`arrow ${className}`}>
        <ArrowForwardIcon class="arrows" />
      </div>
    );
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    swipe: true,
    className: 'slides',
    nextArrow: <SampleNextArrow to="next" />,
    prevArrow: <SamplePrevArrow to="prev" />,
  };

  return (
    <Box className={isMediumUp ? 'background-box' : ''} id="services">
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mt: 3, mb: 6 }}>
          {isMediumDown && (
            <>
              <Typography
                sx={{ fontSize: { xs: '22px', sm: '32px' } }}
                gutterBottom
              >
                Our Services
              </Typography>
              <Typography
                sx={{ fontSize: { xs: '15px', sm: '18px' } }}
                color="textSecondary"
                gutterBottom
              >
                Explore our range of premium services below. <br /> Scroll down
                to discover the perfect solution tailored to your needs.
              </Typography>
            </>
          )}
        </Box>

        <Grid
          container
          spacing={3}
          sx={{
            marginLeft: { xs: '-30px', lg: '-80px' },
          }}
        >
          {/* Cards Section */}

          <Grid
            item
            xs={12}
            md={10}
            lg={8}
            sx={{
              marginBottom: '30px',

              marginLeft: { xs: 0, md: 10, lg: 0 },

              marginTop: { xs: 0, md: 5, lg: 0 },
            }}
            className={
              isMediumDown ? '' : `cardEffect ${isVisible ? 'fadeInRight' : ''}`
            }
          >
            {isMediumDown ? (
              // Use Slider for smaller devices
              <Slider {...sliderSettings}>
                <div>
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
                </div>
                <div>
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
                        description:
                          'Monthly Prepayment (Invoice Sent To Email)',
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
                </div>
                <div>
                  <ServCards
                    pic={RealAssisted}
                    title={'Assisted Travel'}
                    description={
                      'Safe, comfortable transport for disabled passengers, with trained drivers offering personalized assistance and support throughout the journey.'
                    }
                    backContent={[
                      {
                        icon: GroupIcon,
                        description: (
                          <>
                            4-8 Seater Vehicles -{' '}
                            <strong>
                              {' '}
                              Can Fit up to 2 wheelchairs which extra seats for
                              additional passengers{' '}
                            </strong>
                          </>
                        ),
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
                </div>
                <div>
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
                </div>
              </Slider>
            ) : (
              <Grid container spacing={6}>
                {' '}
                {/* Increased spacing between cards */}
                <Grid
                  item
                  xs={12}
                  sm={6}
                  // ref={serviceRef}
                  // className={
                  //   isMediumUp
                  //     ? ''
                  //     : `cardEffect ${isVisible ? 'fadeInRight' : ''}`
                  // }
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
                  // ref={serviceRef}
                  // className={
                  //   isMediumUp
                  //     ? ''
                  //     : `cardEffect ${isVisible ? 'fadeInRight' : ''}`
                  // }
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
                        description:
                          'Monthly Prepayment (Invoice Sent To Email)',
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
                  // ref={serviceRef}
                  // className={
                  //   isMediumUp
                  //     ? ''
                  //     : `cardEffect ${isVisible ? 'fadeInLeft' : ''}`
                  // }
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
                        description: (
                          <>
                            4-8 Seater Vehicles -{' '}
                            <strong>
                              {' '}
                              Can Fit up to 2 wheelchairs which extra seats for
                              additional passengers{' '}
                            </strong>
                          </>
                        ),
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
                  // ref={serviceRef}
                  // className={
                  //   isMediumUp
                  //     ? ''
                  //     : `cardEffect ${isVisible ? 'fadeInLeft' : ''}`
                  // }
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
            )}
          </Grid>

          {/* Feature Box Section */}
          <Grid
            item
            xs={10}
            md={5}
            lg={4}
            ref={serviceRef}
            className={`cardEffect ${isVisible ? 'fadeInLeft' : ''}`}
            sx={{
              order: { xs: 2, md: 1 }, // Moves to the end on small screens

              display: { xs: 'flex', md: 'block' }, // Flex only on xs devices

              justifyContent: { xs: 'center' },

              ml: { xs: 5, sm: 10, md: 0 },

              mt: { xs: 5, md: 0 },
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
                width: { xs: '95%', md: '75vw', lg: '400px' },
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

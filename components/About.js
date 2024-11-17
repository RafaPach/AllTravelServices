import React from 'react';
import { Box, Typography, Stack, Grid, Link } from '@mui/material';
import AllTravel3D from '../Assests/AllTravel3D.png';
import Smoke from '../Assests/NoSmoke.png';
import DBS from '../Assests/DBS.png';
import Punctual from '../Assests/Punctual.png';
import Image from 'next/image';

const AboutServices = () => {
  return (
    <Box ml={{ lg: '130px', md: '80px', xs: '20px' }} id="services">
      <Stack mt={{ lg: '150px', md: '100px', xs: '50px' }} spacing={2}>
        <Typography
          color="#1E1E1E"
          fontWeight="500"
          fontSize={{ lg: '36px', md: '32px', sm: '28px', xs: '24px' }}
        >
          About us<span className="dotColor">.</span>
        </Typography>
        <Box
          className="aboutline"
          sx={{
            mx: 'auto',
            width: '80%',
            height: '2px',
            backgroundColor: '#1E1E1E',
          }}
        />
      </Stack>
      <Stack direction={{ lg: 'row', md: 'column' }} spacing={4} mt={4}>
        {/* Text Content */}
        <Box
          mt="30px"
          sx={{
            // width: { lg: '971px', md: '360px', sm: '300px', xs: '230px' },
            maxWidth: { lg: '60%', xs: '80%' },
            backgroundColor: '#f9f9f9', // Added a light background color for contrast
            border: '2px solid #fcb017', // Adding a border for better visual appeal
            borderRadius: '8px', // Adding rounded corners
            padding: '20px', // Adding padding for spacing
          }}
        >
          <ol
            style={{
              listStyle: 'none',
              lineHeight: '1.6', // Improved line height for readability
              paddingLeft: '0px',
              margin: '0', // Resetting margin for the list
            }}
          >
            <li style={{ marginBottom: '30px' }}>
              <span style={{ fontWeight: '700' }}>All Travel Services</span> is
              a well-established transport company providing diverse transport
              solutions across East Anglia for many years. We specialize in{' '}
              <span style={{ fontWeight: '700' }}>
                School Transport, Private Contracts, Assisted Travel,{' '}
              </span>
              and <span style={{ fontWeight: '700' }}>VIP Chauffeur</span>{' '}
              services, offering high-end vehicles for special occasions and VIP
              clientele.{' '}
              <a
                href="/services"
                style={{
                  fontWeight: '700',
                  color: '#fcb017',
                  textDecoration: 'none',
                }}
              >
                Learn more about our services here
              </a>
              .
            </li>
            <li style={{ marginBottom: '30px' }}>
              Our team, including{' '}
              <span style={{ fontWeight: '700' }}>
                Drivers, Passenger Assistants,{' '}
              </span>
              and <span style={{ fontWeight: '700' }}>Office Staff</span>, all
              hold up-to-date{' '}
              <span style={{ fontWeight: '700' }}>DBS certifications</span>,
              alongside{' '}
              <span style={{ fontWeight: '700' }}>
                Safeguarding Training Certificates{' '}
              </span>
              and <span style={{ fontWeight: '700' }}>First Aid training</span>,
              ensuring your safety and peace of mind. We prioritize the welfare
              of our passengers by adhering to rigorous safety and quality
              standards, so you are always in capable and trustworthy hands when
              choosing All Travel Services.
            </li>
            <li style={{ marginBottom: '30px' }}>
              Our exceptional service is widely recognized as one of the best in
              <span style={{ fontWeight: '700' }}> Suffolk </span> and the
              surrounding areas. All of our vehicle staff are{' '}
              <span style={{ fontWeight: '700' }}>
                punctual, well-presented,{' '}
              </span>
              and <span style={{ fontWeight: '700' }}>highly professional</span>
              , dedicated to delivering an unmatched travel experience. They
              consistently go above and beyond to uphold the company’s values of
              customer care and satisfaction.
            </li>
            <li>
              If you have any enquiries,{' '}
              <a
                href="/contact"
                style={{
                  fontWeight: '700',
                  color: '#fcb017',
                  textDecoration: 'none',
                }}
              >
                please submit your enquiry here{' '}
              </a>
              to get in touch with us - we look forward to hearing from you!
            </li>
          </ol>
        </Box>

        {/* Image Section */}
        <Grid
          container
          spacing={0}
          sx={{
            width: { lg: '40%', md: '50%', sm: '70%', xs: '100%' },
            maxWidth: '500px',
            height: '470px',
            boxSizing: 'border-box',
            border: '1px groove white',
          }}
        >
          {/* Replace this with actual image imports */}
          {/* Add your images below */}
          {/* Example images array, replace with your actual imports */}
          {[Punctual, DBS, Smoke, AllTravel3D].map((img, index) => (
            <Grid
              item
              xs={6}
              key={index}
              sx={{
                border: '1px groove #1a3c6e',
                boxSizing: 'border-box',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                }}
              >
                <Image
                  src={img}
                  alt={`Service Image ${index}`}
                  layout="fill"
                  // objectFit="cover" // Ensures images cover the grid cell
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Box>
  );
};

export default AboutServices;

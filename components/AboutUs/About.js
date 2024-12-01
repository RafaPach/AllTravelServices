// AboutUs.js
import React from 'react';
import {
  Box,
  Stack,
  Typography,
  Paper,
  useMediaQuery,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { styled } from '@mui/system';
import CenterCard from './CenterCard';
import NavbarForPages from '../Navbar/NavbarForPages';

import Link from 'next/link';

const theme = createTheme();

const AboutUs = () => {
  const Sidebar = styled(Paper)({
    padding: '16px',
    backgroundColor: '#f8f8f8',
    height: '100%',
  });

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <ThemeProvider theme={theme}>
      <div>
        {!isMobile ? (
          <div className="curved-background">
            <NavbarForPages />
          </div>
        ) : (
          <>
            <NavbarForPages />
            <div className="curved-background"></div>
          </>
        )}

        <Box
          sx={{
            display: 'flex',
            justifyContent: { xs: 'center', lg: 'start' },
            m: 1,
          }}
        >
          <Stack
            spacing={2}
            mb="30px"
            mt={{ xl: '50px', lg: '20px', md: '100px', xs: '50px' }}
            mx={{ xl: 26, lg: 22, md: 21, xs: 3 }}
          >
            <Typography
              color="#1E1E1E"
              fontWeight="500"
              fontSize={{ xs: '20px', sm: '26px', md: '28px', lg: '30px' }}
            >
              About Us<span className="dotColor">.</span>
            </Typography>

            <div className="aboutline"></div>
          </Stack>
        </Box>

        {/* Main Content Area */}

        <Box
          sx={{
            maxWidth: { lg: '80%', md: '70%', sm: '80%' }, // Restricts the content width to 80% of the parent container
            margin: '0 auto', // Centers the box horizontally by setting equal left and right margins
            borderRadius: '8px',
            padding: '20px',
            textAlign: 'justify',
          }}
        >
          {isMobile ? (
            <ol
              style={{
                listStyle: 'none',
                lineHeight: '1.6',
                paddingLeft: '0px',
                margin: '0',
              }}
            >
              <li
                style={{
                  marginBottom: '30px',
                  color: '#6F7E8C',
                  fontSize: '13px',
                }}
              >
                <span style={{ fontWeight: '700' }}>All Travel Services</span>{' '}
                is a trusted transport provider across East Anglia, specializing
                in{' '}
                <span style={{ fontWeight: '700' }}>
                  School Transport, Private Contracts, Assisted Travel,
                </span>{' '}
                and <span style={{ fontWeight: '700' }}>VIP Chauffeur</span>{' '}
                services. We offer luxury vehicles for special events.{' '}
                <Link
                  href="/#services"
                  style={{
                    fontWeight: '700',
                    color: '#fcb017',
                    textDecoration: 'none',
                  }}
                >
                  Learn more here
                </Link>
                .
              </li>
              <li
                style={{
                  marginBottom: '30px',
                  color: '#6F7E8C',
                  fontSize: '13px',
                }}
              >
                Our team, including{' '}
                <span style={{ fontWeight: '700' }}>
                  Drivers, Passenger Assistants,
                </span>{' '}
                and <span style={{ fontWeight: '700' }}>Office Staff</span>, are
                fully certified with{' '}
                <span style={{ fontWeight: '700' }}>
                  DBS checks, Safeguarding
                </span>{' '}
                and{' '}
                <span style={{ fontWeight: '700' }}>First Aid training</span>,
                ensuring safety and care at all times.
              </li>
              <li
                style={{
                  marginBottom: '30px',
                  color: '#6F7E8C',
                  fontSize: '13px',
                }}
              >
                Our service is recognized for being one of the best in{' '}
                <span style={{ fontWeight: '700' }}>Suffolk</span>. Our staff
                are{' '}
                <span style={{ fontWeight: '700' }}>
                  punctual, professional,
                </span>{' '}
                and dedicated to providing top-tier travel experiences.
              </li>
              <li
                style={{
                  marginBottom: '30px',
                  color: '#6F7E8C',
                  fontSize: '13px',
                }}
              >
                Need a personalized solution?{' '}
                <Link
                  href="/getaquote"
                  style={{
                    fontWeight: '700',
                    color: '#fcb017',
                    textDecoration: 'none',
                  }}
                >
                  Request a quote here
                </Link>
                , and we'll provide the details.
              </li>
              <li style={{ color: '#6F7E8C', fontSize: '13px' }}>
                For any enquiries about services, jobs, or more, feel free to{' '}
                <Link
                  href="/enquiries"
                  style={{
                    fontWeight: '700',
                    color: '#fcb017',
                    textDecoration: 'none',
                  }}
                >
                  submit your enquiry here.
                </Link>
              </li>
            </ol>
          ) : (
            <ol
              style={{
                listStyle: 'none',
                lineHeight: '1.6', // Improved line height for readability
                paddingLeft: '0px',
                margin: '0', // Resetting margin for the list
              }}
            >
              <li
                style={{
                  marginBottom: '30px',
                  color: '#6F7E8C',
                  fontSize: '16px',
                }}
              >
                <span style={{ fontWeight: '700' }}>All Travel Services</span>{' '}
                is a well-established transport company providing diverse
                transport solutions across East Anglia for many years. We
                specialize in{' '}
                <span style={{ fontWeight: '700' }}>
                  School Transport, Private Contracts, Assisted Travel,{' '}
                </span>
                and <span style={{ fontWeight: '700' }}>VIP Chauffeur</span>{' '}
                services, offering high-end vehicles for special occasions and
                VIP clientele.{' '}
                <Link
                  href="/#services"
                  style={{
                    fontWeight: '700',
                    color: '#fcb017',
                    textDecoration: 'none',
                  }}
                >
                  Learn more about our services here
                </Link>
                .
              </li>
              <li
                style={{
                  marginBottom: '30px',
                  color: '#6F7E8C',
                  fontSize: '16px',
                }}
              >
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
                and{' '}
                <span style={{ fontWeight: '700' }}>First Aid training</span>,
                ensuring your safety and peace of mind. We prioritize the
                welfare of our passengers by adhering to rigorous safety and
                quality standards, so you are always in capable and trustworthy
                hands when choosing All Travel Services.
              </li>
              <li
                style={{
                  marginBottom: '30px',
                  color: '#6F7E8C',
                  fontSize: '16px',
                }}
              >
                Our exceptional service is widely recognized as one of the best
                in
                <span style={{ fontWeight: '700' }}> Suffolk </span> and the
                surrounding areas. All of our vehicle staff are{' '}
                <span style={{ fontWeight: '700' }}>
                  punctual, well-presented,{' '}
                </span>
                and{' '}
                <span style={{ fontWeight: '700' }}>highly professional</span>,
                dedicated to delivering an unmatched travel experience. They
                consistently go above and beyond to uphold the company’s values
                of customer care and satisfaction.
              </li>
              <li
                style={{
                  marginBottom: '30px',
                  color: '#6F7E8C',
                  fontSize: '16px',
                }}
              >
                Looking for a customized travel solution? We’d be happy to
                provide you with a quote tailored to your needs -{' '}
                <Link
                  href="/getaquote"
                  style={{
                    fontWeight: '700',
                    color: '#fcb017',
                    textDecoration: 'none',
                  }}
                >
                  Click here to request a quote{' '}
                </Link>
                - Our team will get back to you promptly with all the details
                you need.
              </li>
              <li style={{ color: '#6F7E8C', fontSize: '16px' }}>
                Finally, if you have any enquiries, whether about our services,
                job opportunities, or anything else, feel free to{' '}
                <Link
                  href="/enquiries"
                  style={{
                    fontWeight: '700',
                    color: '#fcb017',
                    textDecoration: 'none',
                  }}
                >
                  submit your enquiry here.{' '}
                </Link>
                We look forward to hearing from you!
              </li>
            </ol>
          )}
        </Box>
      </div>
      <CenterCard />
    </ThemeProvider>
  );
};

export default AboutUs;

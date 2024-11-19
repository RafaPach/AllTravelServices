// AboutUs.js
import React from 'react';
import {
  Box,
  Stack,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { styled } from '@mui/system';
import CenterCard from './CenterCard';
import NavbarForPages from '../Navbar/NavbarForPages';

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
        <div className="curved-background">
          <NavbarForPages />
        </div>

        <Stack
          mt={{ lg: '50px', md: '100px', xs: '50px' }}
          mb="30px"
          mx={26}
          spacing={2}
        >
          <Typography
            color="#1E1E1E"
            fontWeight="500"
            fontSize={{ lg: '28px', md: '26px', sm: '24px', xs: '22px' }}
          >
            About Us<span className="dotColor">.</span>
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

        {/* <Grid container spacing={3} padding={3} marginLeft="120px"> */}
        {/* Main Content Area */}

        <Box
          sx={{
            // maxWidth: { lg: '60%', xs: '80%' },
            // backgroundColor: '#f9f9f9',
            // border: '2px solid #fcb017',
            maxWidth: { lg: '80%', md: '70%', sm: '80%' }, // Restricts the content width to 80% of the parent container
            margin: '0 auto', // Centers the box horizontally by setting equal left and right margins
            borderRadius: '8px',
            padding: '20px',
            textAlign: 'justify',
          }}
        >
          {isMobile ? (
            <Box sx={{ pr: { lg: 4, xs: 0 } }}>
              <Typography
                variant="body1"
                lineHeight={1.8}
                sx={{
                  fontSize: {
                    lg: '18px',
                    md: '16px',
                    sm: '15px',
                    xs: '14px',
                  },
                }}
              >
                <b>All Travel Services</b> offers diverse transport solutions
                across East Anglia, including{' '}
                <b>School Transport, Private Contracts, Assisted Travel</b>, and{' '}
                <b>VIP Chauffeur</b> services for special occasions.
              </Typography>
              <Typography
                lineHeight={1.8}
                sx={{ mt: 2, color: '#6F7E8C', fontSize: '16px' }}
              >
                Our team is certified with <b>DBS, Safeguarding</b>, and{' '}
                <b>First Aid</b> training, ensuring safety and peace of mind.
              </Typography>
              <Typography variant="body1" lineHeight={1.8} sx={{ mt: 2 }}>
                <Link href="#contact" color="#fcb017">
                  <b>Contact us</b>
                </Link>{' '}
                to discuss your travel needs—we look forward to assisting you!
              </Typography>
            </Box>
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
              <li style={{ color: '#6F7E8C', fontSize: '16px' }}>
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
          )}
        </Box>
      </div>
      <CenterCard />
    </ThemeProvider>
  );
};

export default AboutUs;

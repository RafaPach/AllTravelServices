import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import AllTravel3D from '../Assests/AllTravel3D.png';
import Smoke from '../Assests/Smoke.png';
import DBS from '../Assests/DBS.png';
import Punctual from '../Assests/Punctual.png';
import Image from 'next/image.js';

const About = () => {
  return (
    <Box ml="130px" id="about">
      <Stack
        mt="150px"
        display="flex"
        justifyContent="start"
        sx={{ backgroundColor: '' }}
      >
        <Stack spacing={2} direction="row">
          <Typography
            color="#1E1E1E"
            fontWeight="500"
            fontSize="36px"
            lineHeight="40px"
            letterSpacing="0em"
            textAlign="center"
          >
            About us <span className="dotColor">.</span>
          </Typography>
        </Stack>
        <div className="aboutline"></div>
      </Stack>
      <Stack direction="row">
        <Box
          mt="50px"
          sx={{ width: { lg: '971px', md: '360px', md: '300px', xs: '230px' } }}
          backgroundColor=""
        >
          <ol
            style={{
              listStyle: 'none',
              lineHeight: '40px',
              paddingLeft: '0px',
            }}
          >
            <li style={{ marginBottom: '30px' }}>
              {' '}
              <span style={{ fontWeight: '700' }}>All Travel Services</span>, is
              a well-established transport company that has been providing
              diverse transport solutions across East Anglia for many years. We
              specialize in{' '}
              <span style={{ fontWeight: '700' }}>
                School Transport, Private Contracts, Assisted Travel,{' '}
              </span>{' '}
              and <span style={{ fontWeight: '700' }}>VIP Chauffeur </span>
              services, offering high-end vehicles for special occasions and VIP
              clientele.{' '}
              <span style={{ fontWeight: '700', color: '#fcb017' }}>
                Learn more about our services here{' '}
              </span>
              .
            </li>
            <li style={{ marginBottom: '30px' }}>
              {' '}
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
              </span>{' '}
              and <span style={{ fontWeight: '700' }}> First Aid training</span>
              , ensuring your safety and peace of mind. We prioritize the
              welfare of our passengers by adhering to rigorous safety and
              quality standards, so you are always in capable and trustworthy
              hands when choosing All Travel Services.{' '}
            </li>
            <li style={{ marginBottom: '30px' }}>
              {' '}
              Our exceptional service is widely recognized as one of the best in
              <span style={{ fontWeight: '700' }}> Suffolk </span> and the
              surrounding areas. All of our vehicle staff are{' '}
              <span style={{ fontWeight: '700' }}>
                punctual, well-presented,{' '}
              </span>{' '}
              and <span style={{ fontWeight: '700' }}>highly professional</span>
              , dedicated to delivering an unmatched travel experience. They
              consistently go above and beyond to uphold the company’s values of
              customer care and satisfaction.
            </li>
            <li>
              If you have any enquiries,{' '}
              <span style={{ fontWeight: '700', color: '#fcb017' }}>
                {' '}
                please submit your enquiry here{' '}
              </span>{' '}
              to get in touch with us - we look forward to hearing from you!
            </li>
          </ol>
        </Box>
        <Box
          href="#welcome"
          display="flex"
          alignItems="center"
          justifyContent="center"
          backgroundColor=""
          sx={{ width: '70%', height: '500px' }}
        >
          <Image
            src={Punctual}
            alt="Logo"
            width={150}
            height={150}
            id="logoIMG"
            className="d3-image"
          />
          <Image
            src={DBS}
            alt="Logo"
            width={250}
            height={250}
            id="logoIMG"
            className="d3-image"
          />
          <Image
            src={Smoke}
            alt="Logo"
            width={250}
            height={250}
            id="logoIMG"
            className="d3-image"
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default About;

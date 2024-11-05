// import React from 'react';
// import {
//   Box,
//   Typography,
//   Stack,
//   Grid,
//   Link,
//   ThemeProvider,
//   createTheme,
//   useMediaQuery,
// } from '@mui/material';
// import Image from 'next/image';
// import AllTravel3D from '../Assests/AllTravel3D.png';
// import Smoke from '../Assests/Smoke.png';
// import DBS from '../Assests/DBS.png';
// import Punctual from '../Assests/Punctual.png';

// const theme = createTheme();

// const AboutServices = () => {
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));

//   return (
//     <ThemeProvider theme={theme}>
//       <Box ml={{ lg: '130px', md: '80px', xs: '20px' }} id="services">
//         <Stack mt={{ lg: '150px', md: '100px', xs: '50px' }} spacing={2}>
//           <Typography
//             color="#1E1E1E"
//             fontWeight="500"
//             fontSize={{ lg: '36px', md: '32px', sm: '28px', xs: '24px' }}
//           >
//             About us<span className="dotColor">.</span>
//           </Typography>
//           <Box
//             className="aboutline"
//             sx={{
//               mx: 'auto',
//               width: '80%',
//               height: '2px',
//               backgroundColor: '#1E1E1E',
//             }}
//           />
//         </Stack>

//         <Stack direction={{ lg: 'row', md: 'column' }} spacing={4} mt={4}>
//           {/* Text Content */}
//           <Box
//             mt="30px"
//             sx={{
//               maxWidth: { lg: '60%', xs: '80%' },
//               backgroundColor: '#f9f9f9',
//               border: '2px solid #fcb017',
//               borderRadius: '8px',
//               padding: '20px',
//             }}
//           >
//             {isMobile ? (
//               <Box sx={{ pr: { lg: 4, xs: 0 } }}>
//                 {/* Condensed text for mobile view */}
//                 <Typography
//                   variant="body1"
//                   lineHeight={1.8}
//                   sx={{
//                     fontSize: {
//                       lg: '18px',
//                       md: '16px',
//                       sm: '15px',
//                       xs: '14px',
//                     },
//                   }}
//                 >
//                   <b>All Travel Services</b> offers diverse transport solutions
//                   across East Anglia, including{' '}
//                   <b>School Transport, Private Contracts, Assisted Travel</b>,
//                   and <b>VIP Chauffeur</b> services for special occasions.
//                 </Typography>
//                 <Typography variant="body1" lineHeight={1.8} sx={{ mt: 2 }}>
//                   Our team is certified with <b>DBS, Safeguarding</b>, and{' '}
//                   <b>First Aid</b> training, ensuring safety and peace of mind.
//                 </Typography>
//                 <Typography variant="body1" lineHeight={1.8} sx={{ mt: 2 }}>
//                   <Link href="#contact" color="#fcb017">
//                     <b>Contact us</b>
//                   </Link>{' '}
//                   to discuss your travel needs—we look forward to assisting you!
//                 </Typography>
//               </Box>
// ) : (
//   <ol
//     style={{
//       listStyle: 'none',
//       lineHeight: '1.6', // Improved line height for readability
//       paddingLeft: '0px',
//       margin: '0', // Resetting margin for the list
//     }}
//   >
//     <li style={{ marginBottom: '30px' }}>
//       <span style={{ fontWeight: '700' }}>All Travel Services</span>{' '}
//       is a well-established transport company providing diverse
//       transport solutions across East Anglia for many years. We
//       specialize in{' '}
//       <span style={{ fontWeight: '700' }}>
//         School Transport, Private Contracts, Assisted Travel,{' '}
//       </span>
//       and <span style={{ fontWeight: '700' }}>VIP Chauffeur</span>{' '}
//       services, offering high-end vehicles for special occasions and
//       VIP clientele.{' '}
//       <a
//         href="/services"
//         style={{
//           fontWeight: '700',
//           color: '#fcb017',
//           textDecoration: 'none',
//         }}
//       >
//         Learn more about our services here
//       </a>
//       .
//     </li>
//     <li style={{ marginBottom: '30px' }}>
//       Our team, including{' '}
//       <span style={{ fontWeight: '700' }}>
//         Drivers, Passenger Assistants,{' '}
//       </span>
//       and <span style={{ fontWeight: '700' }}>Office Staff</span>,
//       all hold up-to-date{' '}
//       <span style={{ fontWeight: '700' }}>DBS certifications</span>,
//       alongside{' '}
//       <span style={{ fontWeight: '700' }}>
//         Safeguarding Training Certificates{' '}
//       </span>
//       and{' '}
//       <span style={{ fontWeight: '700' }}>First Aid training</span>,
//       ensuring your safety and peace of mind. We prioritize the
//       welfare of our passengers by adhering to rigorous safety and
//       quality standards, so you are always in capable and
//       trustworthy hands when choosing All Travel Services.
//     </li>
//     <li style={{ marginBottom: '30px' }}>
//       Our exceptional service is widely recognized as one of the
//       best in
//       <span style={{ fontWeight: '700' }}> Suffolk </span> and the
//       surrounding areas. All of our vehicle staff are{' '}
//       <span style={{ fontWeight: '700' }}>
//         punctual, well-presented,{' '}
//       </span>
//       and{' '}
//       <span style={{ fontWeight: '700' }}>highly professional</span>
//       , dedicated to delivering an unmatched travel experience. They
//       consistently go above and beyond to uphold the company’s
//       values of customer care and satisfaction.
//     </li>
//     <li>
//       If you have any enquiries,{' '}
//       <a
//         href="/contact"
//         style={{
//           fontWeight: '700',
//           color: '#fcb017',
//           textDecoration: 'none',
//         }}
//       >
//         please submit your enquiry here
//       </a>
//       to get in touch with us - we look forward to hearing from you!
//     </li>
//   </ol>
// )}
//           </Box>

//           {/* Image Section */}
//           <Grid
//             container
//             spacing={0}
//             sx={{
//               width: { lg: '40%', md: '50%', sm: '70%', xs: '100%' },
//               maxWidth: '500px',
//               height: '470px',
//               border: '1px groove white',
//             }}
//           >
//             {[Punctual, DBS, Smoke, AllTravel3D].map((img, index) => (
//               <Grid
//                 item
//                 xs={6}
//                 key={index}
//                 sx={{ border: '1px groove #1a3c6e' }}
//               >
//                 <Box
//                   sx={{ width: '100%', height: '100%', position: 'relative' }}
//                 >
//                   <Image
//                     src={img}
//                     alt={`Service Image ${index}`}
//                     layout="fill"
//                   />
//                 </Box>
//               </Grid>
//             ))}
//           </Grid>
//         </Stack>
//       </Box>
//     </ThemeProvider>
//   );
// };

// export default AboutServices;

import React from 'react';
import {
  Box,
  Typography,
  Stack,
  Grid,
  Link,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from '@mui/material';
import Image from 'next/image';
import AllTravel3D from '../Assests/AllTravel3D.png';
import Smoke from '../Assests/Smoke.png';
import DBS from '../Assests/DBS.png';
import Punctual from '../Assests/Punctual.png';

const theme = createTheme();

const AboutServices = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <ThemeProvider theme={theme}>
      <Box
        id="services"
        sx={{
          minHeight: '100vh', // Makes the component take the full height of the viewport
          width: '100%', // Ensures full width
          display: 'flex',
          alignItems: 'center', // Centers content vertically
          justifyContent: 'center', // Centers content horizontally
          padding: { lg: '0 130px', md: '0 80px', xs: '0 20px' }, // Adjust padding for different screen sizes
        }}
      >
        <Stack spacing={4} sx={{ width: '100%' }}>
          <Stack spacing={2}>
            <Typography
              color="#1E1E1E"
              fontWeight="500"
              fontSize={{ xs: '24px', sm: '30px' }}
            >
              About Us <span className="dotColor">.</span>
            </Typography>
            <div className="aboutline"></div>
          </Stack>

          <Stack direction={{ lg: 'row', md: 'column' }} spacing={4}>
            {/* Text Content */}
            <Box
              sx={{
                maxWidth: { lg: '60%', xs: '80%' },
                backgroundColor: '#f9f9f9',
                border: '2px solid #fcb017',
                borderRadius: '8px',
                padding: '20px',
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
                    <b>All Travel Services</b> offers diverse transport
                    solutions across East Anglia, including{' '}
                    <b>School Transport, Private Contracts, Assisted Travel</b>,
                    and <b>VIP Chauffeur</b> services for special occasions.
                  </Typography>
                  <Typography variant="body1" lineHeight={1.8} sx={{ mt: 2 }}>
                    Our team is certified with <b>DBS, Safeguarding</b>, and{' '}
                    <b>First Aid</b> training, ensuring safety and peace of
                    mind.
                  </Typography>
                  <Typography variant="body1" lineHeight={1.8} sx={{ mt: 2 }}>
                    <Link href="#contact" color="#fcb017">
                      <b>Contact us</b>
                    </Link>{' '}
                    to discuss your travel needs—we look forward to assisting
                    you!
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
                  <li style={{ marginBottom: '30px' }}>
                    <span style={{ fontWeight: '700' }}>
                      All Travel Services
                    </span>{' '}
                    is a well-established transport company providing diverse
                    transport solutions across East Anglia for many years. We
                    specialize in{' '}
                    <span style={{ fontWeight: '700' }}>
                      School Transport, Private Contracts, Assisted Travel,{' '}
                    </span>
                    and <span style={{ fontWeight: '700' }}>VIP Chauffeur</span>{' '}
                    services, offering high-end vehicles for special occasions
                    and VIP clientele.{' '}
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
                    and <span style={{ fontWeight: '700' }}>Office Staff</span>,
                    all hold up-to-date{' '}
                    <span style={{ fontWeight: '700' }}>
                      DBS certifications
                    </span>
                    , alongside{' '}
                    <span style={{ fontWeight: '700' }}>
                      Safeguarding Training Certificates{' '}
                    </span>
                    and{' '}
                    <span style={{ fontWeight: '700' }}>
                      First Aid training
                    </span>
                    , ensuring your safety and peace of mind. We prioritize the
                    welfare of our passengers by adhering to rigorous safety and
                    quality standards, so you are always in capable and
                    trustworthy hands when choosing All Travel Services.
                  </li>
                  <li style={{ marginBottom: '30px' }}>
                    Our exceptional service is widely recognized as one of the
                    best in
                    <span style={{ fontWeight: '700' }}> Suffolk </span> and the
                    surrounding areas. All of our vehicle staff are{' '}
                    <span style={{ fontWeight: '700' }}>
                      punctual, well-presented,{' '}
                    </span>
                    and{' '}
                    <span style={{ fontWeight: '700' }}>
                      highly professional
                    </span>
                    , dedicated to delivering an unmatched travel experience.
                    They consistently go above and beyond to uphold the
                    company’s values of customer care and satisfaction.
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
                      please submit your enquiry here
                    </a>
                    to get in touch with us - we look forward to hearing from
                    you!
                  </li>
                </ol>
              )}
            </Box>

            {/* Image Section */}
            <Grid
              container
              spacing={0}
              sx={{
                width: { lg: '40%', md: '50%', sm: '70%', xs: '100%' },
                maxWidth: '500px',
                height: '470px',
                border: '1px groove white',
              }}
            >
              {[Punctual, DBS, Smoke, AllTravel3D].map((img, index) => (
                <Grid
                  item
                  xs={6}
                  key={index}
                  sx={{ border: '1px groove #1a3c6e' }}
                >
                  <Box
                    sx={{ width: '100%', height: '100%', position: 'relative' }}
                  >
                    <Image
                      src={img}
                      alt={`Service Image ${index}`}
                      layout="fill"
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default AboutServices;

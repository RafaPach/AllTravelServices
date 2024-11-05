// import React from 'react';
// import { Container, Typography, Grid, Box, Stack } from '@mui/material';
// import { styled } from '@mui/system';
// import Image from 'next/image';
// import ServicesCard from './ServiceCard';
// import CarImg from '../Assests/CarImg.jpg';

// const ServiceHeader = styled(Typography)(({ theme }) => ({
//   fontSize: '24px',
//   fontWeight: 'bold',
//   textTransform: 'uppercase',
//   display: 'flex',
//   alignItems: 'center',
//   marginBottom: '16px',
// }));

// const ServiceTitle = styled(Typography)(({ theme }) => ({
//   fontSize: '20px',
//   fontWeight: 'bold',
//   color: '#1A3C6E',
//   marginBottom: '10px',
//   padding: '2px',
//   marginTop: '15px',
// }));

// const ServiceDescription = styled(Typography)(({ theme }) => ({
//   marginBottom: '30px',
//   lineHeight: '1.8',
//   fontSize: '14px', // default for xs
//   [theme.breakpoints.up('sm')]: {
//     fontSize: '15px',
//   },
//   [theme.breakpoints.up('md')]: {
//     fontSize: '16px',
//   },
//   [theme.breakpoints.up('lg')]: {
//     fontSize: '18px',
//   },
// }));

// const Services = () => {
//   return (
//     <Box ml={{ lg: '130px', md: '80px', xs: '20px' }} mb="30px">
//       {/* Header */}
//       <Stack
//         mt={{ lg: '150px', md: '100px', xs: '50px' }}
//         mb="30px"
//         spacing={2}
//       >
//         <Typography
//           color="#1E1E1E"
//           fontWeight="500"
//           fontSize={{ lg: '36px', md: '32px', sm: '28px', xs: '24px' }}
//         >
//           Services<span className="dotColor">.</span>
//         </Typography>
//         <Box
//           className="aboutline"
//           sx={{
//             mx: 'auto',
//             width: '80%',
//             height: '2px',
//             backgroundColor: '#1E1E1E',
//           }}
//         />
//       </Stack>
//       {/* Services Description */}
//       <Stack direction={{ lg: 'row', md: 'column' }} spacing={3}>
//         <Box
//           mt="30px"
//           sx={{
//             maxWidth: { lg: '60%', xs: '80%' },
//             backgroundColor: '#f9f9f9',
//             border: '2px solid #fcb017',
//             borderRadius: '8px',
//             paddingTop: '10px',
//             paddingLeft: '20px',
//             paddingRight: '20px',
//           }}
//         >
//           <Typography
//             variant="h6"
//             fontWeight="bold"
//             color="#1A3C6E"
//             marginBottom="10px"
//             marginTop="15px"
//             className="drop-shadow-service"
//           >
//             Executive Chauffeur service for VIP clients
//           </Typography>
//           <Typography variant="body1" marginBottom="30px" lineHeight="1.8">
//             Delivering premium, discreet chauffeur services for VIP clients,
//             ensuring comfort, professionalism, and a luxury experience tailored
//             to your specific needs.
//           </Typography>

//           <Typography
//             variant="h6"
//             fontWeight="bold"
//             color="#1A3C6E"
//             marginBottom="10px"
//             marginTop="15px"
//             className="drop-shadow-service"
//           >
//             Assisted Travel
//           </Typography>
//           <Typography variant="body1" marginBottom="30px" lineHeight="1.8">
//             Providing safe, comfortable transport solutions for disabled
//             passengers, with professional drivers trained to offer personalized
//             assistance and support throughout the journey.
//           </Typography>

//           <Typography
//             variant="h6"
//             fontWeight="bold"
//             color="#1A3C6E"
//             marginBottom="10px"
//             marginTop="15px"
//             className="drop-shadow-service"
//           >
//             Private Contracts
//           </Typography>
//           <Typography variant="body1" marginBottom="30px" lineHeight="1.8">
//             Offering reliable transport solutions tailored to private clients,
//             including long-term partnerships with schools, businesses, and
//             healthcare organizations for scheduled, dependable travel.
//           </Typography>

//           <Typography
//             variant="h6"
//             fontWeight="bold"
//             color="#1A3C6E"
//             marginBottom="10px"
//             marginTop="15px"
//             className="drop-shadow-service"
//           >
//             School Transport
//           </Typography>
//           <Typography variant="body1" marginBottom="10px" lineHeight="1.8">
//             Ensuring safe, punctual, and convenient transportation for students,
//             with a focus on reliability and care, tailored to meet the needs of
//             schools and families.
//           </Typography>
//         </Box>

//         {/* Image Grid */}
//         <Box
//           sx={{
//             width: { lg: '40%', md: '100%', sm: '70%', xs: '100%' },
//             display: 'flex', // Enable flex display
//             flexDirection: 'column', // Allow items to stack if necessary
//             flexGrow: 1,
//           }}
//         >
//           <Grid
//             container
//             rowSpacing={1} // No spacing between rows
//             columnSpacing={1} // Also set column spacing to 0
//             sx={{
//               width: '100%',
//               maxWidth: '600px',
//             }}
//           >
//             {[CarImg, CarImg, CarImg, CarImg].map((img, index) => (
//               <Grid item xs={6} key={index} sx={{ padding: 0 }}>
//                 {' '}
//                 {/* Ensure no padding here */}
//                 <ServicesCard src={img} />
//               </Grid>
//             ))}
//           </Grid>
//         </Box>
//       </Stack>
//     </Box>
//   );
// };

// export default Services;
import React from 'react';
import { Container, Typography, Grid, Box, Stack } from '@mui/material';
import { styled } from '@mui/system';
import Image from 'next/image';
import ServicesCard from './ServiceCard';
import CarImg from '../Assests/CarImg.jpg';

const ServiceHeader = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  display: 'flex',
  alignItems: 'center',
  marginBottom: '16px',
}));

const ServiceTitle = styled(Typography)(({ theme }) => ({
  fontSize: '20px',
  fontWeight: 'bold',
  color: '#1A3C6E',
  marginBottom: '10px',
  padding: '2px',
  marginTop: '15px',
}));

const ServiceDescription = styled(Typography)(({ theme }) => ({
  marginBottom: '30px',
  lineHeight: '1.8',
  fontSize: '14px', // default for xs
  [theme.breakpoints.up('sm')]: {
    fontSize: '15px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '16px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '18px',
  },
}));

const Services = () => {
  return (
    <Box
      id="services"
      sx={{
        minHeight: '100vh', // Ensures full viewport height
        display: 'flex',
        alignItems: 'center', // Vertically centers the content
        justifyContent: 'center', // Horizontally centers the content
        padding: { lg: '0 130px', md: '0 80px', xs: '0 20px' }, // Adjust padding for different screen sizes
      }}
    >
      <Stack spacing={4} sx={{ width: '100%' }}>
        {/* Header */}
        <Stack
          mt={{ lg: '150px', md: '100px', xs: '50px' }}
          mb="30px"
          spacing={2}
        >
          <Typography
            color="#1E1E1E"
            fontWeight="500"
            fontSize={{ lg: '36px', md: '32px', sm: '28px', xs: '24px' }}
          >
            Services<span className="dotColor">.</span>
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

        {/* Services Description */}
        <Stack direction={{ lg: 'row', md: 'column' }} spacing={3}>
          <Box
            sx={{
              maxWidth: { lg: '60%', xs: '80%' },
              backgroundColor: '#f9f9f9',
              border: '2px solid #fcb017',
              borderRadius: '8px',
              padding: '20px',
            }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              color="#1A3C6E"
              marginBottom="10px"
              marginTop="15px"
              className="drop-shadow-service"
            >
              Executive Chauffeur service for VIP clients
            </Typography>
            <Typography variant="body1" marginBottom="30px" lineHeight="1.8">
              Delivering premium, discreet chauffeur services for VIP clients,
              ensuring comfort, professionalism, and a luxury experience
              tailored to your specific needs.
            </Typography>

            <Typography
              variant="h6"
              fontWeight="bold"
              color="#1A3C6E"
              marginBottom="10px"
              marginTop="15px"
              className="drop-shadow-service"
            >
              Assisted Travel
            </Typography>
            <Typography variant="body1" marginBottom="30px" lineHeight="1.8">
              Providing safe, comfortable transport solutions for disabled
              passengers, with professional drivers trained to offer
              personalized assistance and support throughout the journey.
            </Typography>

            <Typography
              variant="h6"
              fontWeight="bold"
              color="#1A3C6E"
              marginBottom="10px"
              marginTop="15px"
              className="drop-shadow-service"
            >
              Private Contracts
            </Typography>
            <Typography variant="body1" marginBottom="30px" lineHeight="1.8">
              Offering reliable transport solutions tailored to private clients,
              including long-term partnerships with schools, businesses, and
              healthcare organizations for scheduled, dependable travel.
            </Typography>

            <Typography
              variant="h6"
              fontWeight="bold"
              color="#1A3C6E"
              marginBottom="10px"
              marginTop="15px"
              className="drop-shadow-service"
            >
              School Transport
            </Typography>
            <Typography variant="body1" marginBottom="10px" lineHeight="1.8">
              Ensuring safe, punctual, and convenient transportation for
              students, with a focus on reliability and care, tailored to meet
              the needs of schools and families.
            </Typography>
          </Box>

          {/* Image Grid */}
          <Box
            sx={{
              width: { lg: '40%', md: '100%', sm: '70%', xs: '100%' },
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
            }}
          >
            <Grid
              container
              rowSpacing={1}
              columnSpacing={1}
              sx={{
                width: '100%',
                maxWidth: '600px',
              }}
            >
              {[CarImg, CarImg, CarImg, CarImg].map((img, index) => (
                <Grid item xs={6} key={index} sx={{ padding: 0 }}>
                  <ServicesCard src={img} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Services;

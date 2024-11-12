import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Stack,
  CardMedia,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import ServCards from './Cards';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import RealWChair from '../../Assests/RealWChair.jpg';
import RealSt from '../../Assests/RealST.jpg';
import RealVIP from '../../Assests/RealVip.png';
import RealPrivate from '../../Assests/RealPrivate.jpg';

function Feature({ icon, title, description }) {
  return (
    <Box display="flex" alignItems="center">
      <Box sx={{ marginRight: 2 }}>{icon}</Box>
      <Box>
        <Typography variant="subtitle1" mb="3px">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </Box>
    </Box>
  );
}
function InfoCards() {
  return (
    <Box height="100vh">
      <Stack direction="row" spacing={2} sx={{ maxWidth: '1300px', mx: 30 }}>
        {/* ServCards Section */}
        <Grid container spacing={8} sx={{ flex: 1 }}>
          <Grid item xs={12} sm={6}>
            <ServCards
              pic={RealVIP}
              title={'Executive Travel for VIP clients'}
              description={
                'Delivering premium, discreet chauffeur services for VIP clients, ensuring comfort, professionalism, and a luxury experience tailored to your specific needs.'
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ServCards
              pic={RealPrivate}
              title={'Private Contracts'}
              description={
                'Reliable transport solutions for private clients, including long-term partnerships with schools, businesses, and healthcare for scheduled travel.'
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ServCards
              pic={RealWChair}
              title={'Assisted Travel'}
              description={
                'Safe, comfortable transport for disabled passengers, with trained drivers offering personalized assistance and support throughout the journey.'
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ServCards
              pic={RealSt}
              title={'School Transport'}
              description={
                'Providing safe, punctual, and convenient transportation for students, with a strong focus on reliability, care, and flexibility for schools and families.'
              }
            />
          </Grid>
        </Grid>

        {/* Feature Section on the Right */}
        <Box
          sx={{
            backgroundColor: '#f9f9f9',
            border: '1px solid rgba(252, 176, 23, 0.9)',
            borderRadius: '8px',
            padding: '20px',
            width: '400px',
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
            height="100%"
          >
            <Feature
              icon={<LocalMallIcon color="primary" />}
              title="Affordable Prices"
              description="Enjoy competitive rates without compromising on quality, ensuring you get the best value for your travel experience."
            />
            <Feature
              icon={<HeadsetMicIcon color="primary" />}
              title="Excellent Customer Service"
              description="Our dedicated support team is available around the clock to assist with any inquiries or issues, making your travel stress-free."
            />
            <Feature
              icon={<DirectionsCarIcon color="primary" />}
              title="Customized Itineraries"
              description="Tailor your trip to match your personal preferences, from activities to accommodations, creating a unique travel experience just for you."
            />

            <Feature
              icon={<CalendarTodayIcon color="primary" />}
              title="Flexible Booking Options"
              description="Easily adjust your travel plans with our flexible booking policies, offering the freedom to change or cancel with minimal hassle."
            />
            <Feature
              icon={<MoreHorizIcon color="primary" />}
              title="Seamless Transfers"
              description="Enjoy smooth and hassle-free travel between destinations, with our reliable and convenient transfer services ensuring a seamless experience."
            />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}

export default InfoCards;

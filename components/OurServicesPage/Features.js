import React from 'react';
import { Typography, Box } from '@mui/material';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// import Grid from '@mui/material/Grid2';
function Feature({ icon, title, description }) {
  return (
    <Box display="flex" alignItems="center">
      <Box sx={{ marginRight: 2 }}>{icon}</Box>
      <Box>
        <Typography sx={{ fontSize: { xs: '15px', sm: '16px' } }} mb="3px">
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '13px', sm: '15px' },
            mb: { xs: '20px', sm: '0px' },
          }}
          color="textSecondary"
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
}
function FeatureComp() {
  return (
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
  );
}

export default FeatureComp;

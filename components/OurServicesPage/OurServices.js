import React from 'react';
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

import Submit1 from '../../Assests/Submit1.jpeg';

import FeatureComp from './Features';

function InfoCards() {
  return (
    <Box className="background-box">
      <Container maxWidth="lg">
        <Grid
          container
          spacing={8}
          sx={{
            marginLeft: { xs: '0', lg: '-80px' },
          }}
        >
          {/* Cards Section */}
          <Grid item xs={12} md={8} sx={{ marginBottom: '30px' }}>
            <Grid container spacing={15}>
              {' '}
              {/* Increased spacing between cards */}
              <Grid item xs={12} sm={6}>
                <ServCards
                  pic={RealExecute}
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
                  pic={RealAssisted}
                  title={'Assisted Travel'}
                  description={
                    'Safe, comfortable transport for disabled passengers, with trained drivers offering personalized assistance and support throughout the journey.'
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <ServCards
                  pic={RealSchool}
                  title={'School Transport'}
                  description={
                    'Providing safe, punctual, and convenient transportation for students, with a strong focus on reliability, care, and flexibility for schools and families.'
                  }
                />
              </Grid>
            </Grid>
          </Grid>

          {/* Feature Box Section */}
          <Grid item xs={12} md={4}>
            <Box
              className="advantages-card"
              sx={{
                backgroundColor: '#f9f9f9',
                border: '1px solid rgba(252, 176, 23, 0.9)',
                borderRadius: '8px',
                padding: '20px',
                height: '97%',
                marginLeft: '100px',
                width: '400px',
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
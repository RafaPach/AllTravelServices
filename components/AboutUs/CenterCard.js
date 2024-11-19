import React from 'react';
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
} from '@mui/material';
import Dbs from '../../Assests/DBSS.png';
import Smoke from '../../Assests/NoSmoke.png';
import Time from '../../Assests/Punctual2.png';
import Image from 'next/image';
import SafeGuarding from '../../Assests/SafeGuarding.png';

const CenterCard = () => {
  return (
    <Box
      sx={{
        display: 'flex ',
        alignContent: 'space-around',
        justifyContent: 'space-around',
        mt: 20,
      }}
    >
      <Card
        sx={{
          width: '100%',
          height: '400px',
          display: 'flex',
          justifyContent: 'space-around',
          position: 'relative', // Add this line
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(/assets/CardTaxiImage.jpeg)`, // Correct path to the image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.18,
          }}
        />
        <CardContent
          sx={{
            display: 'flex ',
            flexDirection: 'column',
            textAlign: 'center',
            gap: 2,
            mt: 5,
          }}
        >
          <Typography sx={{ fontSize: '28px' }}>
            Our Standards of Excellence
          </Typography>
          <Typography sx={{ fontSize: '20px' }}>
            At All Travel Service we deeply care about this and how our drivers
            etc etc and make sure costumer at heard As well as no smooke etc etc
          </Typography>
          <Grid container spacing={2} mt="10px">
            <Grid item xs={3} textAlign="center">
              <Image
                src={Dbs}
                width={115}
                height={120}
                className="imageabout-hover"
                style={{ position: 'relative', zIndex: 1 }} // Ensures the image stays on top
              />
              <Typography sx={{ fontWeight: 700, fontSize: '17px' }}>
                DBS Cleared
              </Typography>
            </Grid>
            <Grid item xs={3} textAlign="center">
              <Image
                src={Smoke}
                width={104}
                height={120}
                className="imageabout-hover"
                style={{ position: 'relative', zIndex: 1 }}
              />
              <Typography sx={{ fontWeight: 700, fontSize: '17px' }}>
                No Smoking Policies
              </Typography>
            </Grid>
            <Grid item xs={3} textAlign="center" mt={1}>
              <Image
                src={Time}
                width={115}
                height={110}
                className="imageabout-hover"
                style={{ position: 'relative', zIndex: 1 }}
              />
              <Typography sx={{ fontWeight: 700, fontSize: '17px' }}>
                Punctual
              </Typography>
            </Grid>
            <Grid item xs={3} textAlign="center">
              <Image
                src={SafeGuarding}
                width={120}
                height={120}
                className="imageabout-hover"
                style={{ position: 'relative', zIndex: 1 }}
              />
              <Typography sx={{ fontWeight: 700, fontSize: '17px' }}>
                Safeguarding Training
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CenterCard;

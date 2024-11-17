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
          display: 'flex ',
          justifyContent: 'space-around',
          backgroundImage:
            'url(https://m.media-amazon.com/images/I/91eh8LsPtML.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.9,
        }}
      >
        <CardContent
          sx={{
            display: 'flex ',
            flexDirection: 'column',
            textAlign: 'center',
            gap: 2,
            mt: 5,
          }}
        >
          <Typography sx={{ fontSize: '24px' }}>Proud Achievements</Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: '16px' }}>
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
              />
              <Typography sx={{ fontWeight: 700, fontSize: '17px' }}>
                DBS Cleared
              </Typography>
            </Grid>
            <Grid item xs={3} textAlign="center">
              <Image
                src={Smoke}
                width={165}
                height={120}
                className="imageabout-hover"
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

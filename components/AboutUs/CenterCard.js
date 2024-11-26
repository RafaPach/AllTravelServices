import React from 'react';
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
} from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/material';
import Dbs from '../../Assests/DBSS.png';
import Smoke from '../../Assests/SmokeTry.png';
import Time from '../../Assests/Punctual.png';
import Image from 'next/image';
import SafeGuarding from '../../Assests/SafeTry.png';

const CenterCard = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        display: 'flex ',
        alignContent: 'space-around',
        justifyContent: 'space-around',
        mt: { xs: 10, sm: 20 },
      }}
    >
      <Card
        sx={{
          width: '100%',
          height: { xs: '450px', sm: '430px' },
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
            backgroundImage: `url(/assets/CardTaxiImage.jpeg)`,
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
            mt: 2,
          }}
        >
          <Typography sx={{ fontSize: { xs: '20px', sm: '24px' } }}>
            Our Standards of Excellence
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center', // Centers horizontally
              alignItems: 'center', // Centers vertically
            }}
          >
            <Box
              sx={{
                textAlign: 'center',
                width: { xs: '100%', sm: '70%', md: '50%' },
              }}
            >
              <Typography sx={{ fontSize: { xs: '14px', sm: '16px' } }}>
                At All Travel Service, we are deeply committed to ensuring our
                drivers uphold the highest standards of professionalism,
                prioritizing customer needs, fostering open communication, and
                maintaining a smoke-free, respectful environment.
              </Typography>
            </Box>
          </Box>
          <Grid
            container
            spacing={{ xs: 3, sm: 0, md: 0 }} // Reduce spacing on md and larger devices
            mt="0px"
            justifyContent="center" // Centers the content horizontally
            sx={{ width: '100%' }} // Ensure it takes up the full width
            // alignItems="stretch"
          >
            {[
              { src: Dbs, width: 115, height: 120, text: 'DBS Cleared' },
              {
                src: Smoke,
                width: 105,
                height: 110,
                text: 'No Smoking Policies',
              },
              { src: Time, width: 140, height: 130, text: 'Punctual' },
              {
                src: SafeGuarding,
                width: 115,
                height: 120,
                text: 'Safeguarding Training',
              },
            ].map((item, index) => (
              <Grid
                item
                xs={6} // 2 images per row on xs and sm devices
                sm={3} // 2 images per row on sm devices
                md={3} // 4 images per row on md and higher devices
                lg={2}
                textAlign="center"
                key={index}
                style={{ position: 'relative', zIndex: 1 }}
                mt={{ xs: 2, sm: 0 }}
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  height={{ xs: '90px', sm: '200px' }} // Ensure a consistent height for all items
                >
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    height="130px" // Force images to align uniformly
                  >
                    <Image
                      src={item.src}
                      width={isSmallScreen ? item.width * 0.8 : item.width} // Adjust for small screens
                      height={isSmallScreen ? item.height * 0.8 : item.height} // Adjust for small screens
                      alt={item.text}
                      className="imageabout-hover"
                    />
                  </Box>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: '13px', sm: '16px', md: '17px' },
                      marginTop: { xs: '0px', sm: '1px' },
                    }}
                  >
                    {item.text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CenterCard;

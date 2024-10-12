import React from 'react';
import { TextField, Stack, Box, Typography } from '@mui/material';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
// import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';

import { useState } from 'react';

import Grid from '@mui/material/Unstable_Grid2';

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '--TextField-brandBorderColor': '#D3D3D3',
            '--TextField-brandBorderHoverColor': '#B2BAC2',
            '--TextField-brandBorderFocusedColor': '#6F7E8C',
            '& label.Mui-focused': {
              color: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: 'var(--TextField-brandBorderColor)',
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderHoverColor)',
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
    },
  });

export default function () {
  const [name, setName] = useState('');

  const [subject, setSubject] = useState('');

  const [email, setEmail] = useState('');

  const [message, setMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    setName('');

    setSubject('');

    setEmail('');

    setMessage('');

    console.log(name, subject, email, message);
  }

  const outerTheme = useTheme();

  return (
    <Box ml="130px">
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
            fontSize="30px"
            lineHeight="40px"
            letterSpacing="0em"
            textAlign="center"
          >
            Submit an Enquiry <span className="dotColor">.</span>
          </Typography>
        </Stack>
        <div className="aboutline"></div>
      </Stack>
      <Box sx={{ backgroundColor: '', mt: '70px' }} width="100%">
        <Grid container spacing={2}>
          <Grid xs={6} sm={6} md={6} lg={4}>
            <Stack
              spacing={2}
              direction={{ xs: 'column', sm: 'row' }}
              sx={{ marginBottom: 4 }}
            >
              <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField
                  placeholder="Type your name here"
                  name="name"
                  label="Name"
                  value={name}
                  variant="outlined"
                  onChange={(e) => setName(e.target.value)}
                  sx={{ opacity: '70%' }}
                  required
                  fullWidth
                />
                <TextField
                  name="username"
                  label="Subject"
                  value={subject}
                  variant="outlined"
                  required
                  fullWidth
                  onChange={(e) => setSubject(e.target.value)}
                  sx={{ opacity: '70%' }}
                />
              </ThemeProvider>
            </Stack>

            <Stack
              spacing={2}
              direction={{ xs: 'column', sm: 'row' }}
              sx={{ marginBottom: 4 }}
            >
              <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField
                  name="username"
                  label="Phone Number"
                  value={name}
                  variant="outlined"
                  fullWidth
                  sx={{ opacity: '70%' }}
                />

                <TextField
                  name="username"
                  label="Email Address"
                  value={email}
                  variant="outlined"
                  required
                  fullWidth
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{ opacity: '70%' }}
                />
              </ThemeProvider>
            </Stack>
            <ThemeProvider theme={customTheme(outerTheme)}>
              <TextField
                name="username"
                label="Message"
                value={message}
                variant="outlined"
                required
                rows={8}
                multiline
                onChange={(e) => setMessage(e.target.value)}
                fullWidth
                sx={{ opacity: '70%', mb: '50px' }}
              />
            </ThemeProvider>
          </Grid>
        </Grid>
        <Box className="cta" width="155px" backgroundColor="" mb="50px">
          <span onClick={handleSubmit}>Submit</span>

          <svg width="13px" height="12px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>

            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </Box>
      </Box>
    </Box>
  );
}

import React, { useState } from 'react';
import { TextField, Stack, Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import emailjs from '@emailjs/browser';

// Custom theme for styling TextField components
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
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
    },
  });

const EmailForm = () => {
  const outerTheme = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    phoneNr: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    email: false,
    phone: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validation
    if (name === 'email') {
      setErrors((prev) => ({ ...prev, email: !e.target.validity.valid }));
    }
    if (name === 'phoneNr') {
      setErrors((prev) => ({
        ...prev,
        phone: value.length > 9 || isNaN(value) || !value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send('SERVICE_ID', 'TEMPLATE_ID', formData, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setFormData({
            name: '',
            subject: '',
            email: '',
            phoneNr: '',
            message: '',
          });
        },
        (error) => {
          console.log('FAILED...', error);
        }
      );
  };

  return (
    <ThemeProvider theme={customTheme(outerTheme)}>
      <Box ml={{ xs: 2, sm: 5, md: 10, lg: 15 }} mt={10} backgroundColor="">
        <Stack spacing={2}>
          <Typography
            color="#1E1E1E"
            fontWeight="500"
            fontSize={{ xs: '24px', sm: '30px' }}
          >
            Submit an Enquiry <span className="dotColor">.</span>
          </Typography>
          <div className="aboutline"></div>
        </Stack>

        <Box mt={5}>
          <Grid container mb={5}>
            <Grid xs={10} sm={10} md={8} lg={6} mx="">
              <Stack
                spacing={2}
                direction={{ xs: 'column', sm: 'row' }}
                sx={{ mb: 4 }}
              >
                <TextField
                  // placeholder="Type your name here"
                  name="name"
                  label="Name"
                  value={formData.name}
                  variant="outlined"
                  onChange={handleChange}
                  required
                  fullWidth
                />
                <TextField
                  name="subject"
                  label="Subject"
                  value={formData.subject}
                  variant="outlined"
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Stack>

              <Stack
                spacing={2}
                direction={{ xs: 'column', sm: 'row' }}
                sx={{ mb: 4 }}
              >
                <TextField
                  name="phoneNr"
                  label="Phone Number"
                  value={formData.phoneNr}
                  variant="outlined"
                  onChange={handleChange}
                  error={errors.phone}
                  helperText={errors.phone ? 'Please enter a valid number' : ''}
                  required
                  fullWidth
                />
                <TextField
                  name="email"
                  label="Email Address"
                  value={formData.email}
                  variant="outlined"
                  onChange={handleChange}
                  inputProps={{ type: 'email' }}
                  error={errors.email}
                  helperText={errors.email ? 'Please enter a valid email' : ''}
                  required
                  fullWidth
                />
              </Stack>

              <TextField
                name="message"
                label="Message"
                value={formData.message}
                variant="outlined"
                required
                rows={4}
                multiline
                onChange={handleChange}
                fullWidth
              />
            </Grid>
          </Grid>

          <Box className="cta" width="155px" mb={5} onClick={handleSubmit}>
            <span>Submit</span>
            <svg width="13px" height="12px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default EmailForm;

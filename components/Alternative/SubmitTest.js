import React, { useState, useEffect } from 'react';
import { TextField, Stack, Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import ReCAPTCHA from 'react-google-recaptcha';
import Recaptcha from '../FunctionsTemplates/Recaptcha';
import EmailJs from '../FunctionsTemplates/Emailjs';

import Navbarpages from '../Navbar/NavbarForPages';
import Submit4 from '../../public/Assets/Submit4.png';

import { useMediaQuery } from '@mui/material';

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
const EmailForm2 = ({ EmailJs_Serviceid, EmailJs_Templateid }) => {
  const outerTheme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    phonenr: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    email: false,
    phone: false,
  });

  const [token, setToken] = useState(null);

  const templateParams = {
    from_name: formData.name,

    to_name: 'Pamal',

    phonenr: formData.phonenr,

    subject: formData.subject,

    from_email: formData.email,

    message: formData.message,
  };
  const theme = useTheme();
  const isMediumUp = useMediaQuery(theme.breakpoints.up('lg'));

  const EmailJs_Sid = EmailJs_Serviceid;
  const EmailJs_Tid = EmailJs_Templateid;
  const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EmailJs_PublicKey;
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  useEffect(() => {
    if (typeof window !== 'undefined' && !window.grecaptcha) {
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
      script.async = true;
      script.onload = () => {
        console.log('reCAPTCHA script loaded');
      };
      document.body.appendChild(script);
    }
  }, [siteKey]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === 'email') {
      setErrors((prev) => ({
        ...prev,
        email: value === '' ? false : !e.target.validity.valid,
      }));
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    if (name === 'phonenr') {
      setErrors((prev) => ({
        ...prev,
        phone: value === '' ? false : value.length < 10 || isNaN(value),
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await Recaptcha({ siteKey });

    EmailJs({
      EmailJs_Sid,
      EmailJs_Tid,
      EMAILJS_PUBLIC_KEY,
      formData: templateParams,
      setFormData,
    });
    setFormData({ name: '', subject: '', email: '', phonenr: '', message: '' });
  };

  return (
    <ThemeProvider theme={customTheme(outerTheme)}>
      {isMediumUp ? (
        <div className="curved-background-quote">
          <Navbarpages />
        </div>
      ) : (
        <>
          <Navbarpages />
          <div className="curved-background-quote"></div>
        </>
      )}

      <Box
        ml={{ xs: 1, sm: 5, md: 10, lg: 15 }}
        mr={{ xs: 1, sm: 5, md: 0 }}
        mt={{ lg: 2, xl: 4, xs: 3 }}
        mb={10}
        sx={{ minHeight: { xl: '90vh' } }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: { xs: 'center', lg: 'start' },
            m: 1,
          }}
        >
          <Stack spacing={2} mb="30px">
            <Typography
              color="#1E1E1E"
              fontWeight="500"
              fontSize={{ xs: '20px', sm: '26px', md: '28px', lg: '30px' }}
            >
              Submit an Enquiry<span className="dotColor">.</span>
            </Typography>

            <div className="aboutline"></div>
          </Stack>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: { lg: 'start', xs: 'center' },
            alignItems: 'center',
            textAlign: 'justify',
            mt: 0,
          }}
        >
          <Box
            sx={{
              width: { lg: '500px', sm: '600px', xs: '100%' },
              height: '150px',
              justifyContent: 'center',
              alignContent: 'center',
              p: { xs: 2, sm: 2, md: 0 },
              textAlign: 'justify',
            }}
          >
            <Typography
              sx={{ fontSize: { xs: '13px', sm: '15px' }, color: '#333333' }}
            >
              Please complete this form to let us know about your interest in
              collaborating with us or learning more about the services we
              provide. Once we receive your submission, our team will carefully
              review your request and reach out to discuss additional details
              and next steps.
            </Typography>
          </Box>
        </Box>

        <Grid
          container
          spacing={5}
          mt={0}
          justifyContent={{ xs: 'center', md: 'center' }}
        >
          {/* Form Section */}
          <Grid item xs={12} sm={12} md={10} lg={7}>
            <Grid container spacing={2}>
              {/* First Row: Name & Subject */}
              <Grid item xs={12} sm={6}>
                <TextField
                  name="name"
                  label="Name"
                  value={formData.name}
                  variant="outlined"
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="subject"
                  label="Subject"
                  value={formData.subject}
                  variant="outlined"
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Grid>

              {/* Second Row: Phone Number & Email */}
              <Grid item xs={12} sm={6}>
                <TextField
                  name="phonenr"
                  label="Phone Number"
                  value={formData.phonenr}
                  variant="outlined"
                  onChange={handleChange}
                  error={errors.phone}
                  helperText={errors.phone ? 'Please enter a valid number' : ''}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
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
              </Grid>

              {/* Message */}
              <Grid item xs={12}>
                <TextField
                  name="message"
                  label="Message"
                  value={formData.message}
                  variant="outlined"
                  required
                  rows={10}
                  multiline
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>

              {/* Submit Button */}
              <Grid item xs={12}>
                <Box
                  className="cta"
                  width="155px"
                  mb={5}
                  mt={3}
                  onClick={handleSubmit}
                >
                  <span>Submit</span>
                  <svg width="13px" height="12px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          {/* Image Section */}
          {isMediumUp && (
            <Grid item xs={12} sm={12} md={5} lg={5}>
              <Box sx={{ display: { xs: 'none', sm: 'block' }, ml: 4 }}>
                <Image
                  src="https://ik.imagekit.io/gkjgzbxu1/EnquiryTaxi.webp?updatedAt=1733519838290"
                  width={500}
                  height={400}
                  style={{ opacity: '0.7', borderRadius: '5px' }}
                  alt="taxiImg"
                  loading="lazy"
                />
              </Box>
            </Grid>
          )}
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default EmailForm2;

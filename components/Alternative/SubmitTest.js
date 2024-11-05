import React, { useState, useEffect } from 'react';
import { TextField, Stack, Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import ReCAPTCHA from 'react-google-recaptcha';

import Submit1 from '../../Assests/Submit1.jpeg';
import Submit2 from '../../Assests/Submit2.jpg';
import Submit3 from '../../Assests/Submit3.jpg';
import Submit4 from '../../Assests/Submit4.png';
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
const EmailForm2 = () => {
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

  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const templateParams = {
    from_name: formData.name,

    to_name: 'Pamal',

    phonenr: '07517391612',

    subject: formData.subject,

    from_email: formData.email,

    message: formData.message,
  };

  //   Initialize reCAPTCHA when the component mounts
  useEffect(() => {
    // Load reCAPTCHA if not already loaded
    if (typeof window !== 'undefined' && !window.grecaptcha) {
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.GA}`;
      script.async = true;
      script.onload = () => {
        console.log('reCAPTCHA script loaded');
      };
      document.body.appendChild(script);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Call execute to get the token
    const token = await new Promise((resolve) => {
      window.grecaptcha
        .execute(process.env.ReCAPTCHA_ID, {
          action: 'submit',
        })
        .then(resolve);
    });

    if (!token) {
      console.error('ReCAPTCHA token is missing');
      return;
    }

    const res = await fetch('/api/verify-recaptcha', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token }),
    });
    const data = await res.json();

    if (data.success) {
      console.log('Verification successful');
      emailjs
        .send(process.env.emailJS1, process.env.emailJS2, templateParams, {
          publicKey: process.env.email_pubKey,
        })

        .then(
          function (response) {
            console.log('SUCCESS!', response.status, response.text);
          },
          function (error) {
            console.log('FAILED...', error);
          }
        );
    }
  };

  return (
    <ThemeProvider theme={customTheme(outerTheme)}>
      <Box
        ml={{ xs: 2, sm: 5, md: 10, lg: 15 }}
        mt={10}
        sx={{ minHeight: '90vh' }} // Full viewport height}}
      >
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
        <Stack>
          <Box mt={5}>
            <Grid container mb={5}>
              <Grid xs={10} sm={10} md={8} lg={6}>
                <Stack
                  spacing={2}
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{ mb: 4 }}
                >
                  <TextField
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
                    helperText={
                      errors.phone ? 'Please enter a valid number' : ''
                    }
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
                    helperText={
                      errors.email ? 'Please enter a valid email' : ''
                    }
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
          <Box>
            <Image
              src={Submit4}
              width={400}
              height={400}
              style={{ opacity: ' 0.6' }}
            />
          </Box>
        </Stack>
        {/* <Image
          src={Submit1}
          width={400}
          height={400}
          style={{ opacity: ' 0.6' }}
        />
        <Image
          src={Submit2}
          width={400}
          height={400}
          style={{ opacity: ' 0.6' }}
        />
        <Image
          src={Submit3}
          width={400}
          height={400}
          style={{ opacity: ' 0.6' }}
        />
        <Image
          src={Submit4}
          width={400}
          height={400}
          style={{ opacity: ' 0.6' }}
        /> */}
      </Box>
    </ThemeProvider>
  );
};

export default EmailForm2;

// import React, { useState, useEffect } from 'react';
// import { TextField, Stack, Box, Typography } from '@mui/material';
// import Grid from '@mui/material/Unstable_Grid2';
// import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
// import emailjs from '@emailjs/browser';
// import ReCAPTCHA from 'react-google-recaptcha';

// const customTheme = (outerTheme) =>
//   createTheme({
//     palette: {
//       mode: outerTheme.palette.mode,
//     },
//     components: {
//       MuiTextField: {
//         styleOverrides: {
//           root: {
//             '--TextField-brandBorderColor': '#D3D3D3',
//             '--TextField-brandBorderHoverColor': '#B2BAC2',
//             '--TextField-brandBorderFocusedColor': '#6F7E8C',
//             '& label.Mui-focused': {
//               color: 'var(--TextField-brandBorderFocusedColor)',
//             },
//           },
//         },
//       },
//       MuiOutlinedInput: {
//         styleOverrides: {
//           notchedOutline: {
//             borderColor: 'var(--TextField-brandBorderColor)',
//           },
//           root: {
//             '&:hover .MuiOutlinedInput-notchedOutline': {
//               borderColor: 'var(--TextField-brandBorderHoverColor)',
//             },
//             '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
//               borderColor: 'var(--TextField-brandBorderFocusedColor)',
//             },
//           },
//         },
//       },
//     },
//   });

// const EmailForm2 = () => {
//   const outerTheme = useTheme();
//   const [formData, setFormData] = useState({
//     name: '',
//     subject: '',
//     email: '',
//     phoneNr: '',
//     message: '',
//   });

//   const [errors, setErrors] = useState({
//     email: false,
//     phone: false,
//   });

//   const [recaptchaToken, setRecaptchaToken] = useState(null);

//   const templateParams = {
//     from_name: formData.name,
//     to_name: 'Pamal',
//     phonenr: '07517391612',
//     subject: formData.subject,
//     from_email: formData.email,
//     message: formData.message,
//   };

//   useEffect(() => {
//     if (typeof window !== 'undefined' && !window.grecaptcha) {
//       const script = document.createElement('script');
//       script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.GA}`;
//       script.async = true;
//       script.onload = () => {
//         console.log('reCAPTCHA script loaded');
//       };
//       document.body.appendChild(script);
//     }
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));

//     if (name === 'email') {
//       setErrors((prev) => ({ ...prev, email: !e.target.validity.valid }));
//     }
//     if (name === 'phoneNr') {
//       setErrors((prev) => ({
//         ...prev,
//         phone: value.length > 9 || isNaN(value) || !value,
//       }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = await new Promise((resolve) => {
//       window.grecaptcha
//         .execute(process.env.ReCAPTCHA_ID, {
//           action: 'submit',
//         })
//         .then(resolve);
//     });

//     if (!token) {
//       console.error('ReCAPTCHA token is missing');
//       return;
//     }

//     const res = await fetch('/api/verify-recaptcha', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ token }),
//     });
//     const data = await res.json();

//     if (data.success) {
//       console.log('Verification successful');
//       emailjs
//         .send(process.env.emailJS1, process.env.emailJS2, templateParams, {
//           publicKey: process.env.email_pubKey,
//         })
//         .then(
//           (response) => {
//             console.log('SUCCESS!', response.status, response.text);
//           },
//           (error) => {
//             console.log('FAILED...', error);
//           }
//         );
//     }
//   };

//   return (
//     <ThemeProvider theme={customTheme(outerTheme)}>
//       <Box
//         sx={{
//           minHeight: '100vh', // Full viewport height
//           display: 'flex',
//           alignItems: 'center', // Center vertically
//           justifyContent: 'center', // Center horizontally
//           padding: { xs: 2, sm: 5, md: 10, lg: 15 }, // Responsive padding
//         }}
//         ml={{ xs: 2, sm: 5, md: 10, lg: 15 }}
//       >
//         <Box sx={{ width: '100%', maxWidth: '800px' }}>
//           <Stack spacing={2} alignItems="center">
//             <Typography
//               color="#1E1E1E"
//               fontWeight="500"
//               fontSize={{ xs: '24px', sm: '30px' }}
//             >
//               Submit an Enquiry <span className="dotColor">.</span>
//             </Typography>
//             <Box
//               className="aboutline"
//               sx={{
//                 width: '80%',
//                 height: '2px',
//                 backgroundColor: '#1E1E1E',
//                 marginBottom: 3,
//               }}
//             />
//           </Stack>

//           <Box mt={5}>
//             <Grid container justifyContent="center">
//               <Grid xs={10} sm={10} md={8} lg={6}>
//                 <Stack
//                   spacing={2}
//                   direction={{ xs: 'column', sm: 'row' }}
//                   sx={{ mb: 4 }}
//                 >
//                   <TextField
//                     name="name"
//                     label="Name"
//                     value={formData.name}
//                     variant="outlined"
//                     onChange={handleChange}
//                     required
//                     fullWidth
//                   />
//                   <TextField
//                     name="subject"
//                     label="Subject"
//                     value={formData.subject}
//                     variant="outlined"
//                     onChange={handleChange}
//                     required
//                     fullWidth
//                   />
//                 </Stack>

//                 <Stack
//                   spacing={2}
//                   direction={{ xs: 'column', sm: 'row' }}
//                   sx={{ mb: 4 }}
//                 >
//                   <TextField
//                     name="phoneNr"
//                     label="Phone Number"
//                     value={formData.phoneNr}
//                     variant="outlined"
//                     onChange={handleChange}
//                     error={errors.phone}
//                     helperText={
//                       errors.phone ? 'Please enter a valid number' : ''
//                     }
//                     required
//                     fullWidth
//                   />
//                   <TextField
//                     name="email"
//                     label="Email Address"
//                     value={formData.email}
//                     variant="outlined"
//                     onChange={handleChange}
//                     inputProps={{ type: 'email' }}
//                     error={errors.email}
//                     helperText={
//                       errors.email ? 'Please enter a valid email' : ''
//                     }
//                     required
//                     fullWidth
//                   />
//                 </Stack>

//                 <TextField
//                   name="message"
//                   label="Message"
//                   value={formData.message}
//                   variant="outlined"
//                   required
//                   rows={4}
//                   multiline
//                   onChange={handleChange}
//                   fullWidth
//                   sx={{ mb: 4 }}
//                 />
//               </Grid>
//             </Grid>

//             <Box className="cta" width="155px" mb={5} onClick={handleSubmit}>
//               <span>Submit</span>
//               <svg width="13px" height="12px" viewBox="0 0 13 10">
//                 <path d="M1,5 L11,5"></path>
//                 <polyline points="8 1 12 5 8 9"></polyline>
//               </svg>
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//     </ThemeProvider>
//   );
// };

// export default EmailForm2;

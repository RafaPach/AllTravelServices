import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  TextField,
  Typography,
  FormControl,
  Checkbox,
  Stack,
  FormControlLabel,
  InputAdornment,
  Select,
  MenuItem,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the styles
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import JourneyCard from '../CardJourneyTest';
import Navbarpages from '../Navbar/NavbarForPages';
import EmailJs from '../FunctionsTemplates/Emailjs';
import Recaptcha from '../FunctionsTemplates/Recaptcha';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useMediaQuery } from '@mui/material';

import { addDays } from 'date-fns';

import dynamic from 'next/dynamic';
import QuoteForm from './QuoteForm';

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

function TravelQuoteForm({ EmailJs_Serviceid, EmailJs_Templateid }) {
  const outerTheme = useTheme();
  const theme = useTheme();
  const isMediumDown = useMediaQuery(theme.breakpoints.down('md'));

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDateReturn, setSelectedDateReturn] = useState(null);
  const [specialRequests, setSpecialRequests] = useState(false);
  const [returnDate, setReturnDate] = useState(null); // State for return date
  const [pickupTime, setPickupTime] = useState('');
  const [returnTime, setReturnTime] = useState('');

  const [journeyType, setJourneyType] = useState('');
  const [serviceType, setServiceType] = useState('');

  const [errors, setErrors] = useState({
    email: false,
    phone: false,
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    await Recaptcha({ siteKey });

    const updatedFormData = {
      ...formData,
      journeyType,
      special_request:
        formData.special_request.toString() === 'true'
          ? 'Yes, check below.'
          : 'No special requests required.',

      returndate:
        formData.returndate && formData.returntime
          ? formData.returndate
          : 'Theres no Return Date as this is a one way journey',
      returntime:
        formData.returndate && formData.returntime
          ? formData.returntime
          : 'Theres no Return Time as this is a one way journey',
    };

    EmailJs({
      EmailJs_Sid,
      EmailJs_Tid,
      EMAILJS_PUBLIC_KEY,
      formData: updatedFormData,
      setFormData,
    });

    setFormData({
      fullname: '',
      phonenr: '',
      email: '',
      pickupdate: '',
      pickuptime: '',
      returndate: '',
      returntime: ' ',
      location: '',
      dropoff: '',
      service: '',
      special_request: false,
      notes: '',
      journeyType: '',
    });

    setErrors((prev) => ({
      ...prev,
      phone: false, // Reset phone error
    }));
    setServiceType(null);
    setSelectedDate(null);
    setSelectedDateReturn(null);
  };

  const handleTimeChange = (e) => {
    const { name } = e.target;
    let value = e.target.value;

    // Remove any non-numeric characters except colon
    value = value.replace(/[^\d:]/g, '');

    // Automatically add colon after the first two digits if it doesn't already have one
    if (value.length === 2 && !value.includes(':')) {
      value = `${value}:`;
    }

    // Restrict input to max 5 characters (HH:MM)
    if (value.length > 5) {
      value = value.slice(0, 5);
    }

    // Validate and correct only if the format is complete (HH:MM)
    const [hours, minutes] = value.split(':');
    if (hours && parseInt(hours, 10) > 23) {
      value = '23' + (minutes ? ':' + minutes : '');
    }
    if (minutes && parseInt(minutes, 10) > 59) {
      value = hours + ':59';
    }

    if (name === 'pickuptime') {
      setPickupTime(value);
      setFormData((prev) => ({ ...prev, pickuptime: value }));
    } else if (name === 'returntime') {
      setReturnTime(value);
      setFormData((prev) => ({ ...prev, returntime: value }));
    }
  };

  const [formData, setFormData] = useState({
    fullname: '',
    phonenr: '',
    email: '',
    pickupdate: '',
    pickuptime: '',
    returndate: '',
    returntime: ' ',
    location: '',
    dropoff: '',
    service: '',
    special_request: false,
    notes: '',
    journeyType: journeyType,
  });

  const handleFormChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === 'phonenr') {
      setErrors((prev) => ({
        ...prev,
        phone: value === '' ? false : value.length < 10 || isNaN(value),
      }));
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (name === 'service') {
      setErrors((prev) => ({
        ...prev,
        phone: value.length < 10 || isNaN(value),
      }));
      setServiceType(value);
      setFormData((prev) => ({ ...prev, [name]: value }));
    } else if (name === 'email') {
      setErrors((prev) => ({
        ...prev,
        email: value === '' ? false : !e.target.validity.valid,
      }));
      setFormData((prev) => ({ ...prev, [name]: value }));
    } else if (name === 'special_request') {
      setSpecialRequests(checked);

      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (name === 'pickupdate' && value) {
      const date = new Date(value);

      if (!isNaN(date)) {
        const formattedDate = `${('0' + date.getDate()).slice(-2)}/${(
          '0' +
          (date.getMonth() + 1)
        ).slice(-2)}/${date.getFullYear()} `;

        setFormData((prev) => ({ ...prev, [name]: formattedDate }));

        setSelectedDate(date);
      } else {
        console.log('invalid date format');
      }
    } else if (name === 'returndate' && value) {
      const date = new Date(value);

      if (!isNaN(date)) {
        const formattedDate = `${('0' + date.getDate()).slice(-2)}/${(
          '0' +
          (date.getMonth() + 1)
        ).slice(-2)}/${date.getFullYear()} `;

        setFormData((prev) => ({ ...prev, [name]: formattedDate }));

        setSelectedDateReturn(date);
      } else {
        console.log('invalid date format');
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      setFormData((prev) => ({ ...prev, journeyType }));
    }
    console.log(formData);
  };

  // const DynamicQuoteForm = dynamic(() => import('./QuoteForm'), {
  //   loading: () => <p>Loading...</p>, // Optional loading message
  // });
  return (
    <ThemeProvider theme={customTheme(outerTheme)}>
      {!isMediumDown ? (
        <div className="curved-background-quote">
          <Navbarpages />
        </div>
      ) : (
        <>
          <Navbarpages />
          <div className="curved-background-quote"></div>
        </>
      )}

      <Box sx={{ display: 'flex', justifyContent: 'center', m: 3 }}>
        <Stack spacing={2} mb={{ xs: 0, sm: '30px' }}>
          <Typography
            color="#1E1E1E"
            fontWeight="500"
            fontSize={{ xs: '20px', sm: '26px', md: '28px', lg: '30px' }}
          >
            Request a Quote <span className="dotColor">.</span>
          </Typography>

          <div className="aboutline"></div>
        </Stack>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'justify',
          mb: 5,
        }}
      >
        <Stack
          sx={{
            width: { xs: '95%', sm: '600px' },
            height: '250px',
            direction: 'column',
            mb: '20px',
          }}
        >
          <Box
            sx={{ width: { xs: '95%', sm: '600px' }, height: '250px', p: 2 }}
          >
            <Typography
              sx={{
                fontSize: { xs: '13px', sm: '14px' },
                color: '#333333',
                lineHeight: '1.6',
              }}
            >
              Please complete the form to the best of your ability to request a
              booking. Once your request is received, we will contact you to
              confirm the booking, provide the price, and address any additional
              details needed.
            </Typography>
          </Box>
          <Box
            sx={{
              width: { xs: '95%', sm: '600px' },
              height: '250px',
              backgroundColor: 'rgba(255, 193, 7, 0.2)',
              justifyContent: 'center',
              alignContent: 'center',
              p: 2,
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '13px', sm: '14px' },
                  color: '#8C6D1F',
                }}
              >
                Kindly note that we will reach out to confirm your booking and
                provide the price. Your booking is not finalized until we have
                shared the price and confirmed availability. We strive to
                respond to you as promptly as possible.
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
        mb="0px"
      >
        <Typography
          // className="drop-shadow-service"
          sx={{
            mb: 2,
            fontSize: { xs: '20px', sm: '24px' },
            fontFamily: 'Courier, monospace',
          }}
        >
          CHOOSE YOUR JOURNEY TYPE
        </Typography>
      </Box>
      <Container
        maxWidth="md"
        // height="100vh"
        sx={{ mt: 4, bgcolor: 'none', p: 0 }}
      >
        <JourneyCard
          journeyType={journeyType}
          setJourneyType={setJourneyType}
          setReturnDate={setReturnDate}
        />
      </Container>
      <Container
        maxWidth="md"
        // height="100vh"
        sx={{
          mt: 5,
          bgcolor: journeyType ? 'rgba(245, 245, 245, 1)' : '',
          p: 3,
          borderRadius: 4,
          mb: 10,
        }}
      >
        {journeyType && (
          <QuoteForm
            journeyType={journeyType}
            handleSubmit={handleSubmit}
            formData={formData}
            handleFormChange={handleFormChange}
            errors={errors}
            selectedDate={selectedDate}
            handleTimeChange={handleTimeChange}
            serviceType={serviceType}
            selectedDateReturn={selectedDateReturn}
            specialRequests={specialRequests}
          />
        )}
      </Container>
    </ThemeProvider>
  );
}

export default TravelQuoteForm;

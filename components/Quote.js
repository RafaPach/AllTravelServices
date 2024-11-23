import React, { useState } from 'react';
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
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the styles
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import JourneyCard from './CardJourneyTest';
import Navbarpages from './Navbar/NavbarForPages';
import EmailJs from './FunctionsTemplates/emailjs';

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

function TravelQuoteForm() {
  const outerTheme = useTheme();

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

  const EmailJs_Sid = process.env.NEXT_PUBLIC_EmailJs_Sid;
  const EmailJs_Tid = process.env.NEXT_PUBLIC_QuoteEmailJs_Tid;
  const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EmailJs_PublicKey;

  const handleSubmit = (e) => {
    e.preventDefault();

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

    console.log(formData);
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
    console.log(formData);
  };

  const [formData, setFormData] = useState({
    fullname: '',
    phonenr: '',
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
        phone: value.length < 10 || isNaN(value),
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
    } else if (name === 'special_request') {
      setSpecialRequests(checked);

      console.log(specialRequests);

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
    }

    console.log(formData);
  };

  return (
    <ThemeProvider theme={customTheme(outerTheme)}>
      <div className="curved-background-quote">
        <Navbarpages />
      </div>

      <Box sx={{ display: 'flex', justifyContent: 'center', m: 3 }}>
        <Stack spacing={2} mb={{ xs: 0, sm: '30px' }}>
          <Typography
            color="#1E1E1E"
            fontWeight="500"
            fontSize={{ xs: '24px', sm: '30px' }}
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
          bgcolor: 'rgba(245, 245, 245, 1)',
          p: 3,
          borderRadius: 4,
          mb: 10,
        }}
      >
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <Box display="flex" justifyContent="center" sx={{ m: 3 }}>
            <Typography
              sx={{
                fontWeight: '500',
                color: '#4E4E4E',
                // fontFamily: 'Courier, monospace',
                fontSize: '18px',
              }}
            >
              {journeyType ? `BOOK A ${journeyType.toUpperCase()} JOURNEY` : ''}
            </Typography>
          </Box>
          <Box mb="20px">
            <Typography sx={{ mb: '10px', fontSize: '14px', color: '#5E5E5E' }}>
              <span style={{ color: '#fcb017' }}>1.</span> Full Name
            </Typography>
            <Stack direction="row" spacing={6}>
              <TextField
                // placeholder="Full Name"
                fullWidth
                variant="outlined"
                sx={{
                  mb: 0,
                  borderRight: 'none', // Remove right border for seamless connection
                  '& fieldset': {
                    borderRight: '', // Remove the right border of the first field
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon style={{ width: 15 }} />
                    </InputAdornment>
                  ),
                }}
                value={formData.fullname}
                name="fullname"
                onChange={handleFormChange}
              />
            </Stack>
          </Box>
          <Box mb="10px">
            <Stack>
              <Typography sx={{ fontSize: '14px', color: '#5E5E5E' }}>
                <span style={{ color: '#fcb017' }}>2.</span> Phone Number
              </Typography>
              <TextField
                type="tel"
                fullWidth
                sx={{ mb: 2, borderRadius: '50x' }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIcon style={{ width: 15 }} />
                    </InputAdornment>
                  ),
                }}
                error={errors.phone}
                helperText={errors.phone ? 'Please enter a valid number' : ''}
                name="phonenr"
                onChange={handleFormChange}
                value={formData.phonenr}
              />
            </Stack>
          </Box>
          <Stack
            mb="20px"
            direction={{ xs: 'column', md: 'row' }}
            display="flex"
            spacing={1}
          >
            <Box sx={{ width: '50%' }}>
              <Typography
                sx={{ mb: '10px', fontSize: '14px', color: '#5E5E5E' }}
              >
                <span style={{ color: '#fcb017' }}>3.</span> Pickup Date
              </Typography>

              <DatePicker
                selected={selectedDate}
                onChange={(date) => {
                  if (date) {
                    handleFormChange({
                      target: { name: 'pickupdate', type: 'date', value: date },
                    });
                  }
                }}
                name="pickupdate"
                dateFormat="dd/MM/yyyy"
                placeholderText="dd/mm/yyyy"
                customInput={
                  <TextField
                    value={formData.pickupdate}
                    variant="outlined"
                    placeholder="dd/mm/yyyy"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <CalendarTodayIcon style={{ width: 15 }} />
                        </InputAdornment>
                      ),

                      readOnly: true,
                    }}
                    sx={{ width: { md: '400px', xs: '380px' } }}
                  />
                }
              />
            </Box>
            <Box sx={{ width: '50%' }} mb="20px">
              <Typography
                sx={{ mb: '10px', fontSize: '14px', color: '#5E5E5E' }}
              >
                <span style={{ color: '#fcb017' }}>4.</span> Pickup Time
              </Typography>
              <TextField
                // fullWidth
                variant="outlined"
                // placeholder="hh:mm"
                type="time"
                value={formData.pickuptime}
                onChange={handleTimeChange}
                name="pickuptime"
                sx={{
                  '& input[type="time"]::-webkit-calendar-picker-indicator': {
                    order: -1, // Moves the default clock icon to the start (not always reliable across browsers)
                    position: 'absolute',
                    left: '10px',
                    filter:
                      'invert(0) sepia(0) saturate(100%) hue-rotate(0deg) brightness(0) contrast(100%)', // Makes the icon blac
                  },
                  '& .MuiInputBase-input': {
                    paddingLeft: 8,
                  },
                  width: { md: '100%', sm: '380px', xs: '380px' },
                }}
              />
            </Box>
          </Stack>

          {journeyType === 'return' && (
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              display="flex"
              spacing={1}
              mb="20px"
            >
              <Box sx={{ width: '50%' }}>
                <Typography
                  sx={{ mb: '10px', fontSize: '14px', color: '#5E5E5E' }}
                >
                  <span style={{ color: '#fcb017' }}>5.</span> Return Date
                </Typography>
                <DatePicker
                  selected={selectedDateReturn}
                  onChange={(date) => {
                    if (date) {
                      handleFormChange({
                        target: {
                          name: 'returndate',
                          type: 'date',
                          value: date,
                        },
                      });
                    }
                  }}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="dd/mm/yyyy"
                  customInput={
                    <TextField
                      value={formData.returndate}
                      variant="outlined"
                      placeholder="dd/mm/yyyy"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <CalendarTodayIcon style={{ width: 15 }} />
                          </InputAdornment>
                        ),
                        readOnly: true,
                      }}
                      sx={{ width: { md: '400px', xs: '380px' } }}
                    />
                  }
                />
              </Box>
              <Box sx={{ width: '50%' }}>
                <Typography
                  sx={{ mb: '10px', fontSize: '14px', color: '#5E5E5E' }}
                >
                  <span style={{ color: '#fcb017' }}>6.</span> Return Time
                </Typography>
                <TextField
                  type="time"
                  value={formData.returntime}
                  onChange={handleTimeChange} // Calls the adjusted function
                  name="returntime"
                  // fullWidth
                  required
                  sx={{
                    '& input[type="time"]::-webkit-calendar-picker-indicator': {
                      order: -1, // Moves the default clock icon to the start (not always reliable across browsers)
                      position: 'absolute',
                      left: '10px',
                      filter:
                        'invert(0) sepia(0) saturate(100%) hue-rotate(0deg) brightness(0) contrast(100%)', // Makes the icon blac
                    },
                    '& .MuiInputBase-input': {
                      paddingLeft: 8,
                    },
                    width: { md: '100%', sm: '380px', xs: '380px' },
                  }}
                />
              </Box>
            </Stack>
          )}

          <Box mb="20px">
            <Typography sx={{ mb: '10px', fontSize: '14px', color: '#5E5E5E' }}>
              <span style={{ color: '#fcb017' }}>7.</span> Where shall we pick
              you up?
            </Typography>
            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOnIcon style={{ width: 15 }} />
                  </InputAdornment>
                ),
              }}
              name="location"
              onChange={handleFormChange}
              value={formData.location}
            />
          </Box>

          <Box mb="20px">
            <Typography sx={{ mb: '10px', fontSize: '14px', color: '#5E5E5E' }}>
              <span style={{ color: '#fcb017' }}>8.</span> Where shall we drop
              you off?
            </Typography>
            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOnIcon style={{ width: 15 }} />
                  </InputAdornment>
                ),
              }}
              name="dropoff"
              onChange={handleFormChange}
              value={formData.dropoff}
            />
          </Box>

          <Box mb="20px">
            <Typography sx={{ mb: '10px', fontSize: '14px', color: '#5E5E5E' }}>
              <span style={{ color: '#fcb017' }}>9.</span> What service would
              you need?
            </Typography>
            <FormControl fullWidth>
              <Select
                value={serviceType}
                name="service"
                onChange={handleFormChange}
                startAdornment={<LocalTaxiIcon sx={{ mr: 1, width: 15 }} />}
              >
                <MenuItem value="standard">Standard</MenuItem>

                <MenuItem value="luxury">Luxury</MenuItem>

                <MenuItem value="van">Van</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <FormControlLabel
            control={
              <Checkbox
                name="special_request"
                checked={specialRequests}
                onChange={handleFormChange}
              />
            }
            label="Special Requests (e.g., child seat)"
            sx={{ mb: '20px', color: '#5E5E5E' }}
          />

          <TextField
            label="Extra Notes (optional)"
            multiline
            rows={4}
            fullWidth
            sx={{ mb: '20px' }}
            name="notes"
            onChange={handleFormChange}
            value={formData.notes || ''}
          />

          <Box className="cta" width="155px" mb={5} onClick={handleSubmit}>
            <span>Submit</span>
            <svg width="13px" height="12px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default TravelQuoteForm;

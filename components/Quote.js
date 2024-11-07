import React, { useState } from 'react';
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  FormControl,
  Checkbox,
  Stack,
  FormControlLabel,
  RadioGroup,
  Radio,
  InputAdornment,
  Select,
  MenuItem,
  Card,
  CardContent,
  InputLabel,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import PersonIcon from '@mui/icons-material/Person';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
// import DatePicker from 'react-datepicker';
import DatePicker from 'react-datepicker';
import Grid from '@mui/material/Grid2';
import 'react-datepicker/dist/react-datepicker.css'; // Import the styles
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'; // (Optional) Calendar icon for adornment
import Image from 'next/image';
import ReturnJourney from '../Assests/ReturnJourney.png';

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

  const [time, setTime] = useState('');

  const [journeyType, setJourneyType] = useState('one-way-outbound');
  const [serviceType, setServiceType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic
  };

  const handleDateChange = (event) => {
    setSelectedDateReturn(event.target.value);
  };

  const handleJourneyTypeChange = (type) => {
    setJourneyType(type);
    setReturnDate(null); // Reset return date if they switch back to one-way
  };

  const returnJourneyFields = journeyType === 'return' && (
    <Box mt={3}>
      <Typography sx={{ mb: '10px', fontSize: '14px' }}>
        <span style={{ color: '#fcb017' }}>Return Date</span>
      </Typography>
      <DatePicker
        selected={returnDate}
        onChange={(date) => setReturnDate(date)}
        dateFormat="dd/MM/yyyy"
        placeholderText="Select return date"
        renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button onClick={decreaseMonth}>&lt;</button>
            <span>
              {date.toLocaleString('default', { month: 'long' })}{' '}
              {date.getFullYear()}
            </span>
            <button onClick={increaseMonth}>&gt;</button>
          </div>
        )}
        customInput={
          <TextField
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
          />
        }
      />
    </Box>
  );

  const handleTimeChange = (event) => {
    let value = event.target.value;

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

    setTime(value);
  };

  return (
    <ThemeProvider theme={customTheme(outerTheme)}>
      <Container
        maxWidth="md"
        sx={{ mt: 4, bgcolor: '#f9f9f9', p: 3, borderRadius: 2 }}
      >
        <Stack spacing={2} mb="30px">
          <Typography
            color="#1E1E1E"
            fontWeight="500"
            fontSize={{ xs: '24px', sm: '30px' }}
          >
            Request a Quote <span className="dotColor">.</span>
          </Typography>
          <div className="aboutline"></div>
        </Stack>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Choose Your Journey Type
          </Typography>

          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item xs={6}>
              <Card
                onClick={() => setJourneyType('oneWay')}
                sx={{
                  bgcolor: journeyType === 'oneWay' ? '#FFC107' : '#F5F5F5',
                  boxShadow:
                    journeyType === 'oneWay'
                      ? '0 4px 8px rgba(0, 0, 0, 0.3)'
                      : '0 2px 4px rgba(0, 0, 0, 0.1)',
                  transition: '0.3s',
                  '&:hover': {
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                    cursor: 'pointer',
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h6">One-Way Journey</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card
                onClick={() => setJourneyType('return')}
                sx={{
                  bgcolor: journeyType === 'return' ? '#FFC107' : '#F5F5F5',
                  boxShadow:
                    journeyType === 'return'
                      ? '0 4px 8px rgba(0, 0, 0, 0.3)'
                      : '0 2px 4px rgba(0, 0, 0, 0.1)',
                  transition: '0.3s',
                  '&:hover': {
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                    cursor: 'pointer',
                  },
                }}
              >
                <CardContent>
                  <Image src={ReturnJourney} width={80} height={80} />
                  <Typography sx={{ fontSize: '14px', mt: '10px' }}>
                    RETURN JOURNEY
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Box mb="20px">
            <Typography sx={{ mb: '10px', fontSize: '14px' }}>
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
              />
            </Stack>
          </Box>
          <Box mb="10px">
            <Stack>
              <Typography sx={{ fontSize: '14px' }}>
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
              />
            </Stack>
          </Box>
          <Stack mb="20px" direction="row" display="flex" spacing={1}>
            <Box sx={{ width: '50%' }}>
              <Typography sx={{ mb: '10px', fontSize: '14px' }}>
                <span style={{ color: '#fcb017' }}>3.</span> Pickup Date
              </Typography>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="dd/mm/yyyy"
                customInput={
                  <TextField
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
                    sx={{ width: '400px' }}
                  />
                }
              />
            </Box>
            <Box sx={{ width: '50%' }} mb="20px">
              <Typography sx={{ mb: '10px', fontSize: '14px' }}>
                <span style={{ color: '#fcb017' }}>4.</span> Pickup Time
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                // placeholder="hh:mm"
                type="time"
                value={time}
                onChange={handleTimeChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccessTimeIcon style={{ width: 15 }} />
                    </InputAdornment>
                  ),
                }}
                // sx={{
                //   '& .MuiInputBase-input': {
                //     textAlign: 'center',
                //   },
                // }}
              />
            </Box>
          </Stack>

          {journeyType === 'return' && (
            <Stack direction="row" display="flex" spacing={1} mb="20px">
              <Box sx={{ width: '50%' }}>
                <Typography sx={{ mb: '10px', fontSize: '14px' }}>
                  <span style={{ color: '#fcb017' }}>5.</span> Return Date
                </Typography>
                <DatePicker
                  selected={returnDate}
                  onChange={(date) => setReturnDate(date)}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="dd/mm/yyyy"
                  customInput={
                    <TextField
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
                      sx={{ width: '400px' }}
                    />
                  }
                />

                {/* <div className="return-date-quote">
                  <div className="control">
                    <input
                      className="wpcf7-form-control wpcf7-date wpcf7-validates-as-required wpcf7-validates-as-date input"
                      aria-required="true"
                      aria-invalid="false"
                      placeholder="mm/dd/yy"
                      value={selectedDate}
                      type="date"
                      name="Inbound_Date"
                      style={{
                        width: '100%',
                        padding: '0.75em',
                        paddingLeft: '2.5em', // Add left padding for the icon
                        fontSize: '1em',
                        lineHeight: '2.5em',
                        borderRadius: '4px',
                        boxSizing: 'border-box',
                        backgroundColor: '#faf6f0',
                        border: '1px solid #333',
                        color: '#333',
                        appearance: 'none', // Remove native date picker icon
                      }}
                      onChange={handleDateChange}
                    />
                  </div>
                </div> */}
              </Box>
              <Box sx={{ width: '50%' }}>
                <Typography sx={{ mb: '10px', fontSize: '14px' }}>
                  <span style={{ color: '#fcb017' }}>6.</span> Return Time
                </Typography>
                <TextField
                  type="time"
                  fullWidth
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccessTimeIcon style={{ width: 15 }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Stack>
          )}

          <Box mb="20px">
            <Typography sx={{ mb: '10px', fontSize: '14px' }}>
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
            />
          </Box>

          <Box mb="20px">
            <Typography sx={{ mb: '10px', fontSize: '14px' }}>
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
            />
          </Box>

          <Box mb="20px">
            <Typography sx={{ mb: '10px', fontSize: '14px' }}>
              <span style={{ color: '#fcb017' }}>9.</span> What service would
              you need?
            </Typography>
            <FormControl fullWidth>
              <Select
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
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
                checked={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.checked)}
              />
            }
            label="Special Requests (e.g., child seat)"
            sx={{ mb: '20px' }}
          />

          <TextField
            label="Extra Notes (optional)"
            multiline
            rows={4}
            fullWidth
            sx={{ mb: '20px' }}
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

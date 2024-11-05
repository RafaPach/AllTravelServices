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
  InputLabel,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
// import DatePicker from 'react-datepicker';
import DatePicker from 'react-datepicker';
import Grid from '@mui/material/Grid2';
import 'react-datepicker/dist/react-datepicker.css'; // Import the styles
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'; // (Optional) Calendar icon for adornment

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
  const [specialRequests, setSpecialRequests] = useState(false);

  const [time, setTime] = useState('');

  const [journeyType, setJourneyType] = useState('one-way-outbound');
  const [serviceType, setServiceType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic
  };

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
        <Typography variant="h5" align="center" gutterBottom>
          Receive a Travel Quote
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          {/* Full Name */}
          <Box mb="30px">
            <Typography sx={{ mb: '10px', fontSize: '14px' }}>
              <span style={{ color: '#fcb017' }}>1.</span> Full Name
            </Typography>
            <Stack direction="row" spacing={2}>
              <TextField
                placeholder="First Name"
                fullWidth
                variant="outlined"
                sx={{
                  mb: 0,
                  borderRight: 'none', // Remove right border for seamless connection
                  '& fieldset': {
                    borderRight: '', // Remove the right border of the first field
                  },
                }}
              />
              <TextField
                placeholder="Last Name"
                fullWidth
                variant="outlined"
                sx={{
                  mb: 0,
                  borderLeft: 'none', // Remove left border for seamless connection
                }}
              />
            </Stack>
          </Box>
          <Box mb="30px">
            <Stack>
              <Typography sx={{ mb: '10px', fontSize: '14px' }}>
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
          <Stack direction="row" display="flex" spacing={1}>
            <div style={{ width: '50%' }}>
              <Grid Grid item xs={6} mb="30px" sx={{ width: '100%' }}>
                <Typography sx={{ mb: '10px', fontSize: '14px' }}>
                  <span style={{ color: '#fcb017' }}>2.</span> When you do you
                  need a taxi?
                </Typography>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="dd/MM/yyyy" // Format of the date
                  placeholderText="dd/mm/yyyy" // Placeholder text
                  renderCustomHeader={({
                    date,
                    decreaseMonth,
                    increaseMonth,
                  }) => (
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
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
                        readOnly: true, // Make the input read-only to prevent manual entry
                      }}
                      onClick={() => setSelectedDate(null)} // This will open the date picker
                      sx={{
                        width: '400px',
                      }} // Set width to 1000px
                    />
                  }
                />
              </Grid>
            </div>
            <div
              style={{
                width: '50%',
              }}
            >
              {/* Title for the section */}
              <Typography sx={{ mb: '10px', fontSize: '14px' }}>
                <span style={{ color: '#fcb017' }}>2.</span> When you do you
                need a taxi?
              </Typography>

              {/* Input field for time with clock icon */}
              <TextField
                fullWidth
                variant="outlined"
                placeholder={time === '' ? 'hh:mm' : ''}
                value={time}
                onChange={handleTimeChange}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '4px',

                    color: '#fcb017',
                    '& fieldset': {
                      borderColor: '#D3D3D3',
                    },
                    '&:hover fieldset': {
                      borderColor: '#B2BAC2',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#6F7E8C',
                    },
                  },
                  '& .MuiInputBase-input': {
                    color: 'black',
                    textAlign: 'center',
                    fontSize: '.9rem',
                    width: '50px', // Adjust width for better appearance
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccessTimeIcon style={{ color: '#bbb' }} />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          </Stack>

          <Box mb="30px">
            <Stack>
              <Typography sx={{ mb: '10px', fontSize: '14px' }}>
                <span style={{ color: '#fcb017' }}>4.</span> Where shall we pick
                you up?
              </Typography>
              <TextField
                fullWidth
                sx={{ mb: 2 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOnIcon style={{ width: 15 }} />
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>
          </Box>
          {/* Pick-Up Address */}
          {/* Drop-Off Address */}
          <Box mb="30px">
            <Stack>
              <Typography sx={{ mb: '10px', fontSize: '14px' }}>
                <span style={{ color: '#fcb017' }}>5.</span> Where shall we drop
                you off?
              </Typography>
              <TextField
                fullWidth
                sx={{ mb: 2 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOnIcon style={{ width: 15 }} />
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>
          </Box>
          <Box>
            <Stack>
              <Typography sx={{ mb: '10px', fontSize: '14px' }}>
                <span style={{ color: '#fcb017' }}>6.</span> What service would
                you need?
              </Typography>
              <FormControl fullWidth sx={{ mb: 2 }}>
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
            </Stack>
          </Box>
          <Box>
            <FormControlLabel
              control={
                <Checkbox
                  checked={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.checked)}
                />
              }
              label="Special Requests (e.g., child seat)"
            />
          </Box>
          {/* Journey Type */}
          <FormControl
            component="fieldset"
            sx={{ mb: 2 }}
            display="flex"
            justifyContent="space-between"
          >
            <RadioGroup
              row
              value={journeyType}
              onChange={(e) => setJourneyType(e.target.value)}
            >
              <FormControlLabel
                value="one-way-outbound"
                control={<Radio />}
                label="One-Way Outbound"
              />
              <FormControlLabel
                value="return"
                control={<Radio />}
                label="Return Journey"
              />
            </RadioGroup>
          </FormControl>
          {/* Extra Notes */}
          <TextField
            label="Extra Notes (optional)"
            multiline
            rows={4}
            fullWidth
            sx={{ mb: 3 }}
          />
          {/* Submit Button */}
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            sx={{ py: 1.5, bgcolor: '#ffcd00', color: '#000' }}
          >
            Request a Quote
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default TravelQuoteForm;

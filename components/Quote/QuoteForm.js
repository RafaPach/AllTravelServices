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

const QuoteForm = ({
  journeyType,
  handleSubmit,
  formData,
  handleFormChange,
  errors,
  selectedDate,
  handleTimeChange,
  serviceType,
  selectedDateReturn,
  specialRequests,
}) => {
  return (
    <div>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ mt: 2 }}
        className="fadeInUp"
      >
        <Box display="flex" justifyContent="center" sx={{ m: 3 }}>
          <Typography
            sx={{
              fontWeight: '500',
              color: '#4E4E4E',
              // fontFamily: 'Courier, monospace',
              fontSize: { xs: '15px', sm: '17px' },
            }}
          >
            {journeyType ? `BOOK A ${journeyType.toUpperCase()} JOURNEY` : ''}
          </Typography>
        </Box>
        <Box mb="20px">
          <Typography sx={{ mb: '10px', fontSize: '14px', color: '#5E5E5E' }}>
            <span style={{ color: '#fcb017' }}>•</span> Full Name
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
              <span style={{ color: '#fcb017' }}>•</span> Phone Number
            </Typography>
            <TextField
              type="tel"
              required
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
        <Box mb="20px">
          <Stack>
            <Typography sx={{ fontSize: '14px', color: '#5E5E5E' }}>
              <span style={{ color: '#fcb017' }}>•</span> Email Address
            </Typography>
            <TextField
              name="email"
              value={formData.email}
              variant="outlined"
              onChange={handleFormChange}
              inputProps={{ type: 'email' }}
              error={errors.email}
              helperText={errors.email ? 'Please enter a valid email' : ''}
              required
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon style={{ width: 15 }} />
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{
                style: { color: '#fcb017', fontSize: '18px' }, // Set the label color to red
              }}
            />
          </Stack>
        </Box>
        <Stack
          mb="20px"
          direction={{ xs: 'row', sm: 'row', md: 'row' }}
          display="flex"
          spacing={1}
        >
          <Box sx={{ width: '50%' }}>
            <Typography sx={{ mb: '10px', fontSize: '14px', color: '#5E5E5E' }}>
              <span style={{ color: '#fcb017' }}>•</span> Pickup Date
            </Typography>

            <DatePicker
              selected={selectedDate}
              onChange={(date) => {
                if (date) {
                  handleFormChange({
                    target: {
                      name: 'pickupdate',
                      type: 'date',
                      value: date,
                    },
                  });
                }
              }}
              name="pickupdate"
              dateFormat="dd/MM/yyyy"
              placeholderText="dd/mm/yyyy"
              minDate={addDays(new Date(), 7)}
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
                  sx={{ width: { md: '400px', sm: '360px', xs: '100%' } }}
                />
              }
            />
          </Box>
          <Box sx={{ width: '50%' }} mb="20px">
            <Typography sx={{ mb: '10px', fontSize: '14px', color: '#5E5E5E' }}>
              <span style={{ color: '#fcb017' }}>•</span> Pickup Time
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                width: '100%',
              }}
            >
              {/* Custom Icon */}
              <Box
                sx={{
                  position: 'absolute',
                  left: '8px',
                  color: 'black',
                  marginLeft: 1,
                  pointerEvents: 'none', // Ensures it doesn’t interfere with the input
                }}
              >
                <AccessTimeIcon sx={{ width: 15, height: 15 }} />
              </Box>

              {/* Time Input */}
              <TextField
                variant="outlined"
                type="time"
                value={formData.pickuptime}
                onChange={handleTimeChange}
                name="pickuptime"
                sx={{
                  '& input[type="time"]': {
                    paddingLeft: '40px', // Adds space for the icon
                    appearance: 'none',
                  },
                  '& input[type="time"]::-webkit-calendar-picker-indicator': {
                    opacity: 0, // Hides the default clock icon
                    position: 'absolute',
                  },
                  '& .MuiInputLabel-root': {
                    left: '20%',
                  },
                  width: '100%',
                }}
              />
            </Box>
          </Box>
        </Stack>

        {journeyType === 'return' && (
          <Stack
            direction={{ xs: 'row', sm: 'row', md: 'row' }}
            display="flex"
            spacing={1}
            mb="20px"
          >
            <Box sx={{ width: '50%' }}>
              <Typography
                sx={{ mb: '10px', fontSize: '14px', color: '#5E5E5E' }}
              >
                <span style={{ color: '#fcb017' }}>•</span> Return Date
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
                minDate={addDays(new Date(), 7)}
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
                    sx={{ width: { md: '400px', sm: '360px', xs: '100%' } }}
                  />
                }
              />
            </Box>
            <Box sx={{ width: '50%' }}>
              <Typography
                sx={{ mb: '10px', fontSize: '14px', color: '#5E5E5E' }}
              >
                <span style={{ color: '#fcb017' }}>•</span> Return Time
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  position: 'relative',
                  width: '100%',
                }}
              >
                {/* Custom Icon */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: '8px',
                    color: 'black',
                    marginLeft: 1,
                    pointerEvents: 'none', // Ensures it doesn’t interfere with the input
                  }}
                >
                  <AccessTimeIcon sx={{ width: 15, height: 15 }} />
                </Box>

                {/* Time Input */}
                <TextField
                  variant="outlined"
                  type="time"
                  value={formData.returntime}
                  onChange={handleTimeChange}
                  name="returntime"
                  sx={{
                    '& input[type="time"]': {
                      paddingLeft: '40px', // Adds space for the icon
                      appearance: 'none',
                    },
                    '& input[type="time"]::-webkit-calendar-picker-indicator': {
                      opacity: 0, // Hides the default clock icon
                      position: 'absolute',
                    },
                    '& .MuiInputLabel-root': {
                      left: '20%',
                    },
                    width: '100%',
                  }}
                />
              </Box>
            </Box>
          </Stack>
        )}

        <Box mb="20px">
          <Typography sx={{ mb: '10px', fontSize: '14px', color: '#5E5E5E' }}>
            <span style={{ color: '#fcb017' }}>•</span> Where shall we pick you
            up?
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
            <span style={{ color: '#fcb017' }}>•</span> Where shall we drop you
            off?
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
            sx={{ width: '100%' }}
          />
        </Box>

        <Box mb="20px">
          <Typography sx={{ mb: '10px', fontSize: '14px', color: '#5E5E5E' }}>
            <span style={{ color: '#fcb017' }}>•</span> What service would you
            need?
          </Typography>
          <FormControl fullWidth>
            <Select
              value={serviceType}
              name="service"
              onChange={handleFormChange}
              startAdornment={<LocalTaxiIcon sx={{ mr: 1, width: 15 }} />}
            >
              <MenuItem value="School Transport">School Transport</MenuItem>
              <MenuItem value="Assisted Travel">Assisted Travel</MenuItem>
              <MenuItem value="private Contract">Private Contract</MenuItem>
              <MenuItem value="VIP Service">VIP Chauffeur Service</MenuItem>
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
    </div>
  );
};

export default QuoteForm;

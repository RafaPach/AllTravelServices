import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  IconButton,
  Stack,
  Slide,
  SwipeableDrawer,
  List,
  ListItem,
  Avatar,
  Divider,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Image from 'next/image';
import Logo from '../../Assests/Logo.png';

export default function NavbarAlt2({ color }) {
  const [open, setOpen] = useState(false);
  const links = ['Home', 'About', 'Services', 'Enquiries', 'Get a Quote'];

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

  function HideOnScroll({ children }) {
    const trigger = useScrollTrigger();
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

  return (
    <HideOnScroll>
      <Box>
        {isSmallScreen ? (
          // Mobile Nav
          <AppBar position="sticky" color="default">
            <Toolbar disableGutters sx={{ px: 2 }}>
              <Box sx={{ mr: 'auto', width: 120, height: 50 }}>
                {' '}
                {/* Adjust width/height as needed */}
                <Image
                  src={Logo}
                  alt="Logo"
                  layout="responsive"
                  objectFit="contain"
                />
              </Box>
              <IconButton onClick={() => setOpen(true)}>
                <MenuIcon />
              </IconButton>
            </Toolbar>
            <SwipeableDrawer
              anchor="right"
              open={open}
              onOpen={() => setOpen(true)}
              onClose={() => setOpen(false)}
            >
              <IconButton onClick={() => setOpen(false)}>
                <ChevronRightIcon />
              </IconButton>
              <Divider />
              <List>
                {links.map((item, index) => (
                  <ListItem key={index}>
                    <Button
                      href={
                        item.trim().toLowerCase() === 'home' // Check for 'home'
                          ? '/' // Navigate to root
                          : item.trim().toLowerCase() === 'services' // Check for 'services'
                          ? '#services' // Navigate to section with anchor
                          : `/${item.trim().toLowerCase().replace(/\s+/g, '')}` // For other links
                      }
                      sx={{
                        width: '100%',
                        textAlign: 'center',
                        color: '#fcb017;',
                      }}
                    >
                      {item}
                    </Button>
                  </ListItem>
                ))}
              </List>
            </SwipeableDrawer>
          </AppBar>
        ) : (
          isLargeScreen && (
            // Desktop Nav
            <AppBar position="sticky" sx={{ boxShadow: 0, bgcolor: '#faf6f0' }}>
              <Toolbar
                sx={{
                  pr: { xs: 2, sm: 4, md: '5vw', lg: '3vw', xl: '6vw' }, // Adjusted for consistent horizontal padding
                  mt: 4,
                  position: 'sticky',
                  top: 0, // Keeps the navbar at the top
                  zIndex: 100, // Ensures the navbar stays on top
                }}
              >
                <Box sx={{ ml: { xl: 15, lg: 9 } }}>
                  <a href="/" style={{ textDecoration: 'none' }}>
                    <Image
                      src={Logo}
                      alt="Logo"
                      width={200} // Default size for large screens
                      height={85} // Default size for large screens
                      sx={{
                        width: { xs: 130, sm: 150, md: 200, lg: 255 }, // Logo size responsive
                        height: { xs: 50, sm: 70, md: 90, lg: 95 },
                      }}
                      id="logoIMG"
                    />
                  </a>
                </Box>
                <Stack
                  direction="row"
                  spacing={{ xs: 2, sm: 4, md: 5, xl: 6 }} // Adjusted for consistent button spacing
                  justifyContent="flex-end"
                  width="100%" // Ensures the buttons don’t stretch
                >
                  {links.map((link, index) =>
                    link.toLowerCase().replace(/\s+/g, '') == 'services' ? (
                      <Button
                        key={index}
                        className="btn-like"
                        href={`#${link.toLowerCase().replace(/\s+/g, '')}`}
                        onClick={() =>
                          document

                            .getElementById('services')

                            .scrollIntoView({ behavior: 'smooth' })
                        }
                        sx={{
                          borderRadius: 3,

                          height: { lg: 50, md: 40, sm: 30 },

                          width: { lg: 130, md: 100, sm: 80 },

                          fontSize: {
                            lg: '0.9rem',

                            md: '0.75rem',

                            sm: '0.45rem',
                          },
                        }}
                      >
                        {link}
                      </Button>
                    ) : (
                      <Button
                        key={index}
                        className="btn-like"
                        href={`/${link.toLowerCase().replace(/\s+/g, '')}`}
                        sx={{
                          borderRadius: 3,
                          height: { xl: 50, lg: 45, md: 40, sm: 30 },
                          width: { xl: 130, lg: 110, md: 100, sm: 80 },
                          fontSize: {
                            xl: '0.9rem ',
                            lg: '0.8rem',
                            md: '0.75rem',
                            sm: '0.45rem',
                          },
                          textAlign: 'center',
                        }}
                      >
                        {link}
                      </Button>
                    )
                  )}
                </Stack>
              </Toolbar>
            </AppBar>
          )
        )}
      </Box>
    </HideOnScroll>
  );
}

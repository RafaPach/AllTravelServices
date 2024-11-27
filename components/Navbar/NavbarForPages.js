import React, { useState } from 'react';
import { useRouter } from 'next/router';

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
import Logo from '../../public/Assets/Logo.png';
import Link from 'next/link';

export default function Navbarpages({ color }) {
  const [open, setOpen] = useState(false);
  const links = ['Home', 'About', 'Enquiries', 'Get a Quote'];

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

  const router = useRouter(); // Get the router instance from Next.js

  // Check if the current route is '/about'
  const isAboutPage = router.pathname === '/about';

  return (
    <HideOnScroll>
      <Box>
        {isSmallScreen ? (
          // Mobile Nav
          <AppBar
            position="static"
            color="default"
            sx={{
              width: '100%',
              maxWidth: 'none',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Toolbar disableGutters sx={{ px: 2 }}>
              <Box
                sx={{ mr: 'auto', width: 120, height: 50, mb: 1.5, mt: 1.5 }}
              >
                {' '}
                {/* Adjust width/height as needed */}
                <Image
                  src={Logo}
                  alt="Logo"
                  width={115}
                  height={55}
                  style={{ objectFit: 'contain' }}
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
                    <Link
                      href={
                        item.trim().toLowerCase() === 'home' // Check for 'home'
                          ? '/' // Navigate to root
                          : item.trim().toLowerCase() === 'services' // Check for 'services'
                          ? '#services' // Navigate to section with anchor
                          : `/${item.trim().toLowerCase().replace(/\s+/g, '')}` // For other links
                      }
                    >
                      <Button
                        // href={
                        //   item.trim().toLowerCase() === 'home' // Check for 'home'
                        //     ? '/' // Navigate to root
                        //     : item.trim().toLowerCase() === 'services' // Check for 'services'
                        //     ? '#services' // Navigate to section with anchor
                        //     : `/${item
                        //         .trim()
                        //         .toLowerCase()
                        //         .replace(/\s+/g, '')}` // For other links
                        // }
                        sx={{
                          width: '100%',
                          textAlign: 'center',
                          color: '#fcb017',
                        }}
                      >
                        {item}
                      </Button>
                    </Link>
                  </ListItem>
                ))}
              </List>
            </SwipeableDrawer>
          </AppBar>
        ) : (
          isLargeScreen && (
            // Desktop Nav
            <AppBar
              position="sticky"
              sx={{ boxShadow: 0, bgcolor: 'transparent' }}
            >
              <Toolbar
                sx={{
                  p: 2,
                  ml: { lg: 15, md: 8 },
                  mr: { lg: '100px', m: '60px' },
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  position: 'sticky',
                }}
              >
                {!isAboutPage && (
                  <Link href="/" style={{ textDecoration: 'none' }}>
                    <Image
                      src={Logo}
                      alt="Logo"
                      width={155} // Adjust for medium screens
                      height={70} // Adjust for medium screens
                      sx={{
                        width: { lg: 250, md: 200, sm: 150 },
                        height: { lg: 100, md: 90, sm: 70 },
                      }}
                      id="logoIMG"
                    />
                  </Link>
                )}

                <Stack
                  direction="row"
                  spacing={{ lg: 6, md: 4, sm: 2 }}
                  display="flex"
                  justifyContent="end"
                  width="100%"
                  sx={{ mt: isAboutPage ? 2 : 0 }}
                >
                  {links.map((link, index) => (
                    <Link
                      href={
                        link.toLowerCase().replace(/\s+/g, '') === 'home' // Check for 'home'
                          ? '/' // Navigate to root
                          : link.toLowerCase().replace(/\s+/g, '') ===
                            'services' // Check for 'services'
                          ? `#${link.toLowerCase().replace(/\s+/g, '')}` // Navigate to section like #services
                          : `/${link.toLowerCase().replace(/\s+/g, '')}` // All other links navigate to their corresponding page
                      }
                    >
                      <Button
                        aria-label={`Navigate to ${link}`} // Accessibility improvement
                        key={index}
                        // href={
                        //   link.toLowerCase().replace(/\s+/g, '') === 'home' // Check for 'home'
                        //     ? '/' // Navigate to root
                        //     : link.toLowerCase().replace(/\s+/g, '') ===
                        //       'services' // Check for 'services'
                        //     ? `#${link.toLowerCase().replace(/\s+/g, '')}` // Navigate to section like #services
                        //     : `/${link.toLowerCase().replace(/\s+/g, '')}` // All other links navigate to their corresponding page
                        // }
                        sx={{
                          borderRadius: 3,
                          height: { lg: 40, md: 40, sm: 30 },
                          width: { lg: 110, md: 102, sm: 80 },
                          fontSize: {
                            lg: '0.75rem',
                            md: '0.75rem',
                            sm: '0.45rem',
                          },
                          backgroundColor: '#fcb017',
                          color: '#ffffff',
                          marginTop: 2,
                          '&:hover': {
                            boxShadow:
                              '0px 0px 0px 2.5px #fff, 0px 0px 0px 5px #fcb017, 0px 0px 0px 10px white, 0px 0px 0px 10.5px #fcb017',
                            backgroundColor: 'white',
                            color: '#fcb017',
                          },
                        }}
                      >
                        {link}
                      </Button>
                    </Link>
                  ))}
                </Stack>
              </Toolbar>
            </AppBar>
          )
        )}
      </Box>
    </HideOnScroll>
  );
}

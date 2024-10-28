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
  const links = ['Home', 'About us', 'Services', 'Enquiries', 'Contact Us'];

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
      <Box sx={{ backgroundColor: color || 'white' }}>
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
                      href={`#${item.replace(/\s+/g, '').toLowerCase()}`}
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
            <Toolbar
              sx={{
                p: 2,
                ml: { lg: 15, md: 8 },
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Image
                src={Logo}
                alt="Logo"
                width={150} // adjust for medium screens
                height={80} // adjust for medium screens
                sx={{
                  width: { lg: 250, md: 200, sm: 150 },
                  height: { lg: 110, md: 90, sm: 70 },
                }}
                id="logoIMG"
              />
              <Stack
                direction="row"
                spacing={{ lg: 6, md: 4, sm: 2 }}
                display="flex"
                justifyContent="end"
                width="100%"
                // sx={{ backgroundColor: 'red' }}
              >
                {links.map((link, index) => (
                  <Button
                    key={index}
                    className="btn-like"
                    href={`/${link.toLowerCase().replace(/\s+/g, '')}`}
                    sx={{
                      borderRadius: 3,
                      height: { lg: 50, md: 40, sm: 30 },
                      width: { lg: 130, md: 100, sm: 80 },
                      fontSize: { lg: '1rem', md: '0.9rem', sm: '0.75rem' },
                    }}
                  >
                    {link}
                  </Button>
                ))}
              </Stack>
            </Toolbar>
          )
        )}
      </Box>
    </HideOnScroll>
  );
}

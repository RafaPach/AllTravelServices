import Link from 'next/link';
import {
  Typography,
  Stack,
  Button,
  useScrollTrigger,
  Slide,
  AppBar,
  Container,
  Toolbar,
  Box,
  IconButton,
} from '@mui/material';
import Image from 'next/image';
import Logo from '../Assests/Logo.png';

export default function Navbar({ color }) {
  function HideOnScroll({ children }) {
    const trigger = useScrollTrigger();
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
  return (
    <Box sx={{ backgroundColor: '' }}>
      <Toolbar sx={{ p: 4, ml: 15 }}>
        {/* <a href="#welcome"> */}
        <Image src={Logo} alt="Logo" width={250} height={110} id="logoIMG" />
        {/* </a> */}

        <Stack
          direction="row"
          spacing={9}
          // mt="0px"
          mr="100px"
          display="flex"
          justifyContent="end"
          width="100%"
        >
      <Button
          className='btn-like'
            href="/about"
            // variant="contained"
            style={{
              borderRadius: 15,
              height: 50,
              width: 130,
            }}
          >
            Home
          </Button>
          <Button
          className='btn-like'
            href="/about"
            // variant="contained"
            style={{
              borderRadius: 15,
              height: 50,
              width: 130,
            }}
          >
            About us
          </Button>
         
          {/* <Link href="/journey">Journey and Skills</Link> */}
          <Button
          className='btn-like'
            href="/about"
            // variant="contained"
            style={{
              borderRadius: 15,
              height: 50,
              width: 130,
            }}
          >
            Services
          </Button>
          <Button
          className='btn-like'
            href="/about"
            // variant="contained"
            style={{
              borderRadius: 15,
              height: 50,
              width: 130,
            }}
          >
            Enquires
          </Button>
          <Button
          className='btn-like'
            href="/about"
            // variant="contained"
            style={{
              borderRadius: 15,
              height: 50,
              width: 130,
            }}
          >
            Contact Us
          </Button>
        </Stack>
      </Toolbar>
    </Box>
  );
}

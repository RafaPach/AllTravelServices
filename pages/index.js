import HelloPage from '../components/HelloPage';
import HelloPageAlt from '../components/Alternative/HelloPage';
import HomeServices from '../components/HomeServices';
import HomeServicesAlt from '../components/Alternative/HomeServices.js';
import Navbar from '../components/Navbar';
import NavbarAlt from '../components/Alternative/Navbar';
import About from '../components/About';
import SubmitEnquiry from '../components/SubmitEnquiry';
import { Box } from '@mui/system';
import Head from 'next/head';

export default function Try() {
  return (
    <>
      <Head>
        <title>AllTravelServices</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box className="fullScreen">
        <NavbarAlt />
        <HelloPageAlt />
        <HomeServicesAlt />
        <About />
        <SubmitEnquiry />
      </Box>
    </>
  );
}

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
import NavbarAlt2 from '../components/Alternative/NavTest.js';
import HelloPageAlt2 from '../components/Alternative/HelloPageTest.js';
import HomeServicesAlt2 from '../components/Alternative/HomeServicesTest.js';
import About2 from '../components/AboutTest.js';
import EmailForm2 from '../components/Alternative/SubmitTest.js';
import Services from '../components/Services.js';
import TravelQuoteForm from '../components/Quote.js';

export default function Try() {
  return (
    <>
      <Head>
        <title>AllTravelServices</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box className="fullScreen">
        {/* <NavbarAlt2 /> */}
        {/* <NavbarAlt /> */}
        {/* <HelloPageAlt /> */}
        {/* <HelloPageAlt2 /> */}
        {/* <HomeServicesAlt /> */}
        {/* <SubmitEnquiry /> */}
        {/* <HomeServicesAlt2 />
        <About2 />
        <Services /> */}
        {/* <EmailForm2 /> */}
        {/* <About /> */}
        <TravelQuoteForm />
      </Box>
    </>
  );
}

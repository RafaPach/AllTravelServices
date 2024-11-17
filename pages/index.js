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
import RequestQuoteForm from '../components/CardJourneyTest.js';
import InfoCards from '../components/OurServicesPage/OurServices.js';
import AboutUs from '../components/AboutUs/About.js';
import WhyUs from '../components/WhyChooseUS/Whyus.js';
import Testimonials from '../components/Testimonials/Testimonials.js';

export default function Try() {
  return (
    <>
      <Head>
        <title>AllTravelServices</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box className="fullScreen">
        {/* <NavbarAlt2 />
        <HelloPageAlt2 />
        <HomeServicesAlt />
        <WhyUs />
        <InfoCards />
        <Testimonials /> */}

        {/* <SubmitEnquiry /> */}
        {/* <HomeServicesAlt2 /> */}

        {/* <Services /> */}
        {/* <InfoCards /> */}
        {/* <EmailForm2 /> */}
        {/* <TravelQuoteForm /> */}

        <AboutUs />

        <About2 />
      </Box>
    </>
  );
}

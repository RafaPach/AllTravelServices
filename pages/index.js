import HomeServicesAlt from '../components/Alternative/HomeServices.js';
import { Box } from '@mui/system';
import Head from 'next/head';
import NavbarAlt2 from '../components/Alternative/NavTest.js';
import HelloPageAlt2 from '../components/Alternative/HelloPageTest.js';
import InfoCards from '../components/OurServicesPage/OurServices.js';
import WhyUs from '../components/WhyChooseUS/Whyus.js';
import Testimonials from '../components/Testimonials/Testimonials.js';

export default function Try() {
  return (
    <>
      <Head>
        <title>
          All Travel Services | Your Trusted Travel Partner | Assisted & VIP
          Services
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/Assets/imresizer-1733254806561.jpg" />
      </Head>
      <Box className="fullScreen">
        <NavbarAlt2 />
        <HelloPageAlt2 />
        <HomeServicesAlt />
        <WhyUs />
        <InfoCards />
        <Testimonials />
      </Box>
    </>
  );
}

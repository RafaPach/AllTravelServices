import HelloPage from '../components/HelloPage';
import HomeServices from '../components/HomeServices';
import Navbar from '../components/Navbar';
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
        <Navbar />
        <HelloPage />
        <HomeServices />
        <About />
        <SubmitEnquiry />
      </Box>
    </>
  );
}

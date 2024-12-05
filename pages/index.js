import HomeServicesAlt from '../components/Alternative/HomeServices.js';
import { Box } from '@mui/system';
import Head from 'next/head';
import NavbarAlt2 from '../components/Alternative/NavTest.js';
import HelloPageAlt2 from '../components/Alternative/HelloPageTest.js';
import InfoCards from '../components/OurServicesPage/OurServices.js';
import WhyUs from '../components/WhyChooseUS/Whyus.js';
import Testimonials from '../components/Testimonials/Testimonials.js';
import { NextSeo } from 'next-seo';

export default function Try() {
  return (
    <>
      {/* <Head>
        <title>
          All Travel Services | Your Trusted Travel Partner | Assisted & VIP
          Services
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/Assets/imresizer-1733254806561.jpg" />
      </Head> */}
      {/* <Head>
        <link rel="icon" href="/Assets/imresizer-1733254806561.jpg" />
      </Head>
      <NextSeo
        title="All Travel Services | Your Trusted Travel Partner | Assisted & VIP Services"
        description="Reliable taxi services in Ipswich and Suffolk. Book your travel with All Travel Services for VIP and assisted transport."
        canonical="https://alltravelservices.co.uk"
        openGraph={{
          url: 'https://alltravelservices.co.uk',
          title:
            'All Travel Services | Your Trusted Travel Partner | Assisted & VIP Services',
          description:
            'Reliable taxi services in Ipswich and Suffolk. Book your travel with All Travel Services for VIP and assisted transport.',
          images: [
            {
              url: 'https://alltravelservices.co.uk/Assets/og-image.jpg',
              alt: 'All Travel Services Thumbnail',
              width: 1920,
              height: 1080,
            },
          ],
          site_name: 'All Travel Services',
        }}
        twitter={{
          cardType: 'summary_large_image',
          title: 'All Travel Services | Trusted Travel & VIP Services',
          description:
            'Reliable taxi services in Ipswich and Suffolk. Book your travel with All Travel Services for VIP and assisted transport.',
          image: 'https://alltravelservices.co.uk/Assets/og-image.jpg',
        }}
      /> */}
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

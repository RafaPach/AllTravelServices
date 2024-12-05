import AboutUs from '../components/AboutUs/About';
import Testimonials from '../components/Testimonials/Testimonials';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

export default function AboutPage() {
  return (
    <>
      {/* <Head>
        <title>About | All Travel Services</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/Assets/imresizer-1733254806561.jpg" />
      </Head> */}
      <NextSeo
        title="About | All Travel Services"
        description="Learn more about All Travel Services, your trusted travel partner offering VIP and assisted transport in Ipswich and Suffolk."
        canonical="https://alltravelservices.co.uk/about"
        openGraph={{
          url: 'https://alltravelservices.co.uk/about',
          title: 'About | All Travel Services',
          description:
            'Learn more about All Travel Services, your trusted travel partner offering VIP and assisted transport in Ipswich and Suffolk.',
          images: [
            {
              url: 'https://alltravelservices.co.uk/Assets/og-image.jpg',
              alt: 'All Travel Services About Us Thumbnail',
              width: 1920,
              height: 1080,
            },
          ],
          site_name: 'All Travel Services',
        }}
        twitter={{
          cardType: 'summary_large_image',
          title: 'About | All Travel Services',
          description:
            'Learn more about All Travel Services, your trusted travel partner offering VIP and assisted transport in Ipswich and Suffolk.',
          image: 'https://alltravelservices.co.uk/Assets/og-image.jpg',
        }}
      />
      <div>
        <AboutUs />
        <Testimonials />
      </div>
    </>
  );
}

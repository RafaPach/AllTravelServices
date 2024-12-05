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
        title="About | All Travel Services | Trusted Travel Partner in Ipswich"
        description="Discover All Travel Services, offering reliable VIP, assisted transport, and school run services in Ipswich and Suffolk. Learn about our commitment to quality travel."
        canonical="https://alltravelservices.co.uk/about"
        openGraph={{
          url: 'https://alltravelservices.co.uk/about',
          title:
            'About All Travel Services | Trusted Travel Partner in Ipswich',
          description:
            'Discover All Travel Services, offering reliable VIP, assisted transport, and school run services in Ipswich and Suffolk. Learn about our commitment to quality travel.',
          images: [
            {
              url: 'https://ik.imagekit.io/gkjgzbxu1/About%20us%20Page.png?updatedAt=1733413726596',
              alt: 'All Travel Services About Us Thumbnail',
              width: 1920,
              height: 1080,
            },
          ],
          site_name: 'All Travel Services',
        }}
        twitter={{
          cardType: 'summary_large_image',
          title:
            'About All Travel Services | Trusted Travel Partner in Ipswich',
          description:
            'Discover All Travel Services, offering reliable VIP, assisted transport, and school run services in Ipswich and Suffolk. Learn about our commitment to quality travel.',
          image:
            'https://ik.imagekit.io/gkjgzbxu1/About%20us%20Page.png?updatedAt=1733413726596',
        }}
      />

      <div>
        <AboutUs />
        <Testimonials />
      </div>
    </>
  );
}

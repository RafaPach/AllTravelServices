import AboutUs from '../components/AboutUs/About';
import Testimonials from '../components/Testimonials/Testimonials';
import Head from 'next/head';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | All Travel Services</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/Assets/imresizer-1733254806561.jpg" />
      </Head>
      <div>
        <AboutUs />
        <Testimonials />
      </div>
    </>
  );
}

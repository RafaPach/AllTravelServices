import EmailForm2 from '../components/Alternative/SubmitTest.js';
import Head from 'next/head';
import FooterComp from '../components/Footer/Footer.js';
import { NextSeo } from 'next-seo';

export async function getServerSideProps() {
  const EmailJs_Serviceid = process.env.EmailJs_Sid || null;
  const EmailJs_Templateid = process.env.EnquiryEmailJs_Tid || null;

  return {
    props: {
      EmailJs_Serviceid,
      EmailJs_Templateid,
    },
  };
}

export default function EnquiryPage({ EmailJs_Serviceid, EmailJs_Templateid }) {
  return (
    <>
      {/* <Head>
        <title>Enquiries | All Travel Services</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/Assets/imresizer-1733254806561.jpg" />
      </Head> */}
      <NextSeo
        title="Enquiries | All Travel Services"
        description="Get in touch with All Travel Services for inquiries, quotes, and VIP transport requests."
        canonical="https://alltravelservices.co.uk/enquiries"
        openGraph={{
          url: 'https://alltravelservices.co.uk/enquiries',
          title: 'Enquiries | All Travel Services',
          description:
            'Get in touch with All Travel Services for inquiries, quotes, and VIP transport requests.',
          images: [
            {
              url: 'https://alltravelservices.co.uk/Assets/og-image.jpg',
              alt: 'All Travel Services Enquiries Thumbnail',
              width: 1920,
              height: 1080,
            },
          ],
          site_name: 'All Travel Services',
        }}
        twitter={{
          cardType: 'summary_large_image',
          title: 'Enquiries | All Travel Services',
          description:
            'Get in touch with All Travel Services for inquiries, quotes, and VIP transport requests.',
          image: 'https://alltravelservices.co.uk/Assets/og-image.jpg',
        }}
      />
      <div>
        <EmailForm2
          EmailJs_Serviceid={EmailJs_Serviceid}
          EmailJs_Templateid={EmailJs_Templateid}
        />
        <FooterComp />
      </div>
    </>
  );
}

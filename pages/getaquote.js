import FooterComp from '../components/Footer/Footer';
import TravelQuoteForm from '../components/Quote';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

export async function getServerSideProps() {
  const EmailJs_Serviceid = process.env.EmailJs_Sid || null;
  const EmailJs_Templateid = process.env.QuoteEmailJs_Tid || null;

  return {
    props: {
      EmailJs_Serviceid,
      EmailJs_Templateid,
    },
  };
}
export default function QuotePage({ EmailJs_Serviceid, EmailJs_Templateid }) {
  return (
    <>
      {/* <Head>
        <title>Get a Quote | All Travel Services</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/Assets/imresizer-1733254806561.jpg" />
      </Head> */}
      <NextSeo
        title="Get a Quote | All Travel Services"
        description="Get in touch with All Travel Services for inquiries, quotes, and VIP transport requests."
        canonical="https://alltravelservices.co.uk/getaquote"
        openGraph={{
          url: 'https://alltravelservices.co.uk/getaquote',
          title: 'Get a Quote | All Travel Services',
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
        <TravelQuoteForm
          EmailJs_Serviceid={EmailJs_Serviceid}
          EmailJs_Templateid={EmailJs_Templateid}
        />
        <FooterComp />
      </div>
    </>
  );
}

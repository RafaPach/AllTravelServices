import FooterComp from '../components/Footer/Footer';
import TravelQuoteForm from '../components/Quote';
import Head from 'next/head';

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
      <Head>
        <title>Get a Quote| All Travel Services</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/Assets/imresizer-1733254806561.jpg" />
      </Head>
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

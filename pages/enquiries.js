import EmailForm2 from '../components/Alternative/SubmitTest.js';
import Head from 'next/head';
import FooterComp from '../components/Footer/Footer.js';

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
      <Head>
        <title>Enquiries | All Travel Services</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/Assets/imresizer-1733254806561.jpg" />
      </Head>
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

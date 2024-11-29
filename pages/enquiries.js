import EmailForm2 from '../components/Alternative/SubmitTest.js';

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
  console.log(EmailJs_Serviceid, EmailJs_Templateid);

  return (
    <div>
      <EmailForm2
        EmailJs_Serviceid={EmailJs_Serviceid}
        EmailJs_Templateid={EmailJs_Templateid}
      />
      <FooterComp />
    </div>
  );
}

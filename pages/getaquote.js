import FooterComp from '../components/Footer/Footer';
import TravelQuoteForm from '../components/Quote';

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
    <div>
      <TravelQuoteForm
        EmailJs_Serviceid={EmailJs_Serviceid}
        EmailJs_Templateid={EmailJs_Templateid}
      />
      <FooterComp />
    </div>
  );
}

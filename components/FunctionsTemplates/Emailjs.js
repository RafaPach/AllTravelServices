import emailjs from '@emailjs/browser';

function EmailJs({
  EmailJs_Sid,
  EmailJs_Tid,
  EMAILJS_PUBLIC_KEY,
  formData,
  setFormData,
}) {
  emailjs.send(EmailJs_Sid, EmailJs_Tid, formData, EMAILJS_PUBLIC_KEY).then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
      setFormData({
        fullname: '',
        phonenr: '',
        pickupdate: '',
        pickuptime: '',
        returndate: '',
        returntime: ' ',
        location: '',
        dropoff: '',
        service: '',
        special_request: false,
        notes: 'N/A',
      });
    },
    (error) => {
      console.log('FAILED...', error);
    }
  );
}

export default EmailJs;

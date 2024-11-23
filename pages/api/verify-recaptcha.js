export default async function handler(req, res) {
  const { token } = req.body;
  const secretKey = process.env.RECAPTCHA_SECRET_KEY; // Secret key on the server side

  // Verify reCAPTCHA token with Google's reCAPTCHA API
  const response = await fetch(
    'https://www.google.com/recaptcha/api/siteverify',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: secretKey,
        response: token,
      }),
    }
  );

  const data = await response.json();

  if (data.success) {
    return res.status(200).json({ success: true });
  } else {
    return res.status(400).json({ success: false });
  }
}

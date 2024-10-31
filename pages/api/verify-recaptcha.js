export default async function handler(req, res) {
  const { token } = req.body;
  const secretKey = '6LfRZHEqAAAAAK4iVW_PvzjYeYCqiE7caIAGBouR';

  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${secretKey}&response=${token}`,
    }
  );
  const data = await response.json();

  if (data.success && data.score >= 0.5) {
    // Adjust the threshold as needed
    res.status(200).json({ success: true });
  } else {
    res.status(400).json({ success: false, error: data['error-codes'] });
  }
}

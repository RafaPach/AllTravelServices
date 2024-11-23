async function Recaptcha({ siteKey }) {
  // Check if window and grecaptcha are available
  if (typeof window === 'undefined' || !window.grecaptcha) {
    console.error('reCAPTCHA not loaded');
    return;
  }

  try {
    // Request a reCAPTCHA token
    const token = await window.grecaptcha.execute(siteKey, {
      action: 'submit',
    });

    if (!token) {
      console.error('reCAPTCHA token missing');
      return;
    }

    // Backend verification
    const res = await fetch('/api/verify-recaptcha', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token }),
    });

    if (!res.ok) {
      // If the response is not OK (status code is not 2xx), log an error
      console.error('Failed to verify reCAPTCHA');
      return;
    }

    const data = await res.json();

    if (!data.success) {
      // Handle failed reCAPTCHA verification
      console.error('reCAPTCHA verification failed');
      return;
    }

    // If reCAPTCHA passes, proceed
    console.log('Verification successful');
  } catch (error) {
    // Catch any unexpected errors (e.g., network errors)
    console.error('Error during reCAPTCHA execution:', error);
  }
}

export default Recaptcha;

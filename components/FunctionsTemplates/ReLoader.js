import { useEffect } from 'react';
import { useRouter } from 'next/router';

const ReCaptchaLoader = ({ siteKey }) => {
  const router = useRouter();

  useEffect(() => {
    const loadReCaptcha = () => {
      if (!document.querySelector(`script[src*="recaptcha"]`)) {
        const script = document.createElement('script');
        script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
        script.async = true;
        document.body.appendChild(script);
      }
    };

    const unloadReCaptcha = () => {
      const recaptchaScript = document.querySelector(
        `script[src*="recaptcha"]`
      );
      if (recaptchaScript) {
        recaptchaScript.remove();
      }

      const badge = document.querySelector('.grecaptcha-badge');
      if (badge) {
        badge.parentNode.removeChild(badge);
      }
    };

    if (['/enquiries', '/getaquote'].includes(router.pathname)) {
      loadReCaptcha();
    } else {
      unloadReCaptcha();
    }

    return () => unloadReCaptcha();
  }, [router.pathname, siteKey]);

  return null;
};

export default ReCaptchaLoader;

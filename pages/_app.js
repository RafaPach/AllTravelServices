// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

// export default MyApp;

// import '../styles/globals.css';
import '../styles/output.css';
import ReCaptchaLoader from '../components/FunctionsTemplates/ReLoader'; // Adjust the path as needed
import {
  NextSeo,
  LocalBusinessJsonLd,
  DefaultSeo,
  BreadcrumbJsonLd,
} from 'next-seo';
import Head from 'next/head';
import { GoogleAnalytics } from 'nextjs-google-analytics'; // Import GA

function MyApp({ Component, pageProps }) {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const seoConfig = {
    title:
      'All Travel Services - Ipswich | Trusted Travel, VIP, Assisted & School Run Services',
    description:
      'Reliable taxi services in Ipswich and Suffolk. Book your travel with All Travel Services for VIP, assisted travel, and school runs.',
    canonical: 'https://alltravelservices.co.uk',
    openGraph: {
      url: 'https://alltravelservices.co.uk',
      title:
        'All Travel Services - Ipswich | Trusted Travel, VIP, Assisted & School Run Services',
      description:
        'Reliable taxi services in Ipswich and Suffolk. Book your travel with All Travel Services for VIP, assisted travel, and school runs.',
      images: [
        {
          url: 'https://ik.imagekit.io/gkjgzbxu1/homepage.png?updatedAt=1733408106847',
          alt: 'All Travel Services Thumbnail',
          width: 1920,
          height: 1080,
        },
      ],
      site_name: 'All Travel Services',
      type: 'website',
      locale: 'en_GB',
    },
    twitter: {
      cardType: 'summary_large_image',
      title:
        'All Travel Services - Ipswich | Trusted Travel, VIP, Assisted & School Run Services',
      description:
        'Reliable taxi services in Ipswich and Suffolk. Book your travel with All Travel Services for VIP, assisted travel, and school runs.',
      image:
        'https://ik.imagekit.io/gkjgzbxu1/homepage.png?updatedAt=1733408106847',
    },
    additionalLinkTags: [
      { rel: 'icon', href: '/Assets/Logo2.png' },
      { rel: 'canonical', href: 'https://alltravelservices.co.uk' },
    ],
    additionalMetaTags: [
      { name: 'viewport', content: 'initial-scale=1.0, width=device-width' },
    ],
  };

  const localBusinessJsonLdProps = {
    type: 'TaxiService',
    id: 'https://alltravelservices.co.uk',
    name: 'All Travel Services',
    description:
      'Reliable taxi services, VIP transportation, and school runs in Ipswich and Suffolk.',
    url: 'https://alltravelservices.co.uk',
    address: {
      streetAddress: '7 Western Close',
      addressLocality: 'Rushmere St. Andrew, Ipswich',
      addressRegion: 'Suffolk',
      postalCode: 'IP4 5UU',
      addressCountry: 'UK',
    },
    sameAs: ['https://www.facebook.com/AllTravelServicesIpswich/'],
  };

  // Use it in your component

  return (
    <>
      {/* <Head> */}
      <GoogleAnalytics trackPageViews />
      <DefaultSeo {...seoConfig} />
      <LocalBusinessJsonLd {...localBusinessJsonLdProps} />
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'Home',
            item: 'https://alltravelservices.co.uk',
          },
          {
            position: 2,
            name: 'About',
            item: 'https://alltravelservices.co.uk/about',
          },
          {
            position: 3,
            name: 'Enquiries',
            item: 'https://alltravelservices.co.uk/enquiries',
          },
          {
            position: 4,
            name: 'Get a Quote',
            item: 'https://alltravelservices.co.uk/getaquote',
          },
        ]}
      />
      {/* SEO Meta Tags */}
      {/* <NextSeo
          title="All Travel Services - Ipswich | Your Trusted Travel Partner | Assisted & VIP Services - Ipswich"
          description="Reliable taxi services in Ipswich and Suffolk. Book your travel with All Travel Services for VIP and assisted transport."
          canonical="https://alltravelservices.co.uk"
          openGraph={{
            url: 'https://alltravelservices.co.uk',
            title:
              'All Travel Services - Ipswich | Your Trusted Travel Partner | Assisted & VIP Services - Ipswich',
            description:
              'Reliable taxi services in Ipswich and Suffolk. Book your travel with All Travel Services for VIP and assisted transport.',
            images: [
              {
                url: 'https://alltravelservices.co.uk/Assets/og-image.jpg',
                alt: 'All Travel Services Thumbnail',
                width: 1920,
                height: 1080,
              },
            ],
            site_name: 'All Travel Services',
          }}
          twitter={{
            cardType: 'summary_large_image',
            title:
              'All Travel Services - Ipswich | Trusted Travel & VIP Services',
            description:
              'Reliable taxi services in Ipswich and Suffolk. Book your travel with All Travel Services for VIP and assisted transport.',
            image: 'https://alltravelservices.co.uk/Assets/og-image.jpg',
          }}
          additionalLinkTags={[
            {
              rel: 'icon',
              href: '/Assets/favicon.ico',
            },
            {
              rel: 'canonical',
              href: 'https://alltravelservices.co.uk',
            },
          ]}
        /> */}
      {/* <LocalBusinessJsonLd
          type="TaxiService"
          id="https://alltravelservices.co.uk"
          name="All Travel Services"
          description="Reliable taxi services and VIP transportation in Ipswich and Suffolk."
          url="https://alltravelservices.co.uk"
          address={{
            streetAddress: '7 Western Close, Rushmere St. Andrew',
            addressLocality: 'Ipswich',
            addressRegion: 'Suffolk',
            postalCode: 'IP4 5UU',
            addressCountry: 'UK',
          }}
          sameAs={['https://www.facebook.com/AllTravelServicesIpswich/']}
          action={{
            actionName: 'potentialAction',
            actionType: 'ReviewAction',
            target: 'https://www.example.com/review/this/business',
          }}
        /> */}
      {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'All Travel Services',
              description:
                'Reliable taxi services and VIP transportation in Ipswich and Suffolk.',
              url: 'https://alltravelservices.co.uk',
              address: {
                streetAddress: '7 Western Close, Rushmere St. Andrew',
                addressLocality: 'Ipswich',
                addressRegion: 'Suffolk',
                postalCode: 'IP4 5UU',
                addressCountry: 'UK',
              },
              sameAs: ['https://www.facebook.com/AllTravelServicesIpswich/'],
            }),
          }}
        /> */}
      {/* Breadcrumbs JSON-LD */}
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://alltravelservices.co.uk',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'About',
                item: 'https://alltravelservices.co.uk/about',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Enquiries',
                item: 'https://alltravelservices.co.uk/enquiries',
              },
              {
                '@type': 'ListItem',
                position: 4,
                name: 'Get a Quote',
                item: 'https://alltravelservices.co.uk/getaquote',
              },
            ],
          }),
        }}
      /> */}
      {/* </Head> */}
      <ReCaptchaLoader siteKey={siteKey} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

// pages/_app.js
// import '../styles/globals.css';
// import { useEffect } from 'react';
// import Router from 'next/router';
// import Script from 'next/script';

// function MyApp({ Component, pageProps }) {
//   useEffect(() => {
//     const handleRouteChange = (url) => {
//       window.gtag('config', 'G-8105KHHCPG', {
//         page_path: url,
//       });
//     };

//     Router.events.on('routeChangeComplete', handleRouteChange);
//     return () => {
//       Router.events.off('routeChangeComplete', handleRouteChange);
//     };
//   }, []);

//   return (
//     <>
//       {/* Google Analytics script */}
//       <Script
//         id="google-analytics"
//         strategy="afterInteractive"
//         src={`https://www.googletagmanager.com/gtag/js?id=G-8105KHHCPG`}
//       />
//       <Script
//         id="ga-setup"
//         strategy="afterInteractive"
//         dangerouslySetInnerHTML={{
//           __html: `
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}
//             gtag('js', new Date());
//             gtag('config', 'G-8105KHHCPG', {
//               page_path: window.location.pathname,
//             });
//           `,
//         }}
//       />
//       <Component {...pageProps} />
//     </>
//   );
// }

// export default MyApp;

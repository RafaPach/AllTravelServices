**All Travel Services**

Welcome to the repository for the All Travel Services website. This project is designed to offer reliable taxi services in Ipswich and Suffolk, with a focus on VIP and assisted transport options. Whether you're looking for a quick ride or need specialized services, All Travel Services is your trusted travel partner.

![Homepage](https://ik.imagekit.io/gkjgzbxu1/homepage.png?updatedAt=1733408106847)

**Project Overview**
This website is built using Next.js and Material UI, providing a seamless, responsive experience across all devices. It is optimized for SEO and accessibility, ensuring that users can easily find the services offered and navigate the site with ease.

**Key Features**

Responsive Design: Optimized for all devices for a seamless user experience.
SEO Optimized: Configured with SEO best practices, including meta tags and Open Graph data for better search rankings and social media previews.
Google Analytics: Integrated for tracking user behavior and website performance.
Security: Google reCAPTCHA for spam protection and SSL certification via Vercel.

**SEO Configuration**
For improved search engine visibility and better social media previews, we've set up the following SEO parameters:

const seoConfig = {
title: 'All Travel Services - Ipswich | Your Trusted Travel Partner | Assisted & VIP Services - Ipswich',
description: 'Reliable taxi services in Ipswich and Suffolk. Book your travel with All Travel Services for VIP and assisted transport.',
canonical: 'https://alltravelservices.co.uk',
openGraph: {
url: 'https://alltravelservices.co.uk',
title: 'All Travel Services - Ipswich | Your Trusted Travel Partner | Assisted & VIP Services - Ipswich',
description: 'Reliable taxi services in Ipswich and Suffolk. Book your travel with All Travel Services for VIP and assisted transport.',
images: [
{
url: 'https://alltravelservices.co.uk/Assets/og-image.jpg',
alt: 'All Travel Services Thumbnail',
width: 1920,
height: 1080,
},
],
site_name: 'All Travel Services',
},
};
Title: Carefully crafted to highlight key services and location for better search engine rankings.
Description: Provides concise information about the services offered.
Canonical URL: Ensures that search engines index the correct page version.
Open Graph: Configured for social media optimization, ensuring rich media previews.

**Getting Started**

Prerequisites
To run this project locally, you'll need:

Node.js (v14 or higher)
npm (v6 or higher)

Installation

Clone the repository:
bash
Copy code
``` git clone https://github.com/yourusername/all-travel-services.git ```
cd all-travel-services
Install dependencies:
bash
Copy code
npm install
Run the project locally:
bash
Copy code
npm run dev
Visit http://localhost:3000 in your browser to see the website in action.

Deployment
The project is deployed on Vercel, with continuous deployment configured for automatic updates upon pushing changes to the repository.

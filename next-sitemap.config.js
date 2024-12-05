/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    process.env.NEXT_PUBLIC_SITEURL || 'https://www.alltravelservices.co.uk',
  generateRobotsTxt: true, // (optional)
  // ...other options
};

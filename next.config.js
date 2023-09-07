/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "flowbite.s3.amazonaws.com",
      "oaidalleapiprodscus.blob.core.windows.net",
      "cdn.openai.com",
    ],
  },
};

module.exports = nextConfig;




//original
// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;



// module.exports = {
//     images: {
//       remotePatterns: [
//         {
//           protocol: 'https',
//           hostname: 'external-content.duckduckgo.com',
//           port: '',
//           pathname: '/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.lfKmO91p_sJaYBSg4BIeTAHaE8%26pid%3DApi&f=1&ipt=a42455c0391cf855935d185e55bb8a88985c01c67f965cf4d4c4c8b78cb0435a&ipo=images**',
//           search: '',
//         },
//       ],
//     },
//   }


// module.exports = {
//     images: {
//       remotePatterns: [
//         {
//           protocol: 'https',
//           hostname: 'tse1.mm.bing.net', // The hostname of the image
//           port: '', // No specific port needed
//           pathname: '/th/**', // The path pattern for the images
//           search: '', // No specific search parameters needed
//         },
//       ],
//     },
//   }


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'tse1.mm.bing.net', // The hostname of the image
//         port: '', // No specific port needed
//         pathname: '/th/**', // The path pattern for the images
//         search: '', // No specific search parameters needed
//       },
//     ],
//   },
// };

// export default nextConfig;



// этот код сработал для next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tse1.mm.bing.net', // The hostname of the image
        port: '', // No specific port needed
        pathname: '/th/**', // The path pattern for the images
      },
    ],
  },
};

export default nextConfig;
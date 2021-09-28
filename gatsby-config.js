module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "personal-website",
  },
  plugins: [
    `gatsby-plugin-postcss`, 
    {
      resolve: `gatsby-plugin-tsconfig-paths`,
      options: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
      },
    }
  ],
};

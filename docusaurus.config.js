const user = "vampiro";
const repo = "dev";
const twitter = "SirRobertAuld";

module.exports = {
  title: "Rob's Stuff to Remember",
  tagline: 'A list of development-related guides to get me going faster in the future.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: `/${repo}/`,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: user,
  projectName: repo,
  themeConfig: {
    navbar: {
      title: 'Rob Docs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: `https://github.com/${user}/${repo}`,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: `https://twitter.com/${twitter}`,
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: `https://github.com/${user}`,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            `https://github.com/${user}/${repo}/edit/master/website/`,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            `https://github.com/${user}/${repo}/edit/master/website/blog/`,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

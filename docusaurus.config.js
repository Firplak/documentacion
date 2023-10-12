// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// @ts-ignore
const lightCodeTheme = require('prism-react-renderer/themes/vsLight')
// @ts-ignore
const darkCodeTheme = require('prism-react-renderer/themes/nightOwl')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Firplak',
  tagline: 'Documentacion de TI',
  url: 'https://docs.firplak.com',
  baseUrl: '/documentacion/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Firplak', // Usually your GitHub org/user name.
  projectName: 'Firplak-Documentation', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          //sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/firplak/documentacion'
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/firplak/documentacion'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        hideOnScroll: true,
        logo: {
          alt: 'Firplak logo',
          src: 'img/logo_firplak.png',
        },
        items: [
          {
            to: 'blog',
            position: 'left',
            label: 'Procedimientos e infraestructura',
          },
          {
            to: 'docs/desarrollos',
            position: 'left',
            label: 'Desarrollos',
          },
          {
            to: 'docs/cursos/access',
            position: 'left',
            label: 'Cursos',
          },
          {
            href: 'https://github.com/firplak/documentacion',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                to: 'blog',
                label: 'Procedimientos e infraestructura',
              },
              {
                to: 'docs/desarrollos',
                label: 'Desarrollos',
              },
              {
                to: 'docs/cursos/access',
                label: 'Cursos',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/firplak/documentacion',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Firplak.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell', 'csharp', 'sql', 'java', 'php', 'python', 'typescript', 'javascript', 'json', 'yaml', 'xml', 'markdown', 'css', 'html', 'haskell'],
      },
    }),
};

module.exports = config;

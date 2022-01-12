// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Dmytro Striletskyi',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
        title: 'Dmytro Striletskyi',
        logo: {
          alt: 'Logotype',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'playbook',
          },
          {
            to: '/blog',
            label: 'blog',
            position: 'left',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/dmytrostriletskyi/dmytrostriletskyi.com',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'more',
            items: [
              {
                label: 'playbook',
                to: '/docs/intro',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/dmytrostriletskyi/dmytrostriletskyi.com',
              },
            ],
          },
          {
            title: 'author',
            items: [
              {
                label: 'GitHub',
                href: 'htps://github.com/dmytrostriletskyi/dmytrostriletskyi.com',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/dmytrostriletskyi/',
              },
              {
                label: 'Medium',
                href: 'https://dmytrostriletskyi.medium.com',
              },
              {
                label: 'Habr',
                href: 'https://habr.com/users/dmytrostriletskyi/posts',
              },
              {
                label: 'DOU',
                href: 'https://dou.ua/users/dmytrostriletskyi/articles',
              },
              {
                label: 'Telegram Blog',
                href: 'https://t.me/dmytrostriletskyi',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UCcVosFK5p425MTnWef095NQ',
              },
            ],
          },
          {
            title: 'сontact',
            items: [
              {
                label: 'dmytro.striletskyi@gmail.com',
                to: 'mailto:dmytro.striletskyi@gmail.com',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en'],
  },
};

module.exports = config;

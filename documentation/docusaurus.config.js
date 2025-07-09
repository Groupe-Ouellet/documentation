// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Groupe Ouellet',
  tagline: 'Documentation interne et guides pratiques',
  favicon: '/img/go-logo.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://groupe-ouellet.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/documentation/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'groupe-ouellet', // Updated to match organization name
  projectName: 'documentation', // Updated to match project name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/groupe-ouellet/documentation/tree/main/documentation',
        },
        // blog: { ... } section removed
        theme: {
          customCss: './src/css/custom.css',
        },
        // Removed algolia from here
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/go-logo.png',
      navbar: {
        logo: {
          alt: 'Logo',
          src: 'img/go-logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'definitions/index',
            position: 'left',
            label: 'Définitions',
          },
          {
            type: 'doc',
            docId: 'introduction',
            position: 'left',
            label: 'testing EP 2',
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Contact',
            items: [
              {
                label: 'elliot.perreault@groupeouellet.ca',
                href: 'mailto:elliot.perreault@groupeouellet.ca',
              },
            ],
          },
          {
            title: 'Définitions',
            items: [
              {
                label: 'Définitions',
                to: '/docs/definitions/',
              },
              {
                label: 'SharePoint',
                to: '/docs/definitions/sharepoint',
              },
              {
                label: 'Power Automate',
                to: '/docs/definitions/powerautomate',
              },
            ],
          },
          {
            title: 'testing EP 2',
            items: [
              {
                label: 'Introduction',
                to: '/docs/introduction',
              },
              {
                label: 'Documents',
                to: '/docs/documents',
              },
              {
                label: 'Page',
                to: '/docs/pages/Accueil',
              },
              {
                label: 'List Forms',
                to: '/docs/list-forms/onboarding-form',
              },
              {
                label: 'Flows',
                to: '/docs/flows/onboarding',
              },
              {
                label: 'Maintenance',
                to: '/docs/maintenance',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Groupe Ouellet. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia: {
        appId: 'XZAUC77L7Z',
        apiKey: 'dadaac776810b2ef3337cd64ed5b671f',
        indexName: 'YOUR_INDEX_NAME',
        contextualSearch: true,
      },
      metadata: [
        { name: 'algolia-site-verification', content: '2002F801BA281E99' },
      ],
    }),
};

export default config;


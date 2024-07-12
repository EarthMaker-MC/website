import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'EarthMaker',
  tagline: 'Minecraft maps to scale, for everyone',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://earthmaker.world',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/earthmaker-mc/website/tree/master/',
          showLastUpdateTime: true
        },
        blog: {
          showReadingTime: true,
          showLastUpdateTime: true
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          lastmod: "datetime",
          
        }
      } satisfies Preset.Options,
    ],
  ],
  plugins: [require.resolve("docusaurus-plugin-image-zoom"), [
    require.resolve("docusaurus-plugin-search-local"),{}
  ],
  [
    require.resolve("@docusaurus/plugin-content-docs"), {
      id: "maps",
      path: 'maps',
      routeBasePath: "maps",
      sidebarPath: './sidebarMaps.ts',
      showLastUpdateTime: true
    }
  ]
],
  themeConfig: {
    zoom: {
      selector: '.markdown > img',
    },
    image: 'img/logo.webp',
    navbar: {
      title: 'EarthMaker',
      logo: {
        alt: 'An earth-like planet, cubic in a pixelated style',
        src: 'img/logo.webp',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'documentation',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: "docSidebar",
          sidebarId: "maps",
          position: "left",
          label: "Our maps",
          docsPluginId: "maps"
        },
        { to: '/blog', label: 'Blog', position: 'left' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'YouTube',
              href: 'https://youtube.com/@earthmaker-mc',
              target: "_BLANK"
            },
            {
              label: 'Discord',
              href: 'https://download.earthmaker.world',
              target: "_BLANK"
            },
            {
              label: "GitHub",
              href: "https://github.com/earthmaker-mc",
              target: "_BLANK"
            },
            {
              label: "RSS feed",
              href: "/blog/rss.xml",
              target: "_BLANK"
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} EarthMaker. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: false
    }
  } satisfies Preset.ThemeConfig,
};

export default config;

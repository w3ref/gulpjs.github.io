'use strict';

var isProd = process.env.NODE_ENV === 'production';

module.exports = {
  title: 'gulp.js',
  favicon: 'img/favicon.png',
  url: 'https://gulpjs.su/',
  baseUrl: '/',
  tagline: 'Набор инструментов для автоматизации и улучшения рабочего процесса',
  // Used by the deployment
  organizationName: 'w3ref',
  projectName: 'gulpjs.github.io',
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru']
  },
  // The theme
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    navbar: {
      logo: {
        alt: 'gulp',
        src: 'img/gulp.svg',
        href: '/',
        target: '_self',
      },
      items: [
        {
          to: 'docs/ru/getting-started/quick-start',
          label: 'Начать',
          position: 'left',
        },
        {
          to: 'docs/ru/api/concepts',
          label: 'API',
          position: 'left',
        },
        {
          to: 'plugins',
          label: 'Плагины',
          position: 'left',
        },
        {
          href: 'https://github.com/sponsors/gulpjs',
          label: 'Пожертвовать',
          position: 'left',
        },
        {
          to: 'docs/ru/support/for-enterprise',
          label: 'Энтерпрайз',
          position: 'left',
          emphasis: true,
        },
        {
          href: 'https://twitter.com/gulpjs',
          logo: {
            alt: 'Gulp в Twitter',
            src: 'img/twitter.svg',
          },
          position: 'right'
        },
        {
          href: 'https://medium.com/gulpjs',
          logo: {
            alt: 'Блог gulp',
            src: 'img/medium.svg',
          },
          position: 'right'
        },
      ]
    },
    footer: {
      links: [
        {
          items: [
            { html: '<img src="/img/gulp-white-logo.svg" alt="gulp" href="/" />' }
          ]
        },
        {
          title: 'Документация',
          items: [
            {
              to: 'docs/ru/getting-started/quick-start',
              label: 'Начало работы',
            },
            {
              to: 'docs/ru/api/concepts',
              label: 'API',
            },
          ]
        },
        {
          title: 'Сообщество',
          items: [
            {
              href: 'https://github.com/gulpjs/gulp',
              label: 'GitHub',
            },
            {
              href: 'https://stackoverflow.com/questions/tagged/gulp',
              label: 'Stack Overflow',
            },
            {
              href: 'https://twitter.com/gulpjs',
              label: 'Twitter',
            }
          ]
        },
      ],
    },
    prism: {
      // One of:
      // dracula, duotoneDark, duotoneLight, github, nightOwl, nightOwlLight,
      // oceanicNext, palenight, shad esOfPurple, ultramin, vsDark
      theme: require('prism-react-renderer/themes/vsDark'),
    },
    algolia: {
      apiKey: 'a6ef919bce0b83de1bcbad1d4ef753f8',
      indexName: 'gulpjs',
      algoliaOptions: {} // Optional, if provided by Algolia
    },
    gtag: {
      trackingID: 'GTM-M5SLS2N',
    },
    companyLogos: [
      {
        href: 'https://stickermule.com',
        src: 'sponsor-logos/sticker-mule.svg',
        alt: 'Sticker Mule logo',
        title: 'Sticker Mule',
        style: {
          flexBasis: '120px',
        },
      },
      {
        href: 'https://icons8.com/',
        src: 'sponsor-logos/icons8.svg',
        alt: 'Icons8 logo',
        title: 'Icons8',
        style: {
          flexBasis: '80px',
        },
      },
      {
        href: 'https://frontendmasters.com/',
        src: 'sponsor-logos/frontend-masters.png',
        alt: 'Frontend Masters logo',
        title: 'Frontend Masters',
        style: {
          flexBasis: '200px',
        },
      },
      {
        href: 'https://www.codeinwp.com/',
        src: 'sponsor-logos/codeinwp.svg',
        alt: 'CodeinWP',
        title: 'CodeinWP',
        style: {
          flexBasis: '150px',
        },
      },
      {
        href: 'https://clay.global/',
        src: 'sponsor-logos/clay.png',
        alt: 'Clay logo',
        title: 'Clay',
        style: {
          flexBasis: '150px',
        },
      },
      {
        href: 'https://twitter.com/chromiumdev',
        src: 'sponsor-logos/chrome.svg',
        alt: 'Chrome logo',
        title: 'Chrome Developers',
        style: {
          flexBasis: '80px',
        },
      },
      {
        href: 'https://word.tips/',
        src: 'sponsor-logos/word-tips.png',
        alt: 'WordTips logo',
        title: 'WordTips',
        style: {
          flexBasis: '150px',
        },
      },
    ]
  },
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,400&family=Roboto:wght@900&display=swap'
  ],
  themes: [
    ['@docusaurus/theme-classic', {
      customCss: require.resolve('./src/css/docs.css')
    }],
    ['@docusaurus/theme-search-algolia', {}]
  ],
  plugins: [
    ['@docusaurus/plugin-content-docs', {
      path: 'docs',
      sidebarPath: require.resolve('./sidebars.json'),
      // This is a holdover because we set up original docusaurus
      // to support translations and v2 doesn't support them yet
      routeBasePath: 'docs/ru/',
    }],
    ['docusaurus-plugin-sass', {}],
    ['@docusaurus/plugin-content-pages', {}],
    isProd && ['@docusaurus/plugin-google-gtag', {}],
    isProd && ['@docusaurus/plugin-sitemap', {}],
  ]
};

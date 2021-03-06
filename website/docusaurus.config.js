const remarkMath = require("remark-math");
const rehypeKatex = require("rehype-katex");

const algoliaConfig = require('./algolia.config.json');
const googleAnalyticsConfig = require('./google-analytics.config.json');

const isEmptyObject = obj => {
  for (field in obj) return false;
  return true;
};

const isSearchable = !isEmptyObject(algoliaConfig);
const hasGoogleAnalytics = !isEmptyObject(googleAnalyticsConfig);

const websiteConfig = {
  title: 'Math U',
  tagline: 'by Matt',
  url: 'https://otter275.github.io',
  baseUrl: '/math/',
  favicon: 'img/favicon.png',
  organizationName: 'otter275', // Usually your GitHub org/user name.
  projectName: 'math', // Usually your repo name.
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/nightOwl'),
      darkTheme: require('prism-react-renderer/themes/nightOwl'),
      additionalLanguages: ['python', 'r'],
    },
    navbar: {
      title: 'Math U',
      logo: {
        alt: 'Math U Logo',
        src: 'img/math-u-logo-32x32.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
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
              label: 'Math U',
              to: 'docs/',
            },
            {
              label: '통계학',
              to: 'docs/00-statistics/00',
            },
            {
              label: '확률론',
              to: 'docs/01-probability-theory/00',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Math U, by Matt. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [remarkMath],
          rehypePlugins: [[rehypeKatex, {strict: false}]],
        },
        blog: {
          showReadingTime: true,
          remarkPlugins: [remarkMath],
          rehypePlugins: [[rehypeKatex, {strict: false}]],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      require.resolve('docusaurus-lunr-search'), {
        languages: [
          'en',
          // 'ko', // It's not supported yet.
        ]
      }
    ],
  ],
};

if (isSearchable) {
  websiteConfig['themeConfig']['algolia'] = algoliaConfig;
}
if (hasGoogleAnalytics) {
  websiteConfig['themeConfig']['googleAnalytics'] = googleAnalyticsConfig;
}

module.exports = websiteConfig;
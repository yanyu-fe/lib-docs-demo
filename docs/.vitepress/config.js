const base = process.env.NODE_ENV === 'production' ? '/test-template' : '';
const { resolve } = require('path');

module.exports = {
  title: 'lib-docs-demo',
  description: 'this is vue lib docs demo',
  // 扫描srcIncludes里面的 *.md文件
  srcIncludes: ['src'],
  alias: {
    // 为了能在demo中正确的使用  import { X } from 'test-template'
    [`lib-demo`]: resolve('./src'),
  },
  base,
  themeConfig: {
    logo: '../logo.svg',
    nav: [{ text: 'demo', link: '/math' }],
    lang: '',
    locales: {
      '/': {
        lang: '',
        title: '组件文档',
        description: '',
        label: '中文',
        selectText: '语言',
        nav: [
          {text: '文档', link: '/vue/' },
          {text:'组件',link:'/components/'}
        ],
        sidebar:{
          '/vue/':[
            {
              text:"",
              children:[
                {text:"文档",link:"/vue/"},
                {text:"快速开始",link: "/vue/quick-start"}
              ]
            }
          ],
          '/components/':[
            {
              text:"",
              children:[
                {text:"组件总览",link: "/components/"},
                {text:"Button",link: "/components/button/"},
              ]
            }
          ]
        }
      },
    },
    search: {
      searchMaxSuggestions: 10,
    },
    repo: 'yanyu-fe/lib-docs-demo',
    repoLabel: 'Github',
    lastUpdated: true,
    prevLink: true,
    nextLink: true,
  },
};

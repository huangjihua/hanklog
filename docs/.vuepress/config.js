var container = require('markdown-it-container')
module.exports = {
  title: 'Study log',
  base: '/hanklog/',
  description: '学习随笔', //描述
  dest: 'dist/',
  port: 8080,
  markdown: {
    lineNumbers: true,
    toc: { includeLevel: [1, 2] },
    config: md => {
      md.set({ html: true, breaks: true })
      // .use(...createContainer('demo','DEMO'))
    }
  },
  locales: {
    '/': {
      lang: 'zh-CN',
      title: "Hank's eassy",
      description: 'Hank’s eassy'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `./logo.png` }],
    ['link', { rel: 'manifest', href: './manifest.json' }],
    [('meta', { name: 'theme-color', content: '#3eaf7c' })],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ],
    [
      'link',
      { rel: 'apple-touch-icon', href: `./icons/apple-touch-icon-152x152.png` }
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: './icons/safari-pinned-tab.svg',
        color: '#3eaf7c'
      }
    ],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: './icons/msapplication-icon-144x144.png'
      }
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: true,
  themeConfig: {
    repo: 'https://github.com/huangjihua/hankLog.git',
    repoLabel: '源码',
    editLinks: false,
    docsDir: 'docs',
    sidebarDepth: 2,
    search: true,
    searchMaxSuggestions: 10,
    // #697 Provided by the official algolia team.
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        serviceWorker: {
          updatePopup: {
            message: '发现新内容可用',
            buttonText: '刷新'
          }
        },
        nav: [
          // {
          //   text: 'Home',
          //   link: '/'
          // },
          {
            text: '基础',
            link: '/basics/'
          },
          {
            text: 'javascript',
            items: [
              {
                text: 'basics',
                link: '/javascript/basics/'
              },
              {
                text: 'ES5',
                link: '/javascript/es5/'
              },
              {
                text: 'ES6',
                link: '/javascript/es6/'
              },
              {
                text: 'ES7',
                link: '/javascript/es7/'
              },
              {
                text: 'ES8',
                link: '/javascript/es8/'
              }
            ]
          },
          {
            text: 'css',
            items: [
              {
                text: '书写和命名',
                link: '/css/writing-naming'
              },
              {
                text: '常用属性',
                link: '/css/common-attributes'
              },
              {
                text: '盒模型',
                link: '/css/box-mode'
              },
              {
                text: '选择器',
                link: '/css/selector'
              },
              {
                text: '定位方式',
                link: '/css/position-mode'
              },
              {
                text: '常见布局',
                link: '/css/layout'
              },
              {
                text: 'CSS3新增特性',
                link: '/css/new-attributes'
              },
              {
                text: 'CSS定位方式',
                link: '/css/position-mode'
              },
              {
                text: '常用meta',
                link: '/css/meta'
              },
              {
                text: 'Viewport理解',
                link: '/css/viewport'
              },
              {
                text: 'Css Module',
                link: '/css/css-module'
              }
            ]
          },
          {
            text: '题库',
            items: [
              {
                text: 'JS基础',
                link: '/question/js-base'
              },
              {
                text: '算法',
                link: '/question/match'
              }
            ]
          },
          // {
          //     text: '框架',
          //     link: '/frame/',
          // },
          {
            text: '工具',
            items: [
              {
                text: '你不知道的构建工具',
                link: '/efficiency/'
              },
              {
                text: 'webpack',
                link: '/efficiency/webpack'
              }
            ]
          },
          {
            text: 'Blog',
            link: 'http://huangjihua.com.cn'
          }
        ],
        sidebar: {
          '/javascript/basics/': genSidebarConfig('基础篇', [
            '作用域问题',
            'JS原始类型有那些'
          ]),
          '/javascript/es5/': genSidebarConfig('javascript', ['引用数据类型']),
          '/javascript/es6/': genSidebarConfig('javascript', [
            //#endregion
          ]),
          '/javascript/es7/': genSidebarConfig('javascript', [
            //#endregion
          ]),
          '/javascript/es8/': genSidebarConfig('javascript', [
            //#endregion
          ]),
          '/efficiency/': genSidebarConfig('高效', ['你不知道的构建工具']),
          '/basics/': genSidebarConfig('基础知识', [
            '如何学习前端',
            'web缓存策略',
            'EventLoop',
            '重绘和和回流'
          ])

          // '/frame/':[
          //     {
          //     title:'框架',
          //     collapsable: false,
          //     children: [

          //         ]
          //     }
          // ]
        }
      }
    }
  }
  // baseUrl: process.env.NODE_ENV === 'production' ?'/dist/' :'/'
}

function genSidebarConfig(title, children) {
  return [
    {
      title,
      collapsable: true,
      children: children
    }
  ]
}

function createContainer(klass, defaultTitle) {
  return [
    container,
    klass,
    {
      render(tokens, idx) {
        const token = tokens[idx]
        const info = token.info
          .trim()
          .slice(klass.length)
          .trim()
        if (token.nesting === 1) {
          return `<div class="${klass} custom-block"><p class="custom-block-title">${info ||
            defaultTitle}</p>\n`
        } else {
          return `</div>\n`
        }
      }
    }
  ]
}

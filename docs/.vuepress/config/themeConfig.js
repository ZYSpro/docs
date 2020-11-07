const links = require('./links')

module.exports = {
  lang: 'zh-CN', // en zh-CN
  author: 'ZYS',
  authorLink: 'https://github.com/cnguu/',
  avatar: '',
  social: {
    github: 'https://github.com/cnguu/',
    facebook: 'https://www.facebook.com/profile.php?id=100031941487870',
    twitter: 'https://twitter.com/cnguu_cn',
    dribbble: 'https://dribbble.com/cnguu',
    weibo: 'https://weibo.com/gu642779596',
    zhihu: 'https://www.zhihu.com/people/gleehub',
    qq: 'tencent://message/?uin=642779596',
  },
  locales: {
    title: '无问东西',
    description: 'Everything happens for a reason',
  },
  navs: [
    { text: '编程技术', link: '/program/' },
    { text: '生活兴趣', link: '/life/' },
    { text: '软件工具', link: '/tool/' },
    { text: '其它', link: '/other/' },
  ],
  nameplate: { title: 'ZYS' },
  buttons: [
    { text: '阅读列表', link: '/posts/', type: 'primary' },
    { text: 'About Me', link: '/about.html', type: 'default' }
  ],
  reward: [
    // 'https://static.xmt.cn/ca717dde8ae14ea7ab3c8c74b8711414.png',
    // 'https://static.xmt.cn/acc7d3d02b0c4a35a3735268cbb2cce0.png',
  ],
  timeline: true,
  links,
  about: true,
  search: { type: 'default', size: 10 },
  dark: true,
  // ityped: {
  //   typeSpeed: 300,           // 正常速度
  //   backSpeed: 100,           // 反向速度
  //   startDelay: 300,          // 开始延迟（毫秒）
  //   backDelay: 1300,          // 反向延迟（毫秒）
  //   loop: true,               // 循环
  //   showCursor: true,         // 显示指针
  //   placeholder: false,       // 占位
  //   disableBackTyping: false, // 禁用反向输入
  //   cursorChar: '丨',         // 指针字符
  // },
  post: {
    bubbles: true,
    // cover: [
    //   '/20171231/favicon.ico',
    //   'https://static.xmt.cn/cc50c217cbe342ce951324583f2c6139.png',
    // ],
    // pageSize: 12,
    // pageSizeOptions: ['12', '24', '48', '96'],
  },
  // discuss: 'vssue',
  // valine: {
  //   appId: '',
  //   appKey: '',
  //   placeholder: '在这里写下你的留言丨支持 MarkDown 语法',
  //   notify: false,
  //   verify: true,
  //   avatar: 'mp',
  //   pageSize: 8,
  //   recordIP: true,
  //   lang: 'zh-cn',
  // },
  // crisp: '',
  // tagSize: 100,
  // baiDu: {
  //   tongJi: '',
  //   autoPush: true,
  //   pinYin: true,
  // },
  // curtain: {
  //   tip: '页面准备中...',
  //   textShadow: '#e91e63',
  // },
}

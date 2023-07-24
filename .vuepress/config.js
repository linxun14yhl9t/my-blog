module.exports = {
  title: "Leo",
  description: "积跬步以至千里",
  dest: "public",
  base: "/my-blog/",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  theme: "reco",
  themeConfig: {
    nav: [
      {
        text: "主页",
        link: "/",
        icon: "reco-home",
      },
      {
        text: "时间轴",
        link: "/timeline/",
        icon: "reco-date",
      },
    ],
    sidebar: {
      "/docs/theme-reco/": ["", "theme", "plugin", "api"],
    },
    type: "blog",
    blogConfig: {
      category: {
        location: 2,
        text: "分类",
      },
      tag: {
        location: 3,
        text: "标签",
      },
    },
    logo: "/logo.png",
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated",
    author: "Leo",
    authorAvatar: "/avatar.png",
    startYear: "2020",
  },
  markdown: {
    lineNumbers: true,
  },
  plugins: {
    locales: {
      "/": {
        lang: "zh-CN",
      },
    },
    "vuepress-plugin-auto-sidebar": {
      collapse: {
        open: true,
      },
    },
    "@vuepress-reco/vuepress-plugin-kan-ban-niang": {
      theme: [
        "miku",
        "whiteCat",
        "haru1",
        "haru2",
        "haruto",
        "koharu",
        "izumi",
        "shizuku",
        "wanko",
        "blackCat",
        "z16",
      ],
      clean: false,
      messages: {
        welcome: "欢迎来到我的博客",
        home: "心里的花，我想要带你回家。",
        theme: "好吧，希望你能喜欢我的其他小伙伴。",
        close: "你不喜欢我了吗？痴痴地望着你。",
      },
      messageStyle: {
        right: "68px",
        bottom: "290px",
      },
      width: 250,
      height: 320,
    },

    // 音乐播放器

    meting: {
      meting: {
        // 网易
        server: "netease",
        // 读取歌单列表
        type: "playlist",
        mid: "6714480500",
      },
      // 不配置该项的话不会出现全局播放器
      aplayer: {
        // 吸底模式
        fixed: true,
        mini: true,
        // 自动播放
        autoplay: true,
        // 歌曲栏折叠
        listFolded: true,
        // 颜色
        theme: "#f9bcdd",
        // 播放顺序为随机
        order: "random",
        // 初始音量
        volume: 0.1,
        // 关闭歌词显示
        lrcType: 0,
      },
      mobile: {
        // 手机端去掉cover图
        cover: false,
      },
    },
    "vuepress-plugin-nuggets-style-copy": {
      copyText: "复制代码",
      tip: {
        content: "复制成功",
      },
    },
    "cursor-effects": {
      size: 2, // size of the particle, default: 2
      shape: "circle", // ['star' | 'circle'], // shape of the particle, default: 'star'
      zIndex: 999999999, // z-index property of the canvas, default: 999999999
    },
    "dynamic-title": {
      // showIcon: 'https://www.typescriptlang.org/favicon-32x32.png?v=8944a05a8b601855de116c8a56d3b3ae',
      showText: "客官欢迎回来~",
      // hideIcon: 'https://www.typescriptlang.org/favicon-32x32.png?v=8944a05a8b601855de116c8a56d3b3ae',
      hideText: "客官不要走嘛~",
      recoverTime: 2000,
    },
    "permalink-pinyin": {
      lowercase: true,
      separator: "-",
    },
  },
};

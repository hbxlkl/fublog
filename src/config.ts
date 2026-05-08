// src/config.ts
// Fuwari 博客核心配置文件，所有自定义设置均在此修改
export const siteConfig = {
  // 1. 基础站点信息（必改）
  title: "石门摄影", // 例如：「星尘日志」「晚风叙谈」
  subtitle: "作品展示 /摄影作品", // 例如：「记录生活与技术的碎碎念」「保持热爱，奔赴山海」
  lang: "zh_CN", // 网站语言，默认zh_CN（中文），无需修改
  siteUrl: "https://blog.87717071.xyz", // 部署后的完整域名（如Cloudflare的xxx.pages.dev）
  author: "kangsky", // 你的名字/昵称
  email: "xproxy@qq.com", // 可选，用于联系
  avatar: "assets/images/avatar.png", // 头像路径，可替换为自己的头像（放在src/assets/images下）
  
  // 2. 主题外观配置（可自定义）
  themeColor: {
    hue: 250, // 主题色调（0-360），250=淡蓝，180=淡绿，30=橙色，可自行调整
    fixed: false, // 是否固定色调（false=随页面滚动轻微变化，true=固定色调）
  },
  banner: {
    enable: true, // 是否显示顶部横幅图
    src: "assets/images/banner.png", // 横幅图路径，替换为自己的图片（放在src/assets/images下）
    blur: 4, // 横幅模糊度（0-10），数值越大越模糊
    opacity: 0.85, // 横幅透明度（0-1），数值越小越透明
  },
  font: {
    sans: "Inter, system-ui, sans-serif", // 无衬线字体，无需修改（适配多设备）
    serif: "Georgia, serif", // 衬线字体，无需修改
  },
  
  // 3. 导航栏配置（可增删修改）
  nav: [
    { name: "首页", path: "/" }, // 首页导航，无需修改路径
    { name: "文章", path: "/posts" }, // 文章列表页，无需修改路径
    { name: "分类", path: "/categories" }, // 分类页，无需修改路径
    { name: "标签", path: "/tags" }, // 标签页，无需修改路径
    { name: "关于", path: "/about" }, // 关于页，无需修改路径
    // 可新增导航项，例如：{ name: "作品集", path: "/portfolio" }
  ],
  
  // 4. 侧边栏配置
  sidebar: {
    enable: true, // 是否显示侧边栏
    position: "right", // 侧边栏位置（left=左侧，right=右侧）
    links: [
      // 侧边栏跳转链接（可增删）
      { name: "GitHub", url: "https://github.com/hbxlkl", icon: "github" },
      { name: "首页", url: "https://blog.87717071.xyz", icon: "zhihu" },
      { name: "公众号", url: "公众号二维码图片路径", icon: "wechat" },
    ],
  },
  
  // 5. 文章相关配置
  posts: {
    perPage: 10, // 每页显示的文章数量
    sortBy: "published", // 排序方式（published=按发布时间，title=按标题）
    sortOrder: "desc", // 排序顺序（desc=倒序，asc=正序）
    excerptLength: 150, // 文章摘要长度（字符数）
    showCover: true, // 文章列表是否显示封面图
    showDate: true, // 是否显示发布日期
    showTags: true, // 是否显示文章标签
  },
  
  // 6. 底部配置
  footer: {
    copyright: `© ${new Date().getFullYear()} ${siteConfig.author}. All rights reserved.`, // 版权信息（自动获取当前年份）
    message: "感谢访问，愿我们都能在平凡中遇见光", // 底部寄语（可自定义）
  },
  
  // 7. 其他配置（无需修改，保持默认即可）
  seo: {
    metaTitle: `${siteConfig.title} | ${siteConfig.subtitle}`, // 搜索引擎标题
    metaDescription: siteConfig.subtitle, // 搜索引擎描述
    ogImage: `${siteConfig.siteUrl}/assets/images/banner.png`, // 社交平台分享图片
  },
  isProd: import.meta.env.PROD, // 生产环境判断，无需修改
};

// 可选：自定义图标（如需新增侧边栏图标，可在此添加）
export const iconMap = {
  github: "https://cdn.jsdelivr.net/npm/remixicon@3.5.0/icons/ri/github-fill.svg",
  zhihu: "https://cdn.jsdelivr.net/npm/remixicon@3.5.0/icons/ri/zhihu-fill.svg",
  wechat: "https://cdn.jsdelivr.net/npm/remixicon@3.5.0/icons/ri/wechat-fill.svg",
  // 可新增图标，例如：twitter: "图标链接"
};

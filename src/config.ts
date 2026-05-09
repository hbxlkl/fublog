import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "石门摄影", // 你的博客中文标题
	subtitle: "摄影作品分享和展示", // 你的中文副标题/简介
	lang: "zh_CN", // 博客语言 Language code, e.g. 'en', 简体中文编码'zh_CN', 'ja', etc.
	themeColor: {
	themeColor: {
		hue: 250, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: false, // Hide the theme color picker for visitors
	},
	banner: {
		enable: false,
		src: "assets/images/demo-banner.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: false, // Display the credit text of the banner image
			text: "", // Credit text to be displayed
			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [  // 网站图标修改
		// Leave this array empty to use the default favicon
		 {
		   src: '/favicon/favicon.ico',    // Path of the favicon, relative to the /public directory 图标地址
		   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
		   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		 }
	],
};

// 导航栏配置：
export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home, // 首页（预设项，无需修改，会自动显示中文）
		LinkPreset.Archive, // 归档（预设项，无需修改，会自动显示中文）
		LinkPreset.About, // 关于（预设项，无需修改，会自动显示中文）
		{
			name: "GitHub仓库", // 平台名可保留英文，也可改为「代码仓库」
			url: "https://github.com/hbxlkl/fublog", // 替换为你的GitHub地址 Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
	],
};

// 导航栏配置结束

// 个人资料配置开始：替换英文为中文
export const profileConfig: ProfileConfig = {
	avatar: "assets/images/logo.jpg", // 替换为你的头像路径（放在src/assets/images下）Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "石门摄影",
	bio: "摄影作品分享和展示",
	links: [
		{
			name: "Twitter",
			icon: "fa6-brands:twitter", // Visit https://icones.js.org/ for icon codes
			// You will need to install the corresponding icon set if it's not already included
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://twitter.com",
		},
		{
			name: "Steam游戏平台",
			icon: "fa6-brands:steam",
			url: "https://store.steampowered.com",
		},
		{
			name: "GitHub代码仓库",
			icon: "fa6-brands:github",
			url: "https://github.com/hbxlkl/fublog",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};




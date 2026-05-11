import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";



export const siteConfig: SiteConfig = {
	title: "石门摄影",
	subtitle: "摄影作品分享和展示",
	lang: "zh_CN", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
	themeColor: {
		hue: 250, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: false, // Hide the theme color picker for visitors
	},
	banner: {
		enable: true, // 重点：必须设为true，设为false就是关闭横幅功能，图片肯定不显示
		src: "assets/images/hengfu.jpeg", // 横幅图片地址 Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: false, // Display the credit text of the banner image
			text: "石 门 摄 影 博 客", // 图片上文字显示 Credit text to be displayed
			url: "https://blog.87717071.xyz", // (Optional) 文字图片链接 URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},

	
	favicon: [
		// 网站ico图标设置 Leave this array empty to use the default favicon
		 {
		   src: '/favicon/favicon.ico',    // 网站ico图标地址 图标路径，对应上面上传的路径（相对于public目录，不可写错）
		   theme: 'light',              // 可选：设置为light/dark，仅当有明暗模式不同图标时需配置，默认light即可
		   sizes: '32x32',              // 可选：填写你的图标尺寸，与准备的图标尺寸一致，增强兼容性
		 }
	],
};



	// 下面代码是顶部链接
export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home, // 主页 自动中文
		LinkPreset.Archive, // 归档 自动中文
		LinkPreset.About, // 关于 自动中文

		{			
			name: "友链", // 链接名称
			url: "#", // 链接网址
			external: true, // 显示一个外部链接图标，并会在新标签页中打开
		},

		{			
			name: "GitHub仓库", // 链接名称
			url: "https://github.com/hbxlkl/fublog", // 链接网址
			external: true, // 显示一个外部链接图标，并会在新标签页中打开
		},
		{
			name: "哔哩哔哩", // 链接名称
			url: "https://www.bilibili.com", // 链接网址
			external: true, // 显示一个外部链接图标，并会在新标签页中打开
		},
	],
};




export const profileConfig: ProfileConfig = {
	avatar: "assets/images/logo.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "石门摄影",
	bio: "摄影作品分享与展示",
	links: [
		{
			name: "Twitter",
			icon: "fa6-brands:twitter", // Visit https://icones.js.org/ for icon codes
			// You will need to install the corresponding icon set if it's not already included
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://twitter.com",
		},
		{
			name: "Steam",
			icon: "fa6-brands:steam",
			url: "https://store.steampowered.com",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/hbxlkl/fublog",
		},
	],
};



	// 下面这个是添加一个左侧新的链接
		// {
			// name: "Steam",
			// icon: "fa6-brands:steam",
			// url: "https://store.steampowered.com",
		// },

	// - 图标使用说明：配置中的icon（如fa6-brands:github）来自icones.js.org（https://icones.js.org/），若新增图标（如知乎、微信），需先执行pnpm add @iconify-json/对应图标集（例：pnpm add @iconify-json/fa6-brands）安装图标集。




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

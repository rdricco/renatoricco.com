const config = {
	siteTitle: 'Renato Ricco', // Site title.
	siteTitleShort: 'ricco', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
	siteTitleAlt: 'Renato Ricco | Portfolio', // Alternative site title for SEO.
	siteLogo: '/logos/logo-1024.png', // Logo used for SEO and manifest.
	siteUrl: 'https://elated-wozniak-10af2e.netlify.com', // Domain of your website without pathPrefix.
	pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
	siteDescription: 'My personal portfolio.', // Website description used for RSS feeds/meta description tag.
	siteRss: '/rss.xml', // Path to the RSS file.
	siteFBAppID: 'XXXXXXXXXXXX', // FB Application ID for using app insights
	googleAnalyticsID: 'UA-XXXXXXXX-X', // GA tracking ID.
	disqusShortname: 'https-vagr9k-github-io-gatsby-advanced-starter', // Disqus shortname.
	postDefaultCategoryID: 'Tech', // Default category for posts.
	dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
	dateFormat: 'DD/MM/YYYY', // Date format for display.
	postsPerPage: 20, // Amount of posts displayed per listing page.
	userName: 'Renato Ricco', // Username to display in the author segment.
	userEmail: 'contato@renatoricco.com', // Email used for RSS feed's author segment
	userTwitter: 'r_ricco', // Optionally renders "Follow Me" in the UserInfo segment.
	userLocation: 'São Paulo, Brasil', // User location to display in the author segment.
	userAvatar: 'https://api.adorable.io/avatars/150/test.png', // User avatar to display in the author segment.
	userDescription:
		"Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
	// Links to social profiles/projects you want to display in the author segment/navigation bar.
	userLinks: [
		{
			label: 'GitHub',
			url: 'https://github.com/rdricco',
			iconClassName: 'fa fa-github'
		},
		{
			label: 'Twitter',
			url: 'https://twitter.com/r_ricco',
			iconClassName: 'fa fa-twitter'
		},
		{
			label: 'Email',
			url: 'mailto:contato@renatoricco.com',
			iconClassName: 'fa fa-envelope'
		}
	],
	copyright: 'Copyright © 2019. Renato Ricco', // Copyright string for the footer of the website and RSS feed.
	themeColor: '#c62828', // Used for setting manifest and progress theme colors.
	backgroundColor: '#e0e0e0' // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
	config.pathPrefix = '';
}
else {
	// Make sure pathPrefix only contains the first forward slash
	config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`;

module.exports = config;

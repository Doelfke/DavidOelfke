const contentful =  require("contentful")
require('dotenv').config()

const generateUrl = (id, title) => {
    return `/blog/${title.toLowerCase().replaceAll(" ", "-")}-${id}`;
};

/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://davidoelfke.dev',
    generateRobotsTxt: true,

    additionalPaths: async (config) => {
        const client = contentful.createClient({
            space: process.env.CONTENTFUL_SPACE,
            accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        });

        const result = await client.getEntries();

        const pages = result.items.map((post) => {
            const postLink = generateUrl(post.sys.id, post.fields.title);

            return {
                loc: postLink,
                lastmod: post.sys.createdAt,
                changefreq: 'daily',
                priority: 0.7,
            }
        })

        return pages
    }
}
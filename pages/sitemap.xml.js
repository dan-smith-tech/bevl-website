// const EXTERNAL_DATA_URL = "https://bevl.app";

function generateSiteMap(posts, date) {
	return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://bevl.app</loc>
		 <lastmod>${date}</lastmod>
     </url>
     <url>
       <loc>https://bevl.app/features/tasks</loc>
		 <lastmod>${date}</lastmod>
     </url>
     <url>
       <loc>https://bevl.app/features/lists</loc>
		 <lastmod>${date}</lastmod>
     </url>
     <url>
       <loc>https://bevl.app/features/labels</loc>
		 <lastmod>${date}</lastmod>
     </url>
     <url>
       <loc>https://bevl.app/magazine</loc>
		 <lastmod>${date}</lastmod>
     </url>
     <url>
       <loc>https://bevl.app/newsletter</loc>
		 <lastmod>${date}</lastmod>
     </url>
     <url>
       <loc>https://bevl.app/help</loc>
		 <lastmod>${date}</lastmod>
     </url>
     <url>
       <loc>https://bevl.app/contact</loc>
		 <lastmod>${date}</lastmod>
     </url>
     <url>
       <loc>https://bevl.app/story</loc>
		 <lastmod>${date}</lastmod>
     </url>
     <url>
       <loc>https://bevl.app/philosophy</loc>
		 <lastmod>${date}</lastmod>
     </url>
     <url>
       <loc>https://bevl.app/pricing</loc>
		 <lastmod>${date}</lastmod>
     </url>
     ${posts
			.map(({ id }) => {
				return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/${id}`}</loc>
       </url>
     `;
			})
			.join("")}
   </urlset>
 `;
}

export async function getServerSideProps({ res }) {
	// const request = await fetch(EXTERNAL_DATA_URL);
	// const posts = await request.json();

	const sitemap = generateSiteMap([], new Date().toISOString());

	res.setHeader("Content-Type", "text/xml");
	res.write(sitemap);
	res.end();

	return {
		props: {},
	};
}

function SiteMap() {}

export default SiteMap;

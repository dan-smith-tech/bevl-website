// const EXTERNAL_DATA_URL = "https://www.bevl.app";

function generateSiteMap(posts, date) {
	return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://www.bevl.app</loc>
		 <lastmod>${date}</lastmod>
     </url>
     <url>
       <loc>https://www.bevl.app/about</loc>
		 <lastmod>${date}</lastmod>
     </url>
     <url>
       <loc>https://www.bevl.app/magazine</loc>
		 <lastmod>${date}</lastmod>
     </url>
     <url>
       <loc>https://www.bevl.app/newsletter</loc>
		 <lastmod>${date}</lastmod>
     </url>
     <url>
       <loc>https://www.bevl.app/help</loc>
		 <lastmod>${date}</lastmod>
     </url>
     <url>
       <loc>https://www.bevl.app/contact</loc>
		 <lastmod>${date}</lastmod>
     </url>
     <url>
       <loc>https://www.bevl.app/pricing</loc>
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

export default function SiteMap() {}

import Head from "next/head";
// import Image from "next/image";

// import MagazineCard from "../../components/magazine/Card";
import ProductivityTipsSignup from "../../components/ProductivityTipsSignup";

// import dbConnect from "../../lib/dbConnect";
// import MagazinePost from "../../models/MagazinePost";

import magazineStyles from "../../styles/magazine/magazine.module.css";

// export async function getStaticProps() {
// 	await dbConnect();
// 	const data = await MagazinePost.find({}).select("imageUrl title summary postUrl");
// 	const posts = JSON.parse(JSON.stringify(data)).reverse();

// 	const recentPosts = posts.slice(0, 6);
// 	const allPosts = posts.slice(6);

// 	return {
// 		props: {
// 			recentPosts,
// 			allPosts,
// 		},
// 		revalidate: 10,
// 	};
// }

function Magazine() {
	// { recentPosts, allPosts }
	return (
		<>
			<Head>
				<title>Bevl • Magazine</title>
			</Head>
			<div className={"container-full"}>
				<div className={"container-partial " + magazineStyles["container-partial"]}>
					<p>The Bevl magazine is launching soon. Sign up to the newsletter to get notified of new posts:</p>
				</div>
			</div>
			<ProductivityTipsSignup />
			{/* <div className={"container-full " + magazineStyles["container-full-content"]}>
				<div className={"container-partial"}>
					<div className={magazineStyles["title"]}>
						<h1>Magazine</h1>
					</div>
					<div className={magazineStyles["container-cards"]}>
						{recentPosts &&
							recentPosts.map((post, i) => (
								<MagazineCard
									imageLink={post.imageUrl}
									title={post.title}
									summary={post.summary}
									postLink={post.postUrl}
								/>
							))}
					</div>
				</div>
			</div>
			<NewsletterSignup />
			<div className={"container-full " + magazineStyles["container-full-content"]}>
				<div className={"container-partial"}>
					<div className={magazineStyles["container-cards"]}>
						{allPosts &&
							allPosts.map((post, i) => (
								<MagazineCard
									imageLink={post.imageUrl}
									title={post.title}
									summary={post.summary}
									postLink={post.postUrl}
								/>
							))}
					</div>
				</div>
			</div> */}
		</>
	);
}

export default Magazine;

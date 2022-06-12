import Image from "next/image";

import magazineStyles from "../../styles/magazine/magazine.module.css";

import MagazineCard from "../../components/magazine/Card";
import NewsletterSignup from "../../components/NewsletterSignup";

import dbConnect from "../../lib/dbConnect";
import MagazinePost from "../../models/MagazinePost";

export async function getStaticProps() {
	await dbConnect();
	const data = await MagazinePost.find({}).select("imageUrl title summary postUrl");
	const posts = JSON.parse(JSON.stringify(data)).reverse();

	const recentPosts = posts.slice(0, 6);
	const allPosts = posts.slice(6);

	return {
		props: {
			recentPosts,
			allPosts,
		},
		revalidate: 10,
	};
}

function Magazine({ recentPosts, allPosts }) {
	return (
		<>
			<div className={"container-full " + magazineStyles["container-full-content"]}>
				<div className={"container-partial"}>
					<div className={magazineStyles["title"]}>
						<h1>Magazine</h1>
					</div>
					<div className={magazineStyles["container-cards"]}>{recentPosts && recentPosts.map((post, i) => <MagazineCard imageLink={post.imageUrl} title={post.title} summary={post.summary} postLink={post.postUrl} />)}</div>
				</div>
			</div>
			<NewsletterSignup />
			<div className={"container-full " + magazineStyles["container-full-content"]}>
				<div className={"container-partial"}>
					<div className={magazineStyles["container-cards"]}>{allPosts && allPosts.map((post, i) => <MagazineCard imageLink={post.imageUrl} title={post.title} summary={post.summary} postLink={post.postUrl} />)}</div>
				</div>
			</div>
		</>
	);
}

export default Magazine;

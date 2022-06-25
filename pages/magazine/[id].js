import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import postStyles from "../../styles/magazine/post.module.css";
import Advertisement from "../../components/magazine/Advertisement";
import MagazineCard from "../../components/magazine/Card";
import ProductivityTipsSignup from "../../components/ProductivityTipsSignup";

import dbConnect from "../../lib/dbConnect";
import MagazinePost from "../../models/MagazinePost";

export async function getStaticPaths() {
	await dbConnect();
	const data = await MagazinePost.find({}).select("postUrl");
	const posts = JSON.parse(JSON.stringify(data));

	var paths = [];
	posts.forEach((post, i) => {
		paths[i] = { params: { id: post.postUrl } };
	});

	return {
		paths,
		fallback: "blocking",
	};
}

export async function getStaticProps(context) {
	const id = context.params.id;

	await dbConnect();
	const postData = await MagazinePost.findOne({ postUrl: id });
	if (!postData) return { notFound: true };
	const post = JSON.parse(JSON.stringify(postData));
	const postsData = await MagazinePost.find({}).select(
		"_id imageUrl title summary postUrl"
	);
	const posts = JSON.parse(JSON.stringify(postsData)).reverse();

	const relatedPosts = [];
	for (var i = 0; i < posts.length; i++) {
		if (posts[i]._id != post._id) {
			relatedPosts.push(posts[i]);
			if (relatedPosts.length >= 2) break;
		}
	}

	return {
		props: {
			post,
			relatedPosts,
		},
		revalidate: 10,
	};
}

function Post({ post, relatedPosts }) {
	return (
		<>
			<Head>
				<title>Bevl • {post.title}</title>
			</Head>
			<div className={"container-full " + postStyles["container-full"]}>
				<div
					className={
						"container-partial " + postStyles["container-partial"]
					}
				>
					<h1 className={postStyles["title"]}>{post.title}</h1>
					<span className={postStyles["info"]}>
						<h4>
							By{" "}
							<Link href={"/"} draggable="false">
								Bevl.app
							</Link>
						</h4>{" "}
						<span> | </span>{" "}
						<h4>
							Updated{" "}
							{new Date(post.dateUpdated).toLocaleDateString("en-GB", {
								year: "numeric",
								month: "long",
								day: "numeric",
							})}
						</h4>
					</span>
					<div className={postStyles["container-image"]}>
						<Image
							src={post.imageUrl}
							layout="fill"
							className={postStyles["image"]}
							draggable="false"
						/>
					</div>
					<p className={postStyles["summary"]}>{post.summary}</p>
					<div
						className={postStyles["body"]}
						dangerouslySetInnerHTML={{ __html: post.body }}
					></div>
				</div>
			</div>
			<div className={"container-full " + postStyles["container-full"]}>
				<div
					className={
						"container-partial " + postStyles["container-partial"]
					}
				>
					<Advertisement />
				</div>
			</div>
			<div className={"container-full " + postStyles["container-full"]}>
				<div
					className={
						"container-partial " + postStyles["container-partial"]
					}
				>
					<div className={postStyles["container-footer-related"]}>
						<h3 className={postStyles["footer-related-title"]}>
							Related Posts
						</h3>
						<div className={postStyles["footer-related"]}>
							{relatedPosts &&
								relatedPosts.map((post, i) => (
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
			</div>
			<NewsletterSignup />
		</>
	);
}

export default Post;

import Image from "next/image";
import Link from "next/link";

import footerStyles from "../../styles/partials/footer.module.css";

export default function Footer() {
	return (
		<div
			className={"container-full " + footerStyles["container-full-content"]}
		>
			<div
				className={
					"container-partial " + footerStyles["container-partial-content"]
				}
			>
				<div>
					<div className={footerStyles["container-image"]}>
						<Link href="/">
							<a>
								<Image
									src={"/images/logo-complete.svg"}
									alt={"Bevl Logo"}
									layout="fill"
									className={footerStyles["image"]}
									draggable="false"
									loading={"eager"}
								/>
							</a>
						</Link>
					</div>
					<p className={footerStyles["copyright"]}>
						All rights reserved © bevl.app.
					</p>
				</div>
				<div className={footerStyles["container-content"]}>
					<div>
						<h4>Resources</h4>
						<ul className={footerStyles["content-column-list"]}>
							<li
								className={footerStyles["content-column-list-element"]}
							>
								<Link href={"/magazine"}>
									<a>Magazine</a>
								</Link>
							</li>
							<li
								className={footerStyles["content-column-list-element"]}
							>
								<Link href={"/newsletter"}>
									<a>Newsletter</a>
								</Link>
							</li>
							<li
								className={footerStyles["content-column-list-element"]}
							>
								<Link href={"/help"}>
									<a>Help</a>
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h4>Info</h4>
						<ul className={footerStyles["content-column-list"]}>
							<li
								className={footerStyles["content-column-list-element"]}
							>
								<Link href={"/about"}>
									<a>About</a>
								</Link>
							</li>
							<li
								className={footerStyles["content-column-list-element"]}
							>
								<Link href={"/pricing"}>
									<a>Pricing</a>
								</Link>
							</li>
							<li
								className={footerStyles["content-column-list-element"]}
							>
								<Link href={"/contact"}>
									<a>Contact</a>
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h4>App</h4>
						<ul className={footerStyles["content-column-list"]}>
							<li
								className={footerStyles["content-column-list-element"]}
							>
								<a href="/signup">Sign Up</a>
							</li>
							<li
								className={footerStyles["content-column-list-element"]}
							>
								<a href="https://feedback.bevl.app/b/nvkqngvr/feature-ideas">
									Feedback
								</a>
							</li>
							<li
								className={footerStyles["content-column-list-element"]}
							>
								<a href="https://feedback.bevl.app/roadmap">Roadmap</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

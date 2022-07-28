import Link from "next/link";

import faqStyles from "../styles/faq.module.css";

export default function FAQ() {
	return (
		<div className={"container-full " + faqStyles["container-full"]}>
			<div className={"container-partial " + faqStyles["container-partial"]}>
				<h2>FAQ</h2>
				<div className={faqStyles["container-discussion"]}>
					<div className={faqStyles["discussion"]}>
						<h3 className={faqStyles["question"]}>Who is Bevl for?</h3>
						<p className={faqStyles["answer"]}>
							Bevl is for everyone! Whether you're a student,
							professional, creative, or even retired; if you've got a
							life, Bevl was designed to organise it!
						</p>
					</div>
					<div className={faqStyles["discussion"]}>
						<h3 className={faqStyles["question"]}>Is Bevl Free?</h3>
						<p className={faqStyles["answer"]}>
							Yes! Bevl will have a free plan that includes all of its
							distinctive and most important features.
						</p>
					</div>
					<div className={faqStyles["discussion"]}>
						<h3 className={faqStyles["question"]}>
							Is Bevl for Project Management?
						</h3>
						<p className={faqStyles["answer"]}>
							Whilst there is no reason why you cannot use Bevl for
							project management, it was not designed for this purpose.
							Bevl was created for individuals to organise their lives,
							and not for businesses or teams to work on large projects.
						</p>
					</div>
					<div className={faqStyles["discussion"]}>
						<h3 className={faqStyles["question"]}>
							Is There a Specific Way I Should Use Bevl?
						</h3>
						<p className={faqStyles["answer"]}>
							Although Bevl was designed to facilitate{" "}
							<Link href="/philosophy">
								<a>my philosophy</a>
							</Link>
							, it does not restrict you to this one method of planning
							(but it is more suited to it).
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

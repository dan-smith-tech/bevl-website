import Link from "next/link";

import FAQCard from "./Card";

import faqStyles from "../../styles/faq/index.module.css";

export default function FAQ() {
	return (
		<div className={"container-full " + faqStyles["container-full"]}>
			<div className={"container-partial " + faqStyles["container-partial"]}>
				<h2>FAQ</h2>
				<div className={faqStyles["container-discussion"]}>
					<div className={faqStyles["discussion-column"]}>
						<FAQCard question={"Who is Bevl for?"}>
							Bevl is for everyone! Whether you're a student,
							professional, creative, or even retired; if you've got a
							life, Bevl was designed to organise it!
						</FAQCard>
						<FAQCard question={"Is Bevl for project management?"}>
							Whilst there is no reason why you cannot use Bevl for
							project management, it was not designed for this purpose.
							Bevl was created for individuals to organise their lives,
							and not for businesses or teams to work on large projects.
						</FAQCard>
					</div>
					<div className={faqStyles["discussion-column"]}>
						<FAQCard question={"Is Bevl free?"}>
							Yes! Bevl will have a free plan that includes all of its
							distinctive and most important features.
						</FAQCard>
						<FAQCard
							question={"Is there a specific way I should use Bevl?"}
						>
							Although Bevl was designed to facilitate{" "}
							<Link href="/about">my philosophy</Link>, it does not
							restrict you to this one method of planning (but it is more
							suited to it).
						</FAQCard>
					</div>
				</div>
			</div>
		</div>
	);
}

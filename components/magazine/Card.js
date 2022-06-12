import Link from "next/link";
import Image from "next/image";

import cardStyles from "../../styles/magazine/card.module.css";

export default function MagazineCard({ imageLink, title, summary, postLink }) {
	return (
		<Link href={"/magazine/" + postLink} draggable="false">
			<div className={cardStyles["card"]}>
				<div className={cardStyles["container-image"]}>
					<Image src={imageLink} layout="fill" className={cardStyles["image"]} draggable="false" />
				</div>
				<div className={cardStyles["container-title"]}>
					<h2 className={cardStyles["title"]}>{title}</h2>
				</div>
				<div className={cardStyles["container-summary"]}>
					<p className={cardStyles["summary"]}>{summary}</p>
				</div>
			</div>
		</Link>
	);
}

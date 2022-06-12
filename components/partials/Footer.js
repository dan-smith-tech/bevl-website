import Image from "next/image";
import Link from "next/link";

import footerStyles from "../../styles/partials/footer.module.css";

export default function Footer() {
	return (
		<div className={"container-full " + footerStyles["container-full-content"]}>
			<div className={"container-partial " + footerStyles["container-partial-content"]}>
				<div>
					<div className={footerStyles["container-image"]}>
						<Link href="/">
							<Image
								src={"/images/logo-complete.svg"}
								layout="fill"
								className={footerStyles["image"]}
								draggable="false"
							/>
						</Link>
					</div>
					<p className={footerStyles["copyright"]}>All Rights Reserved © bevl.app</p>
				</div>
			</div>
		</div>
	);
}

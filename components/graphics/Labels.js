import Image from "next/image";

import graphicStyles from "../../styles/partials/graphics.module.css";

export default function LabelsGraphic() {
	return (
		<>
			<div
				id={graphicStyles["container-label-0"]}
				className={graphicStyles["container-image"]}
			>
				<Image
					src={"/images/graphics/Label-0.png"}
					alt={"Label"}
					layout="fill"
					className={graphicStyles["image"]}
					draggable="false"
					quality={50}
					loading={"eager"}
					blurDataURL={
						"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP85xNfDwAGIwIqqYhd4AAAAABJRU5ErkJggg=="
					}
					placeholder={"blur"}
				/>
			</div>
			<div
				id={graphicStyles["container-label-1"]}
				className={graphicStyles["container-image"]}
			>
				<Image
					src={"/images/graphics/Label-1.png"}
					alt={"Label"}
					layout="fill"
					className={graphicStyles["image"]}
					draggable="false"
					quality={50}
					loading={"eager"}
					blurDataURL={
						"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP85xNfDwAGIwIqqYhd4AAAAABJRU5ErkJggg=="
					}
					placeholder={"blur"}
				/>
			</div>
			<div
				id={graphicStyles["container-label-2"]}
				className={graphicStyles["container-image"]}
			>
				<Image
					src={"/images/graphics/Label-2.png"}
					alt={"Label"}
					layout="fill"
					className={graphicStyles["image"]}
					draggable="false"
					quality={50}
					loading={"eager"}
					blurDataURL={
						"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP85xNfDwAGIwIqqYhd4AAAAABJRU5ErkJggg=="
					}
					placeholder={"blur"}
				/>
			</div>
		</>
	);
}

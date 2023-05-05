import Image from "next/image";

import graphicStyles from "../../styles/partials/graphics.module.css";

export default function ListsGraphic() {
	return (
		<>
			<div
				id={graphicStyles["container-list-0"]}
				className={graphicStyles["container-image"]}
			>
				<Image
					src={"/images/graphics/showcases/lists/list-0.png"}
					alt={"List"}
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
				id={graphicStyles["container-list-1"]}
				className={graphicStyles["container-image"]}
			>
				<Image
					src={"/images/graphics/showcases/lists/list-1.png"}
					alt={"List"}
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
				id={graphicStyles["container-list-drag"]}
				className={graphicStyles["container-image"]}
			>
				<Image
					src={"/images/graphics/showcases/lists/list-Drag.png"}
					alt={"List Drag"}
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

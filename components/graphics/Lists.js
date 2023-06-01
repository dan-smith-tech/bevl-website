import Image from "next/image";

import GraphicVisibility from "./Visibility";

import graphicStyles from "../../styles/partials/graphics.module.css";

export default function ListsGraphic() {
	return (
		<GraphicVisibility>
			<div
				id={graphicStyles["container-list-0"]}
				className={graphicStyles["visibility-container"]}
			>
				<div className={graphicStyles["container-image"]}>
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
			</div>
			<div
				id={graphicStyles["container-list-1"]}
				className={graphicStyles["visibility-container"]}
			>
				<div className={graphicStyles["container-image"]}>
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
			</div>
			<div
				id={graphicStyles["container-list-drag"]}
				className={graphicStyles["visibility-container"]}
			>
				<div className={graphicStyles["container-image"]}>
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
			</div>
		</GraphicVisibility>
	);
}

import Image from "next/image";

import GraphicVisibility from "./Visibility";

import graphicStyles from "../../styles/partials/graphics.module.css";

export default function DrawingsGraphic() {
	return (
		<GraphicVisibility>
			<div
				id={graphicStyles["container-today"]}
				className={graphicStyles["visibility-container"]}
			>
				<div className={graphicStyles["container-image"]}>
					<Image
						src={"/images/graphics/showcases/drawings/today.png"}
						alt={"Today"}
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
				id={graphicStyles["container-tasks"]}
				className={graphicStyles["visibility-container"]}
			>
				<div className={graphicStyles["container-image"]}>
					<Image
						src={"/images/graphics/showcases/drawings/tasks.png"}
						alt={"Tasks"}
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
				id={graphicStyles["container-tomorrow"]}
				className={graphicStyles["visibility-container"]}
			>
				<div className={graphicStyles["container-image"]}>
					<Image
						src={"/images/graphics/showcases/drawings/tomorrow.png"}
						alt={"Tomorrow"}
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

import Image from "next/image";

import GraphicVisibility from "./Visibility";

import graphicStyles from "../../styles/partials/graphics.module.css";

export default function TasksGraphic() {
	return (
		<GraphicVisibility>
			<div
				id={graphicStyles["container-tasks-container"]}
				className={graphicStyles["visibility-container"]}
			>
				<div className={graphicStyles["container-image"]}>
					<Image
						src={"/images/graphics/showcases/tasks/tasks-container.png"}
						alt={"Tasks Container"}
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
				id={graphicStyles["container-day"]}
				className={graphicStyles["visibility-container"]}
			>
				<div className={graphicStyles["container-image"]}>
					<Image
						src={"/images/graphics/showcases/tasks/day.png"}
						alt={"Day"}
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
				id={graphicStyles["container-task-drag"]}
				className={graphicStyles["visibility-container"]}
			>
				<div className={graphicStyles["container-image"]}>
					<Image
						src={"/images/graphics/showcases/tasks/task-drag.png"}
						alt={"Task Drag"}
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

import Image from "next/image";

import graphicStyles from "../..//styles/graphics.module.css";

export default function TasksGraphic() {
	return (
		<>
			<div
				id={graphicStyles["container-tasks-container"]}
				className={graphicStyles["container-image"]}
			>
				<Image
					src={"/images/graphics/Container-Tasks.png"}
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
			<div
				id={graphicStyles["container-day"]}
				className={graphicStyles["container-image"]}
			>
				<Image
					src={"/images/graphics/Day.png"}
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
			<div
				id={graphicStyles["container-task-drag"]}
				className={graphicStyles["container-image"]}
			>
				<Image
					src={"/images/graphics/Task-Drag.png"}
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
		</>
	);
}

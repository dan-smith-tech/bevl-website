import Image from "next/image";

import graphicStyles from "../..//styles/graphics.module.css";

export default function DrawingsGraphic() {
	return (
		<>
			<div
				id={graphicStyles["container-today"]}
				className={graphicStyles["container-image"]}
			>
				<Image
					src={"/images/graphics/Today.png"}
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
			<div
				id={graphicStyles["container-tasks"]}
				className={graphicStyles["container-image"]}
			>
				<Image
					src={"/images/graphics/Tasks.png"}
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
			<div
				id={graphicStyles["container-tomorrow"]}
				className={graphicStyles["container-image"]}
			>
				<Image
					src={"/images/graphics/Tomorrow.png"}
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
		</>
	);
}

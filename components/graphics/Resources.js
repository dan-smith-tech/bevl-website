import Image from "next/image";

import GraphicVisibility from "./Visibility";

import graphicStyles from "../../styles/partials/graphics.module.css";

export default function ResourcesGraphic() {
	return (
		<GraphicVisibility>
			<div
				id={graphicStyles["container-question"]}
				className={graphicStyles["visibility-container"]}
			>
				<div className={graphicStyles["container-image"]}>
					<Image
						src={"/images/graphics/showcases/resources/question.png"}
						alt={"Question"}
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
				id={graphicStyles["container-rocket"]}
				className={graphicStyles["visibility-container"]}
			>
				<div className={graphicStyles["container-image"]}>
					<Image
						src={"/images/graphics/showcases/resources/rocket.png"}
						alt={"Rocket"}
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
				id={graphicStyles["container-mail"]}
				className={graphicStyles["visibility-container"]}
			>
				<div className={graphicStyles["container-image"]}>
					<Image
						src={"/images/graphics/showcases/resources/mail.png"}
						alt={"Mail"}
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
				id={graphicStyles["container-bulb"]}
				className={graphicStyles["visibility-container"]}
			>
				<div className={graphicStyles["container-image"]}>
					<Image
						src={"/images/graphics/showcases/resources/bulb.png"}
						alt={"Bulb"}
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

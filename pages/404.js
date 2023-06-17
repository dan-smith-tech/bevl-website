import errorStyles from "../styles/error.module.css";
import detailStyles from "../styles/partials/detail.module.css";

export default function Custom404() {
	return (
		<div
			className={
				errorStyles["container"] + " " + detailStyles["container-detail"]
			}
		>
			<div className={errorStyles["code"]}>404</div>
			<p className={errorStyles["summary"]}>
				Sorry! This page does not exist.
			</p>
		</div>
	);
}

import helpStyles from "../styles/help.module.css";

function Help() {
	return (
		<div className={"container-full"}>
			<div className={"container-partial " + helpStyles["container-partial"]}>
				<p>The help centre will open when Bevl launches.</p>
			</div>
		</div>
	);
}

export default Help;

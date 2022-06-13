import helpStyles from "../styles/help.module.css";

function Pricing() {
	return (
		<div className={"container-full"}>
			<div className={"container-partial " + helpStyles["container-partial"]}>
				<p>The pricing schemes for Bevl will be released closer to launch.</p>
			</div>
		</div>
	);
}

export default Pricing;

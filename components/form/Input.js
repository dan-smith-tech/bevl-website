import inputStyles from "../../styles/form/input.module.css";

export default function FormInput({
	type,
	name,
	placeholder,
	required,
	secondary,
}) {
	const getElementStyles = () => {
		if (!secondary) return inputStyles["container-element"];
		else
			return (
				inputStyles["container-element"] +
				" " +
				inputStyles["container-element-secondary"]
			);
	};

	if (type != "textarea")
		return (
			<div className={getElementStyles()}>
				<input
					type={type}
					name={name}
					id={name}
					className={inputStyles["element"]}
					placeholder={placeholder}
					required={required}
				></input>
			</div>
		);
	else
		return (
			<div
				className={
					inputStyles["container-element"] +
					" " +
					inputStyles["container-element-textarea"]
				}
			>
				<textarea
					name={name}
					id={name}
					className={inputStyles["element"]}
					placeholder={placeholder}
					required={required}
				></textarea>
			</div>
		);
}

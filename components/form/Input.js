import inputStyles from "../../styles/form/input.module.css";

export default function FormInput({ type, name, placeholder, required }) {
	if (type != "textarea")
		return (
			<div className={inputStyles["container-element"]}>
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
			<textarea
				name={name}
				id={name}
				className={
					inputStyles["element"] + " " + inputStyles["element-textarea"]
				}
				placeholder={placeholder}
				required={required}
			></textarea>
		);
}

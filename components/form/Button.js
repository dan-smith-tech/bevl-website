import buttonStyles from "../../styles/form/button.module.css";

export default function FormButton({ type, onClick, secondary, children }) {
	const getButtonStyles = () => {
		if (!secondary) return buttonStyles["element"];
		else
			return (
				buttonStyles["element"] + " " + buttonStyles["element-secondary"]
			);
	};

	return (
		<button type={type} className={getButtonStyles()} onClick={onClick}>
			{children}
		</button>
	);
}

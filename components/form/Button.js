import buttonStyles from "../../styles/form/button.module.css";

export default function FormButton({ type, value, onClick, light }) {
	if (!light)
		return (
			<button type={type} className={buttonStyles["button"]} onClick={onClick}>
				{value}
			</button>
		);
	else
		return (
			<button type={type} className={buttonStyles["button"] + " " + buttonStyles["button-light"]} onClick={onClick}>
				{value}
			</button>
		);
}

import buttonStyles from "../../styles/form/button.module.css";

export default function FormButton({ type, value, onClick }) {
	return (
		<button type={type} className={buttonStyles["button"]} onClick={onClick}>
			{value}
		</button>
	);
}

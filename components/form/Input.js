import inputStyles from "../../styles/form/input.module.css";

export default function FormInput({ type, name, placeholder, required }) {
	return <input type={type} name={name} id={name} className={inputStyles["input"]} placeholder={placeholder} required={required}></input>;
}

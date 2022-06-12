import FormButton from "./form/Button";

import modalStyles from "../styles/modal.module.css";

export default function Modal({ show, onClose, heading, body, buttonValue }) {
	if (show)
		return (
			<div className={modalStyles["container"]}>
				<div className={modalStyles["element"]}>
					<h2 className={modalStyles["title"]}>{heading}</h2>
					<p className={modalStyles["body"]}>{body}</p>
					<button className={modalStyles["button-close"]} type="button" onClick={onClose}>
						x
					</button>
					<div className={modalStyles["container-button"]}>
						<FormButton type={"button"} value={buttonValue} onClick={onClose} light={true} />
					</div>
				</div>
			</div>
		);
	else null;
}

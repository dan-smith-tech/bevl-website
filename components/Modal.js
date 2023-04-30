import FormButton from "./form/Button";

import modalStyles from "../styles/modal.module.css";

export default function Modal({ show, onClose, heading, body, buttonValue }) {
	if (show)
		return (
			<div className={modalStyles["container"]}>
				<div className={modalStyles["element"]}>
					<h2 className={modalStyles["title"]}>{heading}</h2>
					<p className={modalStyles["body"]}>{body}</p>
					<div className={modalStyles["container-button"]}>
						<FormButton type={"button"} onClick={onClose} light={true}>
							{buttonValue}
						</FormButton>
					</div>
				</div>
			</div>
		);
	else null;
}

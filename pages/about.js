import Image from "next/image";

import aboutStyles from "../styles/about.module.css";

function About() {
	return (
		<>
			<div className={"container-full " + aboutStyles["container-full"]}>
				<div className={"container-partial"}>
					<div className={aboutStyles["container-content"]} id="me">
						<div className={aboutStyles["content-text"]}>
							<h2>My Story</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
								ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
								reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
								sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
								laborum.
							</p>
						</div>
						<div className={aboutStyles["content-graphic"]}></div>
					</div>
					<div className={aboutStyles["container-content"]} id="philosophy">
						<div className={aboutStyles["content-graphic"]}></div>
						<div className={aboutStyles["content-text"]}>
							<h2>My Planning Philosophy</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
								ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
								reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
								sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
								laborum.
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
								ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
								reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
								sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
								laborum.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default About;

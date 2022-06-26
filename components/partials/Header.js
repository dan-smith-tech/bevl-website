import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import headerStyles from "../../styles/partials/header.module.css";

export default function Header() {
	const [showNavMenu, setShowNavMenu] = useState(false);

	function selectLink() {
		setShowNavMenu(false);
	}

	return (
		<>
			<div
				className={
					"container-full " + headerStyles["container-full-relative"]
				}
			></div>
			<div className={"container-full " + headerStyles["container-full"]}>
				<nav
					className={
						"container-partial " + headerStyles["container-partial"]
					}
				>
					<div>
						<div className={headerStyles["container-image"]}>
							<Link href="/">
								<a>
									<Image
										src={"/images/logo-complete.svg"}
										alt={"Bevl Logo"}
										layout="fill"
										className={headerStyles["image"]}
										draggable="false"
									/>
								</a>
							</Link>
						</div>
					</div>
					<div className={headerStyles["nav-links"]}>
						<div className={headerStyles["container-nav-bar"]}>
							<button
								className={
									headerStyles["nav-bar-link"] +
									" " +
									headerStyles["nav-bar-dropdown-toggle"]
								}
								tabIndex={0}
							>
								Features{" "}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
								>
									<path
										fill="#323a52"
										fillOpacity="1"
										d="M16.939 7.939 12 12.879l-4.939-4.94-2.122 2.122L12 17.121l7.061-7.06z"
									></path>
								</svg>
							</button>
							<ul className={headerStyles["nav-bar-dropdown"]}>
								<li>
									<Link href="/features/tasks">
										<a
											className={
												headerStyles["nav-bar-dropdown-link"]
											}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
											>
												<path
													fill="#323a52"
													fillOpacity="1"
													d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zm6-3.586-3.707-3.707 1.414-1.414L11 15.586l4.293-4.293 1.414 1.414L11 18.414zM5 7h14v2H5V7z"
												></path>
											</svg>
											<div
												className={
													headerStyles[
														"nav-bar-dropdown-link-info"
													]
												}
											>
												<span
													className={
														headerStyles[
															"nav-bar-dropdown-link-info-heading"
														]
													}
												>
													Tasks
												</span>
												<span
													className={
														headerStyles[
															"nav-bar-dropdown-link-info-description"
														]
													}
												>
													Organise every kind of todo.
												</span>
											</div>
										</a>
									</Link>
								</li>
								<li>
									<Link href="/features/lists">
										<a
											className={
												headerStyles["nav-bar-dropdown-link"]
											}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
											>
												<path
													fill="#323a52"
													fillOpacity="1"
													d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm10 0h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM10 13H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm8 1h-2v2h-2v2h2v2h2v-2h2v-2h-2z"
												></path>
											</svg>
											<div
												className={
													headerStyles[
														"nav-bar-dropdown-link-info"
													]
												}
											>
												<span
													className={
														headerStyles[
															"nav-bar-dropdown-link-info-heading"
														]
													}
												>
													Lists
												</span>
												<span
													className={
														headerStyles[
															"nav-bar-dropdown-link-info-description"
														]
													}
												>
													Keep track of wandering ideas.
												</span>
											</div>
										</a>
									</Link>
								</li>
								<li>
									<Link href="/features/labels">
										<a
											className={
												headerStyles["nav-bar-dropdown-link"]
											}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
											>
												<path
													fill="#323a52"
													fillOpacity="1"
													d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8 8a2 2 0 0 0 2.828 0l7.172-7.172a2 2 0 0 0 0-2.828l-8-8zM7 9a2 2 0 1 1 .001-4.001A2 2 0 0 1 7 9z"
												></path>
											</svg>
											<div
												className={
													headerStyles[
														"nav-bar-dropdown-link-info"
													]
												}
											>
												<span
													className={
														headerStyles[
															"nav-bar-dropdown-link-info-heading"
														]
													}
												>
													Labels
												</span>
												<span
													className={
														headerStyles[
															"nav-bar-dropdown-link-info-description"
														]
													}
												>
													Group and filter plans.
												</span>
											</div>
										</a>
									</Link>
								</li>
							</ul>
							<button
								className={
									headerStyles["nav-bar-link"] +
									" " +
									headerStyles["nav-bar-dropdown-toggle"]
								}
								tabIndex={0}
							>
								Resources{" "}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
								>
									<path
										fill="#323a52"
										fillOpacity="1"
										d="M16.939 7.939 12 12.879l-4.939-4.94-2.122 2.122L12 17.121l7.061-7.06z"
									></path>
								</svg>
							</button>
							<ul className={headerStyles["nav-bar-dropdown"]}>
								<li>
									<Link href="/magazine">
										<a
											className={
												headerStyles["nav-bar-dropdown-link"]
											}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
											>
												<path
													fill="#323a52"
													fillOpacity="1"
													d="M21 3h-7a2.98 2.98 0 0 0-2 .78A2.98 2.98 0 0 0 10 3H3a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h5.758a2.01 2.01 0 0 1 1.414.586l1.121 1.121c.009.009.021.012.03.021.086.08.182.15.294.196h.002a.996.996 0 0 0 .762 0h.002c.112-.046.208-.117.294-.196.009-.009.021-.012.03-.021l1.121-1.121A2.01 2.01 0 0 1 15.242 20H21a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 15h-4.758a4.03 4.03 0 0 0-2.242.689V6c0-.551.448-1 1-1h6v13z"
												></path>
											</svg>
											<div
												className={
													headerStyles[
														"nav-bar-dropdown-link-info"
													]
												}
											>
												<span
													className={
														headerStyles[
															"nav-bar-dropdown-link-info-heading"
														]
													}
												>
													Magazine
												</span>
												<span
													className={
														headerStyles[
															"nav-bar-dropdown-link-info-description"
														]
													}
												>
													Explore productivity tips.
												</span>
											</div>
										</a>
									</Link>
								</li>
								<li>
									<Link href="/help">
										<a
											className={
												headerStyles["nav-bar-dropdown-link"]
											}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
											>
												<path
													fill="#323a52"
													fillOpacity="1"
													d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm1 16h-2v-2h2v2zm.976-4.885c-.196.158-.385.309-.535.459-.408.407-.44.777-.441.793v.133h-2v-.167c0-.118.029-1.177 1.026-2.174.195-.195.437-.393.691-.599.734-.595 1.216-1.029 1.216-1.627a1.934 1.934 0 0 0-3.867.001h-2C8.066 7.765 9.831 6 12 6s3.934 1.765 3.934 3.934c0 1.597-1.179 2.55-1.958 3.181z"
												></path>
											</svg>
											<div
												className={
													headerStyles[
														"nav-bar-dropdown-link-info"
													]
												}
											>
												<span
													className={
														headerStyles[
															"nav-bar-dropdown-link-info-heading"
														]
													}
												>
													Help
												</span>
												<span
													className={
														headerStyles[
															"nav-bar-dropdown-link-info-description"
														]
													}
												>
													Learn how to use Bevl.
												</span>
											</div>
										</a>
									</Link>
								</li>
							</ul>
							<button
								className={
									headerStyles["nav-bar-link"] +
									" " +
									headerStyles["nav-bar-dropdown-toggle"]
								}
								tabIndex={0}
							>
								About{" "}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
								>
									<path
										fill="#323a52"
										fillOpacity="1"
										d="M16.939 7.939 12 12.879l-4.939-4.94-2.122 2.122L12 17.121l7.061-7.06z"
									></path>
								</svg>
							</button>
							<ul className={headerStyles["nav-bar-dropdown"]}>
								<li>
									<Link href="/story">
										<a
											className={
												headerStyles["nav-bar-dropdown-link"]
											}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
											>
												<path
													fill="#323a52"
													fillOpacity="1"
													d="M15.78 15.84S18.64 13 19.61 12c3.07-3 1.54-9.18 1.54-9.18S15 1.29 12 4.36C9.66 6.64 8.14 8.22 8.14 8.22S4.3 7.42 2 9.72L14.25 22c2.3-2.33 1.53-6.16 1.53-6.16zm-1.5-9a2 2 0 0 1 2.83 0 2 2 0 1 1-2.83 0zM3 21a7.81 7.81 0 0 0 5-2l-3-3c-2 1-2 5-2 5z"
												></path>
											</svg>
											<div
												className={
													headerStyles[
														"nav-bar-dropdown-link-info"
													]
												}
											>
												<span
													className={
														headerStyles[
															"nav-bar-dropdown-link-info-heading"
														]
													}
												>
													My Story
												</span>
												<span
													className={
														headerStyles[
															"nav-bar-dropdown-link-info-description"
														]
													}
												>
													Learn about Bevl's inspiration.
												</span>
											</div>
										</a>
									</Link>
								</li>
								<li>
									<Link href="/philosophy">
										<a
											className={
												headerStyles["nav-bar-dropdown-link"]
											}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
											>
												<path
													fill="#323a52"
													fillOpacity="1"
													d="M9 20h6v2H9zm7.906-6.288C17.936 12.506 19 11.259 19 9c0-3.859-3.141-7-7-7S5 5.141 5 9c0 2.285 1.067 3.528 2.101 4.73.358.418.729.851 1.084 1.349.144.206.38.996.591 1.921h-.792v2h8.032v-2h-.79c.213-.927.45-1.719.593-1.925.352-.503.726-.94 1.087-1.363z"
												></path>
											</svg>
											<div
												className={
													headerStyles[
														"nav-bar-dropdown-link-info"
													]
												}
											>
												<span
													className={
														headerStyles[
															"nav-bar-dropdown-link-info-heading"
														]
													}
												>
													Philosophy
												</span>
												<span
													className={
														headerStyles[
															"nav-bar-dropdown-link-info-description"
														]
													}
												>
													Discover Bevl's intention.
												</span>
											</div>
										</a>
									</Link>
								</li>
							</ul>
							<Link href={"/pricing"}>
								<a className={headerStyles["nav-bar-link"]}>Pricing</a>
							</Link>
						</div>
						<div className={headerStyles["nav-bar-app"]}>
							<Link href={"https://open.bevl.app/signin"}>
								<a
									className={
										headerStyles["nav-bar-link"] +
										" " +
										headerStyles["nav-bar-app-link"]
									}
								>
									Sign In
								</a>
							</Link>
							<Link href={"/signup"}>
								<a
									className={
										headerStyles["nav-bar-link"] +
										" " +
										headerStyles["nav-bar-app-button"]
									}
								>
									Get Started
								</a>
							</Link>
						</div>
						<button
							className={headerStyles["nav-menu-toggle"]}
							onClick={() => setShowNavMenu(!showNavMenu)}
							aria-label={"Navigation Menu Toggle"}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
							>
								<path
									fill="#323a52"
									fillOpacity="1"
									d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
								></path>
							</svg>
						</button>
						{showNavMenu && (
							<div
								className={
									"container-partial " +
									headerStyles["container-partial"] +
									" " +
									headerStyles["container-nav-menu"]
								}
							>
								<a className={headerStyles["nav-menu-dropdown-toggle"]}>
									Features
								</a>
								<ul className={headerStyles["nav-menu-dropdown"]}>
									<li>
										<Link href="/features/tasks">
											<a
												className={
													headerStyles["nav-menu-link"] +
													" " +
													headerStyles["nav-menu-dropdown-link"]
												}
												onClick={selectLink}
											>
												Tasks
											</a>
										</Link>
									</li>
									<li>
										<Link href="/features/lists">
											<a
												className={
													headerStyles["nav-menu-link"] +
													" " +
													headerStyles["nav-menu-dropdown-link"]
												}
												onClick={selectLink}
											>
												Lists
											</a>
										</Link>
									</li>
									<li>
										<Link href="/features/labels">
											<a
												className={
													headerStyles["nav-menu-link"] +
													" " +
													headerStyles["nav-menu-dropdown-link"]
												}
												onClick={selectLink}
											>
												Labels
											</a>
										</Link>
									</li>
								</ul>
								<a className={headerStyles["nav-menu-dropdown-toggle"]}>
									Resources
								</a>
								<ul className={headerStyles["nav-menu-dropdown"]}>
									<li>
										<Link href="/magazine">
											<a
												className={
													headerStyles["nav-menu-link"] +
													" " +
													headerStyles["nav-menu-dropdown-link"]
												}
												onClick={selectLink}
											>
												Magazine
											</a>
										</Link>
									</li>
									<li>
										<Link href="/help">
											<a
												className={
													headerStyles["nav-menu-link"] +
													" " +
													headerStyles["nav-menu-dropdown-link"]
												}
												onClick={selectLink}
											>
												Help
											</a>
										</Link>
									</li>
								</ul>
								<a className={headerStyles["nav-menu-dropdown-toggle"]}>
									About
								</a>
								<ul className={headerStyles["nav-menu-dropdown"]}>
									<li>
										<Link href="/story">
											<a
												className={
													headerStyles["nav-menu-link"] +
													" " +
													headerStyles["nav-menu-dropdown-link"]
												}
												onClick={selectLink}
											>
												My Story
											</a>
										</Link>
									</li>
									<li>
										<Link href="/philosophy">
											<a
												className={
													headerStyles["nav-menu-link"] +
													" " +
													headerStyles["nav-menu-dropdown-link"]
												}
												onClick={selectLink}
											>
												Philosophy
											</a>
										</Link>
									</li>
								</ul>
								<Link href={"/pricing"}>
									<a
										className={headerStyles["nav-menu-link"]}
										onClick={selectLink}
									>
										Pricing
									</a>
								</Link>
								<Link href={"https://open.bevl.app/signin"}>
									<a
										className={headerStyles["nav-menu-link"]}
										onClick={selectLink}
									>
										Sign In
									</a>
								</Link>
								<Link href={"/signup"}>
									<a
										className={
											headerStyles["nav-menu-link"] +
											" " +
											headerStyles["nav-menu-button"]
										}
										onClick={selectLink}
									>
										Get Started
									</a>
								</Link>
							</div>
						)}
					</div>
				</nav>
			</div>
		</>
	);
}

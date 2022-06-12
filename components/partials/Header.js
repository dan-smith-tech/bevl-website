import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import headerStyles from "../../styles/partials/header.module.css";

export default function Header() {
	const [showNavMenu, setShowNavMenu] = useState(false);

	return (
		<>
			<div className={"container-full " + headerStyles["container-full-relative"]}></div>
			<div className={"container-full " + headerStyles["container-full"]}>
				<nav className={"container-partial " + headerStyles["container-partial"]}>
					<div>
						<div className={headerStyles["container-image"]}>
							<Link href="/">
								<Image
									src={"/images/logo-complete.svg"}
									layout="fill"
									className={headerStyles["image"]}
									draggable="false"
								/>
							</Link>
						</div>
					</div>
					<div className={headerStyles["nav-links"]}>
						<div className={headerStyles["container-nav-bar"]}>
							<a
								className={headerStyles["nav-bar-link"] + " " + headerStyles["nav-bar-dropdown-toggle"]}
								tabIndex={0}
							>
								Features{" "}
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
									<path
										fill="#323a52"
										fillOpacity="1"
										d="M16.939 7.939 12 12.879l-4.939-4.94-2.122 2.122L12 17.121l7.061-7.06z"
									></path>
								</svg>
							</a>
							<ul className={headerStyles["nav-bar-dropdown"]}>
								<li>
									<Link href="/features/tasks">
										<a className={headerStyles["nav-bar-dropdown-link"]}>
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
												<path
													fill="#323a52"
													fillOpacity="1"
													d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zm6-3.586-3.707-3.707 1.414-1.414L11 15.586l4.293-4.293 1.414 1.414L11 18.414zM5 7h14v2H5V7z"
												></path>
											</svg>
											<div className={headerStyles["nav-bar-dropdown-link-info"]}>
												<span className={headerStyles["nav-bar-dropdown-link-info-heading"]}>
													Tasks
												</span>
												<span className={headerStyles["nav-bar-dropdown-link-info-description"]}>
													Organsie every kind of todo.
												</span>
											</div>
										</a>
									</Link>
								</li>
								<li>
									<Link href="/features/labels">
										<a className={headerStyles["nav-bar-dropdown-link"]}>
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
												<path
													fill="#323a52"
													fillOpacity="1"
													d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8 8a2 2 0 0 0 2.828 0l7.172-7.172a2 2 0 0 0 0-2.828l-8-8zM7 9a2 2 0 1 1 .001-4.001A2 2 0 0 1 7 9z"
												></path>
											</svg>
											<div className={headerStyles["nav-bar-dropdown-link-info"]}>
												<span className={headerStyles["nav-bar-dropdown-link-info-heading"]}>
													Labels
												</span>
												<span className={headerStyles["nav-bar-dropdown-link-info-description"]}>
													Keep all your tasks arranged.
												</span>
											</div>
										</a>
									</Link>
								</li>
								<li>
									<Link href="/features/moodboard">
										<a className={headerStyles["nav-bar-dropdown-link"]}>
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
												<path
													fill="#323a52"
													fillOpacity="1"
													d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm10 0h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM10 13H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm8 1h-2v2h-2v2h2v2h2v-2h2v-2h-2z"
												></path>
											</svg>
											<div className={headerStyles["nav-bar-dropdown-link-info"]}>
												<span className={headerStyles["nav-bar-dropdown-link-info-heading"]}>
													Moodboard
												</span>
												<span className={headerStyles["nav-bar-dropdown-link-info-description"]}>
													Keep track of wandering ideas.
												</span>
											</div>
										</a>
									</Link>
								</li>
							</ul>
							<a
								className={headerStyles["nav-bar-link"] + " " + headerStyles["nav-bar-dropdown-toggle"]}
								tabIndex={0}
							>
								Resources{" "}
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
									<path
										fill="#323a52"
										fillOpacity="1"
										d="M16.939 7.939 12 12.879l-4.939-4.94-2.122 2.122L12 17.121l7.061-7.06z"
									></path>
								</svg>
							</a>
							<ul className={headerStyles["nav-bar-dropdown"]}>
								<li>
									<Link href="/magazine">
										<a className={headerStyles["nav-bar-dropdown-link"]}>
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
												<path
													fill="#323a52"
													fillOpacity="1"
													d="M21 3h-7a2.98 2.98 0 0 0-2 .78A2.98 2.98 0 0 0 10 3H3a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h5.758a2.01 2.01 0 0 1 1.414.586l1.121 1.121c.009.009.021.012.03.021.086.08.182.15.294.196h.002a.996.996 0 0 0 .762 0h.002c.112-.046.208-.117.294-.196.009-.009.021-.012.03-.021l1.121-1.121A2.01 2.01 0 0 1 15.242 20H21a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 15h-4.758a4.03 4.03 0 0 0-2.242.689V6c0-.551.448-1 1-1h6v13z"
												></path>
											</svg>
											<div className={headerStyles["nav-bar-dropdown-link-info"]}>
												<span className={headerStyles["nav-bar-dropdown-link-info-heading"]}>
													Magazine
												</span>
												<span className={headerStyles["nav-bar-dropdown-link-info-description"]}>
													Guides on how to productivity.
												</span>
											</div>
										</a>
									</Link>
								</li>
								<li>
									<Link href="/help">
										<a className={headerStyles["nav-bar-dropdown-link"]}>
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
												<path
													fill="#323a52"
													fillOpacity="1"
													d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm1 16h-2v-2h2v2zm.976-4.885c-.196.158-.385.309-.535.459-.408.407-.44.777-.441.793v.133h-2v-.167c0-.118.029-1.177 1.026-2.174.195-.195.437-.393.691-.599.734-.595 1.216-1.029 1.216-1.627a1.934 1.934 0 0 0-3.867.001h-2C8.066 7.765 9.831 6 12 6s3.934 1.765 3.934 3.934c0 1.597-1.179 2.55-1.958 3.181z"
												></path>
											</svg>
											<div className={headerStyles["nav-bar-dropdown-link-info"]}>
												<span className={headerStyles["nav-bar-dropdown-link-info-heading"]}>
													Help
												</span>
												<span className={headerStyles["nav-bar-dropdown-link-info-description"]}>
													Learn how to use Bevl.
												</span>
											</div>
										</a>
									</Link>
								</li>
							</ul>
							<Link href={"/about"}>
								<a className={headerStyles["nav-bar-link"]}>About</a>
							</Link>
							<Link href={"/pricing"}>
								<a className={headerStyles["nav-bar-link"]}>Pricing</a>
							</Link>
						</div>
						<div className={headerStyles["nav-bar-app"]}>
							<Link href={"https://open.bevl.app/signin"}>
								<a className={headerStyles["nav-bar-link"] + " " + headerStyles["nav-bar-app-link"]}>
									Sign In
								</a>
							</Link>
							<Link href={"https://open.bevl.app/signup"}>
								<a className={headerStyles["nav-bar-link"] + " " + headerStyles["nav-bar-app-button"]}>
									Get Started
								</a>
							</Link>
						</div>
						<button className={headerStyles["nav-menu-toggle"]} onClick={() => setShowNavMenu(!showNavMenu)}>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
								<path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
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
								<a
									className={
										headerStyles["nav-menu-link"] + " " + headerStyles["nav-menu-dropdown-toggle"]
									}
								>
									Features
								</a>
								<ul className={headerStyles["nav-menu-dropdown"]}>
									<li>
										<Link href="/features/moodboard">
											<a className={headerStyles["nav-menu-dropdown-link"]}>Tasks</a>
										</Link>
									</li>
								</ul>
								<Link href={"/magazine"}>
									<a className={headerStyles["nav-menu-link"]}>Magazine</a>
								</Link>
								<Link href={"/help"}>
									<a className={headerStyles["nav-menu-link"]}>Help</a>
								</Link>
								<Link href={"/pricing"}>
									<a className={headerStyles["nav-menu-link"]}>Pricing</a>
								</Link>
								<Link href={"https://open.bevl.app/signin"}>
									<a className={headerStyles["nav-menu-link"]}>Sign In</a>
								</Link>
								<Link href={"https://open.bevl.app/signup"}>
									<a className={headerStyles["nav-menu-link"] + " " + headerStyles["nav-menu-button"]}>
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

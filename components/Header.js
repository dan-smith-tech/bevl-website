import { useRef, useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import "boxicons/css/boxicons.min.css";
import headerStyles from "../styles/header.module.css";

export default function Header() {
	const element = useRef();
	const [showNavMenu, setShowNavMenu] = useState(false);

	function handleScroll(e) {
		if (window.pageYOffset != 0) {
			element.current.classList.add(headerStyles["scrolled"]);
		} else {
			element.current.classList.remove(headerStyles["scrolled"]);
		}
	}

	function selectLink() {
		setShowNavMenu(false);
	}
	function handleNavbarClick() {
		this.blur();
	}
	function preventFocus(e) {
		e.preventDefault();
	}

	useEffect(() => {
		if (window.location.pathname === "/") {
			element.current.classList.add(headerStyles["secondary-100"]);
			element.current.classList.remove(headerStyles["primary-100"]);
		} else if (window.location.pathname.startsWith("/features/")) {
			element.current.classList.remove(headerStyles["secondary-100"]);
			element.current.classList.add(headerStyles["primary-100"]);
		} else {
			element.current.classList.remove(headerStyles["secondary-100"]);
			element.current.classList.remove(headerStyles["primary-100"]);
		}

		document.addEventListener("scroll", (e) => handleScroll(e));

		const toggles = document.querySelectorAll(
			"." + headerStyles["nav-bar-dropdown-toggle"]
		);
		const links = document.querySelectorAll(
			"." + headerStyles["nav-bar-dropdown-link"]
		);
		toggles.forEach((toggle) => {
			toggle.addEventListener("mousedown", (e) => preventFocus(e));
		});
		links.forEach((link) => {
			link.addEventListener("click", handleNavbarClick);
		});
		return () => {
			document.removeEventListener("scroll", (e) => handleScroll(e));

			toggles.forEach((toggle) => {
				toggle.removeEventListener(
					"mousedown",
					(e) => (e) => preventFocus(e)
				);
			});
			links.forEach((link) => {
				link.removeEventListener("click", handleNavbarClick);
			});
		};
	}, [handleNavbarClick]);

	return (
		<div
			className={"container-full " + headerStyles["container-full"]}
			ref={element}
		>
			<nav
				className={"container-partial " + headerStyles["container-partial"]}
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
									loading={"eager"}
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
							Features <i className="bx bxs-chevron-down"></i>
						</button>
						<ul className={headerStyles["nav-bar-dropdown"]}>
							<li>
								<Link href="/features/tasks">
									<a className={headerStyles["nav-bar-dropdown-link"]}>
										<i className="bx bxs-calendar-check"></i>
										<div
											className={
												headerStyles["nav-bar-dropdown-link-info"]
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
									<a className={headerStyles["nav-bar-dropdown-link"]}>
										<i className="bx bxs-customize"></i>
										<div
											className={
												headerStyles["nav-bar-dropdown-link-info"]
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
									<a className={headerStyles["nav-bar-dropdown-link"]}>
										<i className="bx bxs-purchase-tag"></i>
										<div
											className={
												headerStyles["nav-bar-dropdown-link-info"]
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
							Resources <i className="bx bxs-chevron-down"></i>
						</button>
						<ul className={headerStyles["nav-bar-dropdown"]}>
							<li>
								<Link href="/magazine">
									<a className={headerStyles["nav-bar-dropdown-link"]}>
										<i className="bx bxs-book-open"></i>
										<div
											className={
												headerStyles["nav-bar-dropdown-link-info"]
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
									<a className={headerStyles["nav-bar-dropdown-link"]}>
										<i className="bx bxs-help-circle"></i>
										<div
											className={
												headerStyles["nav-bar-dropdown-link-info"]
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
							About <i className="bx bxs-chevron-down"></i>
						</button>
						<ul className={headerStyles["nav-bar-dropdown"]}>
							<li>
								<Link href="/story">
									<a className={headerStyles["nav-bar-dropdown-link"]}>
										<i className="bx bxs-rocket"></i>
										<div
											className={
												headerStyles["nav-bar-dropdown-link-info"]
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
									<a className={headerStyles["nav-bar-dropdown-link"]}>
										<i className="bx bxs-bulb"></i>
										<div
											className={
												headerStyles["nav-bar-dropdown-link-info"]
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
						<i className="bx bx-menu-alt-right"></i>
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
							<h3 className={headerStyles["nav-menu-dropdown-toggle"]}>
								Features
							</h3>
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
							<h3 className={headerStyles["nav-menu-dropdown-toggle"]}>
								Resources
							</h3>
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
							<h3 className={headerStyles["nav-menu-dropdown-toggle"]}>
								About
							</h3>
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
	);
}

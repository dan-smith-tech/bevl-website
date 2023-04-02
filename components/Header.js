import { useRef, useEffect, useState } from "react";

import FormButton from "./form/Button";

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
				<div className={headerStyles["container-link"]}>
					<Link href={"/resources"}>
						<a className={headerStyles["nav-link"]}>Resources</a>
					</Link>
					<Link href={"/about"}>
						<a className={headerStyles["nav-link"]}>About</a>
					</Link>
					<Link href={"/pricing"}>
						<a className={headerStyles["nav-link"]}>Pricing</a>
					</Link>
					<Link href={"https://my.bevl.app/signin"}>
						<a
							className={
								headerStyles["nav-link"] +
								" " +
								headerStyles["nav-link-app"]
							}
						>
							Sign In
						</a>
					</Link>
					<FormButton type={"submit"} light={true}>
						Get Started
					</FormButton>
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
							<Link href={"/pricing"}>
								<a
									className={headerStyles["nav-menu-link"]}
									onClick={selectLink}
								>
									Pricing
								</a>
							</Link>
							<Link href={"https://my.bevl.app/signin"}>
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

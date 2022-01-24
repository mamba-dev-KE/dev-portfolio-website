import * as React from "react";
import { useState, useEffect } from "react";
import * as headerStyles from "./header.module.css";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
	const [width, setWidth] = useState(undefined);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);
		handleResize();
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	const logo = `< Joseph />`;
	return (
		<header className={headerStyles.header}>
			<div className={headerStyles.container}>
				<nav className={headerStyles.nav}>
					<h4 className={headerStyles.logo}>{logo}</h4>
					{width <= 768 ? (
						<MenuIcon
							onClick={handleClick}
							className={headerStyles.burger_icon}
						/>
					) : (
						<ul className={headerStyles.nav_list}>
							<li className={headerStyles.nav_list_item}>About</li>
							<li className={headerStyles.nav_list_item}>Skills</li>
							<li className={headerStyles.nav_list_item}>Projects</li>
							<li className={headerStyles.nav_list_item}>Contact</li>
							<li className={headerStyles.nav_list_item}>Resume</li>
						</ul>
					)}
				</nav>
			</div>
		</header>
	);
};

export default Header;

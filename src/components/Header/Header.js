import * as React from "react";
import { useState, useEffect } from "react";
import * as styles from "./header.module.css";
// import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
	const [width, setWidth] = useState(undefined);
	const [isOpen, setIsOpen] = useState(false);

	// useEffect(() => {
	// 	const handleResize = () => {
	// 		setWidth(window.innerWidth);
	// 	};

	// 	window.addEventListener("resize", handleResize);
	// 	handleResize();
	// 	return () => window.removeEventListener("resize", handleResize);
	// }, []);

	// const handleClick = () => {
	// 	setIsOpen(!isOpen);
	// };

	const logo = `J.M.`;
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<nav className={styles.nav}>
					<h4 className={styles.logo}>{logo}</h4>
					<ul className={styles.nav_list}>
						<li className={styles.nav_list_item}>About</li>
						<li className={styles.nav_list_item}>Skills</li>
						<li className={styles.nav_list_item}>Projects</li>
						<li className={styles.nav_list_item}>Contact</li>
						<li className={styles.nav_list_item}>Resume</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;

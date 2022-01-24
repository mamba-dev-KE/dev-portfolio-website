import * as React from "react";
import * as headerStyles from "./header.module.css";

const Header = () => {
	return (
		<header className={headerStyles.header}>
			<div className={headerStyles.container}>
				<nav className={headerStyles.nav}>
					<h4 className={headerStyles.logo}>Joseph</h4>
					<ul className={headerStyles.nav_list}>
						<li className={headerStyles.nav_list_item}>About</li>
						<li className={headerStyles.nav_list_item}>Skills</li>
						<li className={headerStyles.nav_list_item}>Projects</li>
						<li className={headerStyles.nav_list_item}>Contact</li>
						<li className={headerStyles.nav_list_item}>Resume</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;

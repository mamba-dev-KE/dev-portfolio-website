import * as React from "react";
import * as headerStyles from "./header.module.css";

const Header = () => {
	return (
		<header>
			<nav>
				<ul className={headerStyles.color}>
					<li>About</li>
					<li>Skills</li>
					<li>Projects</li>
					<li>Contact</li>
					<li>Resume</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;

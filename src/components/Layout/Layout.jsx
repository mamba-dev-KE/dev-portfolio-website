import * as React from "react";
import * as layoutStyles from "./layout.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<div className={layoutStyles.container}>
				<main>{children}</main>
			</div>
			<Footer />
		</>
	);
};

export default Layout;

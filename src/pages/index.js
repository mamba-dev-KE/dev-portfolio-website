import * as React from "react";
import Layout from "../components/Layout/Layout";
import Skills from "../components/Skills/Skills";
import About from "../components/About/About";

const IndexPage = () => {
	return (
		<Layout>
			<About />
			<Skills />
		</Layout>
	);
};

export default IndexPage;

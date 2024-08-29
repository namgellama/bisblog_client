import { Box } from "@chakra-ui/react";
import { NavBar } from ".";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<>
			<Box as="header">
				<NavBar />
			</Box>
			<Outlet />
		</>
	);
};

export default Layout;

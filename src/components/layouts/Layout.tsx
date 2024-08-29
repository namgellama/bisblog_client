import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { NavBar } from "..";

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

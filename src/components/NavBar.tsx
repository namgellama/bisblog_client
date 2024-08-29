import { Box, Button, Flex, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { SearchBar } from "./";

const NavBar = () => {
	return (
		<Box as="nav" py={2} px={5} borderBottom="1px solid #DBE4E9">
			<Flex justify="space-between">
				<Image src={logo} alt="Logo" w={150} />
				<SearchBar />
				<Button borderRadius={20} colorScheme="purple" px={4}>
					Log in
				</Button>
			</Flex>
		</Box>
	);
};

export default NavBar;

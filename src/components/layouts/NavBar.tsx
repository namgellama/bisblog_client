import { Box, Button, Flex, Image, useDisclosure } from "@chakra-ui/react";
import { AuthModal, SearchBar } from "..";
import logo from "../../assets/logo.png";

const NavBar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box as="nav" py={2} px={5} borderBottom="1px solid #DBE4E9">
			<Flex justify="space-between">
				<Image src={logo} alt="Logo" w={150} />
				<SearchBar />
				<Button
					borderRadius={20}
					colorScheme="purple"
					px={4}
					onClick={onOpen}
				>
					Log in
				</Button>

				<AuthModal isOpen={isOpen} onClose={onClose} />
			</Flex>
		</Box>
	);
};

export default NavBar;

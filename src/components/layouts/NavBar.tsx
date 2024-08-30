import {
	Avatar,
	Box,
	Button,
	Flex,
	Image,
	useDisclosure,
} from "@chakra-ui/react";
import { AuthModal, SearchBar } from "..";
import logo from "../../assets/logo.png";
import { useAuthStore } from "../../stores/authStore";

const NavBar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const user = useAuthStore((state) => state.user);

	return (
		<Box as="nav" py={2} px={5} borderBottom="1px solid #DBE4E9">
			<Flex justify="space-between" align="center">
				<Image src={logo} alt="Logo" w={150} />
				<SearchBar />

				{user ? (
					<Avatar
						src=""
						name={`${user.firstName} ${user.lastName}`}
						size="sm"
						color="white"
						cursor="pointer"
					/>
				) : (
					<Button
						borderRadius={20}
						colorScheme="purple"
						px={4}
						onClick={onOpen}
						display={user ? "none" : "block"}
					>
						Log in
					</Button>
				)}

				<AuthModal isOpen={isOpen} onClose={onClose} />
			</Flex>
		</Box>
	);
};

export default NavBar;

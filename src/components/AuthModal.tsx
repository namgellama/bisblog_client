import {
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalOverlay,
	Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Props {
	isOpen: boolean;
	onClose: () => void;
}

const AuthModal = ({ isOpen, onClose }: Props) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose} isCentered>
			<ModalOverlay />
			<ModalContent>
				<ModalCloseButton />
				<ModalBody px={10} pt={12} pb={5}>
					<Heading as="h3" fontSize="2xl" mb={5}>
						Log In
					</Heading>

					<Box as="form">
						<Flex direction="column" gap={5}>
							<FormControl>
								<FormLabel>
									Email or username{" "}
									<Text as="span" color="red">
										*
									</Text>
								</FormLabel>
								<Input type="text" border="none" bg="#DBE4E9" />
							</FormControl>

							<FormControl>
								<FormLabel>
									Password{" "}
									<Text as="span" color="red">
										*
									</Text>
								</FormLabel>
								<Input
									type="password"
									border="none"
									bg="#DBE4E9"
								/>
							</FormControl>

							<Flex direction="column" gap={2}>
								<Link to="">
									<Text color="blueviolet" fontSize="sm">
										Forgot password?
									</Text>
								</Link>
								<Flex gap={2}>
									<Text fontSize="sm">
										New to BisBlog?{" "}
										<Text
											color="blueviolet"
											as="span"
											cursor="pointer"
										>
											Sign up
										</Text>
									</Text>
								</Flex>
							</Flex>

							<Button
								colorScheme="purple"
								borderRadius={25}
								mt={20}
							>
								Log In
							</Button>
						</Flex>
					</Box>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};

export default AuthModal;

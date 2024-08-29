import {
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	Input,
	Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const AuthForm = () => {
	return (
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
					<Input type="password" border="none" bg="#DBE4E9" />
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
							<Text color="blueviolet" as="span" cursor="pointer">
								Sign up
							</Text>
						</Text>
					</Flex>
				</Flex>

				<Button colorScheme="purple" borderRadius={25} mt={20}>
					Log In
				</Button>
			</Flex>
		</Box>
	);
};

export default AuthForm;

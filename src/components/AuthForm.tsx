import {
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	Input,
	Spinner,
	Text,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";

const schema = z.object({
	emailOrUsername: z.string().min(1, "Email or username is required."),
	password: z.string().min(1, "Password is required."),
});

type FormFields = z.infer<typeof schema>;

const AuthForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		setError,
	} = useForm<FormFields>({
		resolver: zodResolver(schema),
	});

	const onSubmit: SubmitHandler<FormFields> = async (data) => {
		try {
		} catch (error) {}
	};

	return (
		<Box as="form" onSubmit={handleSubmit(onSubmit)}>
			<Flex direction="column" gap={5}>
				<FormControl>
					<FormLabel>
						Email or username{" "}
						<Text as="span" color="red">
							*
						</Text>
					</FormLabel>
					<Input
						type="text"
						border="none"
						bg="#DBE4E9"
						{...register("emailOrUsername")}
					/>
					{errors.emailOrUsername && (
						<Text color="red">
							{errors.emailOrUsername.message}
						</Text>
					)}
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
						{...register("password")}
					/>
					{errors.password && (
						<Text color="red">{errors.password.message}</Text>
					)}
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

				{errors.root && <Text color="red">{errors.root.message}</Text>}

				<Button
					type="submit"
					colorScheme="purple"
					borderRadius={25}
					mt={20}
					disabled={isSubmitting}
				>
					{isSubmitting ? <Spinner /> : "Log In"}
				</Button>
			</Flex>
		</Box>
	);
};

export default AuthForm;

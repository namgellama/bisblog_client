import { Flex, Input } from "@chakra-ui/react";
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = () => {
	return (
		<>
			<Flex
				align="center"
				w="500px"
				borderRadius={25}
				px={5}
				bg="#DBE4E9"
			>
				<IoSearchOutline />
				<Input
					type="text"
					placeholder="Search blog"
					variant="ghost"
					w="100%"
					bg="#DBE4E9"
				/>
			</Flex>
		</>
	);
};

export default SearchBar;

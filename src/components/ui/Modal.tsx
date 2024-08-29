import {
	Modal as ChakraModal,
	Heading,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalOverlay,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
	headingText: string;
	children: ReactNode;
	isOpen: boolean;
	onClose: () => void;
}

const Modal = ({ headingText, children, isOpen, onClose }: Props) => {
	return (
		<ChakraModal isOpen={isOpen} onClose={onClose} isCentered>
			<ModalOverlay />
			<ModalContent>
				<ModalCloseButton />
				<ModalBody px={10} pt={12} pb={5}>
					<Heading as="h3" fontSize="2xl" mb={5}>
						{headingText}
					</Heading>

					{children}
				</ModalBody>
			</ModalContent>
		</ChakraModal>
	);
};

export default Modal;

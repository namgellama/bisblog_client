import { AuthForm, Modal } from ".";

interface Props {
	isOpen: boolean;
	onClose: () => void;
}

const AuthModal = ({ isOpen, onClose }: Props) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose} headingText="Log In">
			<AuthForm />
		</Modal>
	);
};

export default AuthModal;

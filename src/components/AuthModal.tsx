import { useEffect } from "react";
import { AuthForm, Modal } from ".";
import { useAuthStore } from "../stores/authStore";

interface Props {
	isOpen: boolean;
	onClose: () => void;
}

const AuthModal = ({ isOpen, onClose }: Props) => {
	const user = useAuthStore((state) => state.user);

	useEffect(() => {
		if (user) onClose();
	}, [user]);

	return (
		<Modal isOpen={isOpen} onClose={onClose} headingText="Log In">
			<AuthForm />
		</Modal>
	);
};

export default AuthModal;

import { create } from "zustand";
import { LoginResponseDTO } from "../interfaces";
import { devtools, persist } from "zustand/middleware";

type AuthState = {
	user: LoginResponseDTO | null;
	setUser: (user: LoginResponseDTO) => void;
};

export const useAuthStore = create<AuthState>()(
	devtools(
		persist(
			(set) => ({
				user: null,
				setUser: (user) => set(() => ({ user })),
			}),
			{
				name: "authStore",
			}
		)
	)
);

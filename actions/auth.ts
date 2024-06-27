"use server";

import { signIn, signOut } from "@/auth";

export async function loginWithSocial(formData: FormData) {
	const action = formData.get("action");

	await signIn(action as string, { redirectTo: "/home" });
}

export async function logout() {
	await signOut({ redirectTo: "/" });
}
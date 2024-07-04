"use server";

import { signIn, signOut } from "@/auth";

export async function SocialLogin(formData) {
  const action = formData.get("action");
  await signIn(action, { redirectTo: "/home" });
}

export async function LogoutAuth() {
  await signOut({ redirectTo: "/" });
}

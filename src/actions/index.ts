import { loginUser, loginWithGoogle, logout, registerUser } from "./auth";

export const server = {
    // actions
    registerUser,
    logout,
    loginUser,
    loginWithGoogle
}
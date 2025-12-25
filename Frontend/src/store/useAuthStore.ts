import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

interface AuthStore {
    authUser: any;
    isSigningUp: boolean;
    isLoggingIn: boolean;
    isUpdatingProfile: boolean;
    isCheckingAuth: boolean;
    checkAuth: () => Promise<void>; // ? 
}

export const useAuthStore = create<AuthStore>((set) => ({

    // data we are tracking on each browser refresh:
    authUser: null, // -> user object {_id, fullName, email ..etc}
    isSigningUp: false,
    isLoggingIn: false,
    isUpdatingProfile: false,

    isCheckingAuth: true, // to show spinner when the browser refreshs and triggers the useEffect

    checkAuth: async () => {
        try {
            const res = await axiosInstance.get("/auth/check");

            // in controller i return (req.user), but Axios receives that JSON, and puts it in res.data.
            set({ authUser: res.data });
        } catch (error) { // triggered if backend responds with error status code (anything outside 200–299).
            console.log("Error in checkAuth: ", error)
            set({ authUser: null });
        } finally {
            set({ isCheckingAuth: false }) // disable spinner: this will be run regardless of success or failure
        }
    }
}))
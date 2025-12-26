import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

interface AuthStore {
    authUserObj: any;
    isSigningUp: boolean;
    isLoggingIn: boolean;
    isUpdatingProfile: boolean;
    isCheckingAuth: boolean;
    checkAuth: () => Promise<void>; // ? 
    signup: (data: signupDataType) => Promise<void>; // ? 
}

type signupDataType = {
    fullName: String,
    email: String,
    password: String
}

{/*
    -> export const useAuthStore = create<AuthStore>(...)
        * create returns a React hook (useAuthStore) that components call to read/update a shared, global state.
    -> (set) => ({ ... })
        * This initializer runs once when the page refreshs.
        * set is Zustand’s updater. we call set({ key: value }) to update state and trigger re-renders.

    States: (authUserObj, isSigningUp, isLoggingIn, isUpdatingProfile)

    Actions: (checkAuth, signup)
*/}

export const useAuthStore = create<AuthStore>((set) => ({

    // data we are tracking on each browser refresh:
    authUserObj: null, // -> user object {_id, fullName, email ..etc}
    isSigningUp: false,
    isLoggingIn: false,
    isUpdatingProfile: false,

    isCheckingAuth: true, // to show spinner when the browser refreshs and triggers the useEffect

    checkAuth: async () => {
        try {
            const res = await axiosInstance.get("/auth/check");

            // in controller i return (req.user), but Axios receives that JSON, and puts it in res.data.
            set({ authUserObj: res.data });
        } catch (error) { // triggered if backend responds with error status code (anything outside 200–299).
            console.log("Error in checkAuth: ", error)
            set({ authUserObj: null });
        } finally {
            set({ isCheckingAuth: false }) // disable spinner: this will be run regardless of success or failure
        }
    },

    signup: async (data: signupDataType) => {

        set({isSigningUp: true});
        set({authUserObj: data})

        try {
            const res = await axiosInstance.post("/auth/signup", data)

            console.log("success")
            toast.success("Account created successfully")
        } catch (error) {
            console.log("error")
            toast.error((error as any).Response?.data?.message);
        } finally {
            set({isSigningUp: false});
        }
    }
}))
import { create } from "zustand";
import toast from "react-hot-toast";
import axiosInstance from "axios";

type User = { _id: string; fullName: string; profilePicture?: string };
type Message = { _id: string; senderId: string; receiverId: string; text: string; createdAt: string };

interface ChatStore {
  messages: Message[];
  users: User[];
  selectedUser: User | null;
  isUsersLoading: boolean;
  isMessagesLoading: boolean;
  getUsers: () => Promise<void>;
  getMessages: (otherUserId: string) => Promise<void>;
  setSelectedUser: (selectedUser: User | null) => void;
}

export const useChatStore = create<ChatStore>((set) => ({
    
    messages: [],
    users: [],
    selectedUser: null,
    isUsersLoading: false,
    isMessagesLoading: false,

    getUsers: async () => {
        
        set({isUsersLoading: true})
        console.log("1");
        
        try {
            console.log("2");
            const res = await axiosInstance.get<User[]>("/messages/users");
            set({users: res.data});
            console.log("3");
        } catch (error) {
            toast.error("Error: in useChatStore(): Could't load users!")
        } finally {         
            set({isUsersLoading: false})
        }
    },

    getMessages: async (otherUserId: string) => {

        set({isMessagesLoading: true})
        try {
            const res = await axiosInstance.get(`/messages/${otherUserId}`)
            set({messages: res.data})
        } catch (error) {
            toast.error("Error: in useChatStore(): Could't load users!")
        } finally {
            set({isMessagesLoading: false})
        }
    },
    
    setSelectedUser: (selectedUser: User | null) => set({selectedUser})
}))
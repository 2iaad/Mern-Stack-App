import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import HomePage from "./components/HomePage"
import SignUpPage from "./components/SignUpPage"
import LoginPage from "./components/LoginPage"
import SettingsPage from "./components/SettingsPage"
import ProfilePage from "./components/ProfilePage"

import { useAuthStore } from "./store/useAuthStore"
import { useEffect } from "react"


/**
 * @summary
 * Seting up client-side routing using React Router, where:
 *		-> BrowserRouter enables URL tracking.
 *		-> Routes matches paths.
 *		-> Each Route maps a URL to a React component.
 */

export default function App() {

	const { authUser, checkAuth } = useAuthStore();

	useEffect(() => {
		checkAuth();
	}, [checkAuth])

	console.log(authUser)


	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/signup" element={<SignUpPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/settings" element={<SettingsPage />} />
				<Route path="/profile" element={<ProfilePage />} />
			</Routes>
		</div>
	)
}
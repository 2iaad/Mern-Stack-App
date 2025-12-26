import { Link } from "react-router-dom"

export default function Navbar() {

    return (
        <header className="fixed shadow-md inset-x-0 top-0 z-30 mx-auto max-w-130 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-4xl">
            <div className="px-4 flex justify-between items-center">
                <Link to="/profile" className="inline-block rounded-4xl px-3 py-2 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900">
                    Profile
                </Link>
                <Link to="/settings" className="inline-block rounded-4xl px-3 py-2 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900">
                    settings
                </Link>
                <Link to="/logout" className="inline-block rounded-4xl px-3 py-2 text-sm bg-red-400 shadow-lg font-bold text-white transition-all duration-200 hover:bg-red-600">
                    Logout
                </Link>
            </div>
        </header>
    )
}
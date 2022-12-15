import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0()

    return (
        isAuthenticated && (
                <div className="bg-blue-500">
                    <button className="" onClick={() => logout()}>
                        <h1 className="text-xl text-white" style={{ textAlign: 'center' }}>Sign out</h1>
                    </button>
                </div>
        )
    )
}

export default LogoutButton
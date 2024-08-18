import { useAuth } from "@/shared/hooks"
import type { FC } from "react"
import { Navigate, Outlet } from "react-router-dom"

export const PrivateRoute: FC = () => {
	const { isAuth, loading } = useAuth()

	if (loading) {
		return <>Loading...</>
	}

	if (!isAuth) {
		return <Navigate to="/login" />
	}

	return <Outlet />
}

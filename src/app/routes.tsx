import { AuthRoute, PrivateRoute } from "@/app/protected"
import { lazy, type FC } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
const HomePage = lazy(() => import("@/pages/home"))
const LoginPage = lazy(() => import("@/pages/login"))

export const AppRoutes: FC = () => {
	return (
		<>
			<Routes>
				{/* Проверка на не авторизованного пользователя */}
				<Route element={<AuthRoute />}>
					{/* Страница авторизации. */}
					<Route path="/login" element={<LoginPage />} />
				</Route>

				{/* Проверка на авторизованного пользователя */}
				<Route element={<PrivateRoute />}>
					<Route path="/" element={<HomePage />} />
				</Route>

				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</>
	)
}

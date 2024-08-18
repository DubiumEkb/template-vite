import { useState, useEffect } from "react"

export const useAuth = () => {
	const [isAuth, setIsAuth] = useState(false)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const checkAuth = () => {
			// Получите реальный токен из localStorage
			// const token = localStorage.getItem("authToken")
			const token = false
			if (token) {
				// Выполните дополнительную проверку токена, если это необходимо
				setIsAuth(true)
			} else {
				setIsAuth(false)
			}
			setLoading(false)
		}

		checkAuth()

		window.addEventListener("storage", checkAuth)

		return () => {
			window.removeEventListener("storage", checkAuth)
		}
	}, [])

	return { isAuth, loading }
}

import { Suspense, type FC } from "react"
import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "@/app"

export const App: FC = () => {
	return (
		<Suspense fallback={<>Loading...</>}>
			<BrowserRouter>
				<AppRoutes />
			</BrowserRouter>
		</Suspense>
	)
}

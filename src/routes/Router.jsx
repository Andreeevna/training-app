import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { useAuth } from '../hooks/useAuth'

import NotFound from '../components/screens/not-found/NotFound'

import { routes } from './routes.data'

export const Router = () => {
	const { isAuth } = useAuth()

	return (
		<BrowserRouter>
			<Routes>
				{/* TODO: Auth routes */}
				{routes.map(route =>
					route.isAuth && !isAuth ? (
						false
					) : (
						<Route
							key={route.path}
							path={route.path}
							element={<route.component />}
						/>
					)
				)}
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}
import React, { createContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
	const [isAuth, setIsAuth] = useState(!!Cookies.get('red'))

	const { pathname } = useLocation()

	useEffect(() => {
		const token = Cookies.get('red')
		if (!token) {
			setIsAuth(false)
		}
	}, [pathname, isAuth])

	return (
		<AuthContext.Provider value={{ isAuth, setIsAuth }}>
			{children}
		</AuthContext.Provider>
	)
}

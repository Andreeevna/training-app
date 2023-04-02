import React, { createContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { TOKEN } from '../app.constans'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
	const [isAuth, setIsAuth] = useState(!!Cookies.get('red'))

	const { pathname } = useLocation()

	useEffect(() => {
		const token = Cookies.get(TOKEN)
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

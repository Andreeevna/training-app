import React from 'react'
import { useAuth } from '../../../hooks/useAuth'

import style from './Header.module.scss'

const Header = ({ backlink }) => {
	const { isAuth } = useAuth()
	return <header className={style.header}>Header</header>
}

export default Header

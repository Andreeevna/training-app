import React from 'react'
import { ImArrowLeft } from 'react-icons/im'
import { useAuth } from '../../../hooks/useAuth'
import Hamburger from '../hamburger/Hamburger'

import styles from './Header.module.scss'

const Header = ({ backlink }) => {
	const { isAuth } = useAuth()
	return (
		<header className={styles.header}>
			Header
			<button onClick={() => {}}>
				<ImArrowLeft />
			</button>
			<Hamburger />
		</header>
	)
}

export default Header

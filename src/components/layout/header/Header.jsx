import React from 'react'
import { ImArrowLeft } from 'react-icons/im'
import { SlUser } from 'react-icons/sl'
import { useLocation, useNavigate } from 'react-router-dom'

import { useAuth } from '../../../hooks/useAuth'

import Hamburger from '../hamburger/Hamburger'

import styles from './Header.module.scss'

const Header = ({ backlink }) => {
	const { isAuth } = useAuth()
	const { pathname } = useLocation()
	const navigate = useNavigate()
	return (
		<header className={styles.header}>
			{pathname !== '/' ? (
				<button
					onClick={() => {
						navigate(backlink || '/')
					}}
				>
					<ImArrowLeft />
				</button>
			) : (
				<button
					onClick={() => {
						navigate(isAuth ? '/profile' : '/auth')
					}}
				>
					<SlUser fill='#fff' fontSize={25} />
				</button>
			)}

			<Hamburger />
		</header>
	)
}

export default Header

import cn from 'clsx'
import React from 'react'
import styles from './Hamburger.module.sass'
import { menu } from './menu.data'

const Menu = ({ isShow }) => {
	const logoutHandler = () => {}

	return (
		<nav
			className={cn(styles.menu, {
				[styles.show]: isShow
			})}
		>
			<ul>
				{menu.map((item, index) => (
					<li key={`_menu_${index}`}>
						{item.title}
						{/* <Link to={item.link}>{item.title}</Link> */}
					</li>
				))}
				<li>
					<button onClick={logoutHandler}>Logout</button>
				</li>
			</ul>
		</nav>
	)
}

export default Menu

import React, { useState } from 'react'
import { DiGhostSmall } from 'react-icons/di'
import { IoClose } from 'react-icons/io5'

import styles from './Hamburger.module.sass'
import Menu from './Menu'

const Hamburger = () => {
	const [isShow, setIsShow] = useState(false)

	return (
		<div className={styles.wrapper}>
			<button onClick={() => setIsShow(!isShow)}>
				{isShow ? <IoClose color='white' /> : <DiGhostSmall color='white' />}
			</button>
			<Menu isShow={isShow} />
		</div>
	)
}

export default Hamburger

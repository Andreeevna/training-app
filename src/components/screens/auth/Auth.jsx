import React from 'react'

import Layout from '../../layout/Layout'

const Auth = () => {
	return (
		<Layout heading='Sign in' bgImage='/images/auth-bg.png'>
			<div className='wrapper-inner-page'>
				<input type='text' placeholder='Enter email' />
			</div>
		</Layout>
	)
}

export default Auth

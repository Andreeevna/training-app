import React from 'react'
import { useForm } from 'react-hook-form'

import Layout from '../../layout/Layout'
import Button from '../../ui/button/Button'

const Auth = () => {
	const { register, handleSubmit } = useForm({
		mode: ' onCHange'
	})

	const onSubmit = data => {
		console.log(data)
	}

	return (
		<Layout heading='Sign in' bgImage='/images/auth-bg.png'>
			<div className='wrapper-inner-page'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input
						type='text'
						placeholder='Enter email'
						{...register('email', {
							require: 'Email is required'
						})}
					/>
					<Button>Lets go</Button>
				</form>
			</div>
		</Layout>
	)
}

export default Auth

import React from 'react'
import { useForm } from 'react-hook-form'

import Layout from '../../layout/Layout'
import Loader from '../../ui/Loader'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'

const isLoading = false
const isLoadingAuth = false

const Auth = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		mode: 'onChange'
	})

	const onSubmit = data => {
		// type
		console.log(data)
	}

	return (
		<Layout heading='Sign in' bgImage='/images/auth-bg.png'>
			<div className='wrapper-inner-page'>
				{true && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.email?.message}
						name='email'
						register={register}
						options={{
							required: 'Email is required'
						}}
						type='email'
						placeholder='Enter email'
					/>
					<Field
						error={errors?.password?.message}
						name='password'
						register={register}
						options={{
							required: 'Password is required'
						}}
						type='password'
						placeholder='Enter password'
					/>
					<Button>Lets go</Button>
				</form>
			</div>
		</Layout>
	)
}

export default Auth

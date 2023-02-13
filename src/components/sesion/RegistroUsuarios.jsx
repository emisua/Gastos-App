import Layout from '../Layout'
import { routes } from '../../routes'
import { backIcon } from '../../icons/icons'
import { auth } from '../../firebase/firebaseConfig'
import { useForm } from 'react-hook-form'
import Input from '../form/Input'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const RegistroUsuarios = () => {
	const { register, handleSubmit } = useForm()
	const onSubmit = async (data) => {
		const { email, password } = await data
		console.log(data)
		try {
			await createUserWithEmailAndPassword(auth, email, password)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<>
			<Layout
				headerAlign='left'
				headerTitle='Crea tu cuenta de usuario'
				headerLinkBtn1={routes.home}
				headerBtn1={backIcon}
			>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Input
						id='email'
						placeholder='Email'
						labelText='Escribe un email'
						register={register}
						type='email'
					/>
					<Input
						id='password'
						placeholder='Contraseña'
						labelText='Escribe una contraseña'
						register={register}
						type='password'
					/>
					<Input
						id='pass2'
						placeholder='Confirmar contraseña'
						labelText='Confirma la contraseña'
						register={register}
						type='password'
					/>

					<div>
						<button className='btn btn-primary mt-4' type='submit'>
							Crear usuario
						</button>
					</div>
				</form>
			</Layout>
		</>
	)
}
export default RegistroUsuarios

import Layout from '../Layout'
import { routes } from '../../routes'
import { backIcon } from '../../icons/icons'

const RegistroUsuarios = () => {
	return (
		<>
			<Layout
				headerAlign='left'
				headerTitle='Crea tu cuenta de usuario'
				headerLinkBtn1={routes.home}
				headerBtn1={backIcon}
			>
				<form>
					<input
						type='text'
						placeholder='Nombre de usuario'
						className='input w-full max-w-xs'
						value={user}
					/>
				</form>
			</Layout>
		</>
	)
}
export default RegistroUsuarios

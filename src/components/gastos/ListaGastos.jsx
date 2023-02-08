import Layout from '../Layout'
import { routes } from '../../routes'
import { backIcon } from '../../icons/icons'

const ListaGastos = () => {
	return (
		<Layout
			headerAlign='right'
			headerTitle='Lista de gastos'
			headerLinkBtn1={routes.home}
			headerBtn1={backIcon}
		>
			<h3>Estos son los gastos de las categorías</h3>
		</Layout>
	)
}
export default ListaGastos

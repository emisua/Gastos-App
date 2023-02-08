import Layout from '../Layout'
import { routes } from '../../routes'
const AddGasto = () => {
	return (
		<Layout
			headerTitle='Añade un gasto'
			headerAlign='left'
			headerBtn1='Lista de gastos'
			headerLinkBtn1={routes.listGastos}
		>
			<h3 className='text-5xl'>Vamos a añadir un gasto</h3>
		</Layout>
	)
}
export default AddGasto

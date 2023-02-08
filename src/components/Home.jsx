import Layout from './Layout'
import { routes } from '../routes'
const Home = () => {
	return (
		<Layout
			headerTitle='Página de inicio'
			headerAlign='left'
			headerBtn1='Categorías'
			headerLinkBtn1={routes.categories}
			headerBtn2='Añadir gasto'
			headerLinkBtn2={routes.addGasto}
		>
			<h3 className='text-5xl'>Esto es la página de inicio</h3>
		</Layout>
	)
}
export default Home

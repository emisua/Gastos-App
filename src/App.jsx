import { BrowserRouter, Route, Routes } from 'react-router-dom'
import InicioSesion from './components/sesion/InicioSesion'
import RegistroUsuarios from './components/sesion/RegistroUsuarios'
import ListaGastos from './components/gastos/ListaGastos'
import GastosCategoria from './components/gastos/GastosCategoria'
import EditarGasto from './components/gastos/EditarGasto'
import Home from './components/Home'
import { routes } from './routes'
import AddGasto from './components/gastos/AddGasto'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={routes.login} element={<InicioSesion />} />
				<Route path={routes.register} element={<RegistroUsuarios />} />
				<Route path={routes.listGastos} element={<ListaGastos />} />
				<Route path={routes.categories} element={<GastosCategoria />} />
				<Route path={routes.addGasto} element={<AddGasto />} />

				<Route path={routes.editGasto} element={<EditarGasto />} />
				<Route index path={routes.home} element={<Home />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App

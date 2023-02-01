import Container from './Container'
import HeaderLeft from './HeaderLeft'
const Layout = ({ children, title }) => {
	return (
		<Container>
			<header>
				<HeaderLeft title={title} />
			</header>
			<main>{children}</main>
		</Container>
	)
}
export default Layout

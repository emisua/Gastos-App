import Container from './Container'
import Header from './Header'
const Layout = ({
	children,
	headerAlign,
	headerTitle,
	headerBtn1 = '',
	headerBtn2 = '',
	headerLinkBtn1 = '',
	headerLinkBtn2 = ''
}) => {
	return (
		<Container>
			<header>
				<Header
					headerTitle={headerTitle}
					headerAlign={headerAlign}
					headerBtn1={headerBtn1}
					headerBtn2={headerBtn2}
					headerLinkBtn1={headerLinkBtn1}
					headerLinkBtn2={headerLinkBtn2}
				/>
			</header>
			<main>{children}</main>
		</Container>
	)
}
export default Layout

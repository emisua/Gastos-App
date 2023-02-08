import { Link } from 'react-router-dom'
import { routes } from '../routes'

const Header = ({
	headerAlign,
	headerTitle,
	headerBtn1 = '',
	headerBtn2 = '',
	headerLinkBtn1 = '',
	headerLinkBtn2 = ''
}) => {
	return headerAlign === 'left' ? (
		<article className='text-3xl font-bold flex justify-between items-center'>
			<h1 className=''>{headerTitle}</h1>
			<div className='flex gap-2'>
				{headerBtn1 && (
					<Link to={headerLinkBtn1} className='btn btn-secondary'>
						{headerBtn1}
					</Link>
				)}
				{headerBtn2 && (
					<Link to={headerLinkBtn2} className='btn btn-accent'>
						{headerBtn2}
					</Link>
				)}
				<Link to={routes.login} className='btn bg-black text-white'>
					LOGIN
				</Link>
			</div>
		</article>
	) : (
		<article className='text-3xl font-bold flex justify-between items-center'>
			<nav className='flex'>
				<Link to={headerLinkBtn1} className='btn btn-secondary'>
					{headerBtn1}
				</Link>
			</nav>
			<h1 className=''>{headerTitle}</h1>
		</article>
	)
}
export default Header

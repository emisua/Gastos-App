import { Link } from 'react-router-dom'

const HeaderLeft = ({ title }) => {
	return (
		<article className='text-3xl font-bold flex justify-between items-center'>
			<h1 className=''>{title}</h1>
			<div className='flex gap-2'>
				<Link to='#' className='btn btn-secondary'>
					Categorías
				</Link>
				<Link to='#' className='btn btn-accent'>
					+ Agregar gasto
				</Link>
				<Link to='#' className='btn bg-black text-white'>
					LOGIN
				</Link>
			</div>
		</article>
	)
}
export default HeaderLeft

const Container = ({ children }) => {
	return (
		<div className='min-h-screen bg-base-200 flex place-items-center'>
			<section className='container mx-auto py-8 bg-slate-100 rounded-2xl'>{children}</section>
		</div>
	)
}
export default Container

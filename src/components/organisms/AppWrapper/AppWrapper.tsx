function AppWrapper({ children }: { children: JSX.Element | JSX.Element[] }) {
	return (
		<div
			className='flex items-center justify-center top-0 right-0 bottom-0 left-0 w-full h-full p-4 bg-no-repeat bg-rain-image bg-cover shadow-xl
		 md:rounded-lg md:max-w-[900px] md:max-h-[600px] '>
			{children}
		</div>
	);
}

export default AppWrapper;

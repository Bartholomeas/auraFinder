const InfosContainer = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
	return (
		<div className='flex flex-col items-center justify-center gap-2 w-full h-1/3 md:items-start md:h-full md:w-1/3'>
			{children}
		</div>
	);
};

export default InfosContainer;

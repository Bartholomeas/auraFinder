const InfosContainer = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
	return <div className='flex flex-col items-center gap-1 md:items-start'>{children}</div>;
};

export default InfosContainer;

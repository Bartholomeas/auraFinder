const InfosContainer = ({ children, isIcon = false }: { children: JSX.Element | JSX.Element[]; isIcon?: boolean }) => {
	return (
		<div
			className={`flex flex-col items-center justify-center gap-2 w-fit h-1/3 md:items-start md:h-full md:w-1/3 ${
				isIcon && 'md:w-1/4'
			}`}>
			{children}
		</div>
	);
};

export default InfosContainer;

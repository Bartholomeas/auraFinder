const Temperature = ({ children }: { children: number | string }) => {
	return <p className='text-5xl font-medium text-basic-text'>{children}</p>;
};

export default Temperature;

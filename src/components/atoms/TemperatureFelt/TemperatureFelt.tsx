import { ReactNode } from 'react';

const TemperatureFelt = ({ children }: { children: number | string | ReactNode[] }) => {
	return <p className='text-lg font-light'>{children}</p>;
};

export default TemperatureFelt;

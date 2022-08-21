import { useState } from 'react';

const SearchBar = ({ onClickFunc }: { onClickFunc: (arg0: any) => Promise<void> }) => {
	const [inputValue, setInputValue] = useState('');

	return (
		<div className='flex justify-center items-end w-fit p-1 border-b-[1px] border-solid border-white'>
			<div className='flex flex-col items-center'>
				<label className='opacity-50 translate-x-[20px]' htmlFor='city'>
					Search city
				</label>
				<input
					className='bg-transparent'
					type='text'
					id='city'
					name='city'
					onChange={e => {
						setInputValue(e.target.value);
					}}
				/>
			</div>
			<button
				className='h-fit px-2'
				onClick={() => {
					console.log(inputValue);
					onClickFunc(inputValue);
				}}>
				<svg className='w-[20px]' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path d='M9.5 9.5L12.5 12.5' stroke='white' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
					<path
						d='M5.75 10.5C8.37335 10.5 10.5 8.37335 10.5 5.75C10.5 3.12665 8.37335 1 5.75 1C3.12665 1 1 3.12665 1 5.75C1 8.37335 3.12665 10.5 5.75 10.5Z'
						stroke='white'
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			</button>
		</div>
	);
};

export default SearchBar;

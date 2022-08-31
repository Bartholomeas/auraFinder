import AppWrapper from '../organisms/AppWrapper/AppWrapper';
import AppBody from '../organisms/AppBody/AppBody';
import ContextStateProvider from '../../state/ContextStateProvider';

const App = () => {
	return (
		<div className='flex justify-center items-center w-screen h-screen max-h-[100vh] mx-auto md:p-6'>
			<ContextStateProvider>
				<AppWrapper>
					<AppBody />
				</AppWrapper>
			</ContextStateProvider>
		</div>
	);
};

export default App;


import Main from './main';
import BurgerMenu from '../components/burger-menu';

import { useState } from 'react';

function App() {
	const [visible, setVisible] = useState(false);
	
	return (
		<>
			<Main handleClose={setVisible} />
			{visible && <BurgerMenu handleClose={setVisible}></BurgerMenu>}
		</>
	)
}

export default App

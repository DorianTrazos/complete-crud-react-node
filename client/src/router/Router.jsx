import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../pages/home/Home';
import User from '../pages/user/User';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='/user/:id' element={<User />} />
			</Route>
		</Routes>
	);
};

export default Router;

import { Outlet } from 'react-router-dom';
import Aside from '../components/aside/Aside';
import Header from '../components/header/Header';

const Layout = () => {
	return (
		<>
			<Header />
			<Aside />
			<Outlet />
		</>
	);
};

export default Layout;

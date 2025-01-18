import { NavLink } from 'react-router-dom';

const Aside = () => {
	return (
		<aside>
			<nav>
				<ul>
					<li>
						<NavLink to='/'>Users</NavLink>
					</li>
					<li>
						<span>Settings</span>
					</li>
					<li>
						<span>Support</span>
					</li>
				</ul>
			</nav>
		</aside>
	);
};

export default Aside;

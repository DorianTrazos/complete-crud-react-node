import { NavLink } from 'react-router-dom';

const Aside = () => {
	return (
		<aside>
			<nav>
				<ul>
					<li>
						<NavLink to='/'>Users</NavLink>
					</li>
				</ul>
			</nav>
		</aside>
	);
};

export default Aside;

import { useEffect, useState } from 'react';
import { getAllData } from '../../utils/api';
import UserCard from '../user-card/UserCard';

const Users = () => {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		getAllUsers(setUsers, setLoading, setError);
	}, []);

	if (loading) return <h2>Loading...</h2>;
	if (error) return <h2>Something Went Wrong!</h2>;
	if (users.length === 0) return <h2>No Users</h2>;

	return (
		<div>
			{users.map(user => (
				<UserCard key={user.userId} {...user} />
			))}
		</div>
	);
};

const getAllUsers = async (setUsers, setLoading, setError) => {
	try {
		const users = await getAllData(setError);
		setLoading(false);
		setUsers(users);
	} catch (error) {
		setLoading(false);
		setError(error);
	}
};

export default Users;

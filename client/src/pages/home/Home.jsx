import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetchUsers(setUsers);
	}, []);
	return (
		<>
			<h1>Home</h1>
			<form onSubmit={event => createUser(event)}>
				<div>
					<label htmlFor=''>Name</label>
					<input type='text' name='name' />
				</div>
				<div>
					<label htmlFor=''>Email</label>
					<input type='text' name='email' />
				</div>
				<input type='submit' />
			</form>
			{users.length === 0 && <h2>No Users</h2>}
			{users.map(user => (
				<div key={user.userId}>
					<h2>{user.name}</h2>
					<Link to={`/user/${user.userId}`}>
						<button>View user Info</button>
					</Link>
				</div>
			))}
		</>
	);
};

const fetchUsers = async setUsers => {
	try {
		const response = await fetch('http://localhost:3000/api/users');
		const users = await response.json();
		setUsers(users);
	} catch (error) {
		console.log(error);
	}
};

//POST, PATCH, DELETE
const createUser = async event => {
	event.preventDefault();
	console.log(event.target.name.value);
	console.log(event.target.email.value);
	const newUser = {
		name: event.target.name.value,
		email: event.target.email.value
	};

	try {
		const response = await fetch('http://localhost:3000/api/users', {
			method: 'POST',
			body: JSON.stringify(newUser),
			headers: { 'Content-Type': 'application/json' }
		});

		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.log(error);
	}
};

export default Home;

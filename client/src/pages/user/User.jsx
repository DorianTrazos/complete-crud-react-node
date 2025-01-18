import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../components/button/Button';
import { getDataById } from '../../utils/api';

const User = () => {
	const [user, setUser] = useState();
	const { id } = useParams();

	useEffect(() => {
		getUserInfo(id, setUser);
	}, [id]);

	if (!user) {
		return <h2>No User</h2>;
	}

	const {
		profilePicture,
		fullName,
		emailAddress,
		username,
		dateOfBirth,
		gender,
		phoneNumber
	} = user.basicInformation;

	return (
		<>
			<img src={profilePicture} alt='' />
			<h2>{fullName}</h2>
			<span>{emailAddress}</span>
			<div>
				<h3>User Profile</h3>
				<div>
					<span>Gender</span>
					<span>{gender}</span>
				</div>
				<div>
					<span>Date of Birth</span>
					<span>{dateOfBirth}</span>
				</div>
				<div>
					<span>Phone Number</span>
					<span>{phoneNumber}</span>
				</div>
				<div>
					<span>Username</span>
					<span>{username}</span>
				</div>
				<div>
					<Button type='accent'>EDIT</Button>
					<Button type='delete'>DELETE</Button>
				</div>
			</div>
		</>
	);
};

const getUserInfo = async (id, setUser) => {
	const user = await getDataById(id);
	console.log(user);
	setUser(user);
};

export default User;

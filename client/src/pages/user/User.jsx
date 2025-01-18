import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/button/Button';
import { deleteData, getDataById, updateDataById } from '../../utils/api';

const User = () => {
	const [user, setUser] = useState();
	const [isEditing, setIsEditing] = useState(false);
	const { id } = useParams();
	const navigate = useNavigate();

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
			{!isEditing && <h2>{fullName}</h2>}
			{!isEditing && <span>{emailAddress}</span>}

			{isEditing && (
				<form
					onSubmit={event =>
						updateUser(id, event.target, setUser, setIsEditing)
					}
				>
					<input type='text' name='name' defaultValue={fullName} />
					<input type='text' name='email' defaultValue={emailAddress} />

					<Button type='accent'>SAVE USER</Button>
				</form>
			)}

			{/* <div>
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
				<div> */}
			{!isEditing && (
				<Button type='accent' action={() => setIsEditing(true)}>
					EDIT
				</Button>
			)}

			<Button type='delete' action={() => deleteUser(user.userId, navigate)}>
				DELETE
			</Button>
		</>
	);
};

const getUserInfo = async (id, setUser) => {
	const user = await getDataById(id);
	console.log(user);
	setUser(user);
};

const updateUser = async (id, formInfo, setUser, setIsEditing) => {
	const body = {
		basicInformation: {
			fullName: formInfo.name.value,
			email: formInfo.email.value
		}
	};
	const userUpdated = await updateDataById(id, body);
	setUser(userUpdated);
	setIsEditing(false);
};

const deleteUser = async (id, navigate) => {
	await deleteData(id);
	navigate('/');
};

export default User;

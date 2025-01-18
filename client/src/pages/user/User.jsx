import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/button/Button';
import UserImage from '../../components/user-image/UserImage';
import { deleteData, getDataById, updateDataById } from '../../utils/api';
import {
	StyledBoldText,
	StyledButtons,
	StyledCardHeader,
	StyledInfoField,
	StyledLightText,
	StyledUser,
	StyledUserInfo
} from './user.styles';

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
		email,
		username,
		dateOfBirth,
		gender,
		phoneNumber
	} = user;

	return (
		<>
			<StyledUser>
				<Link to='/' style={{ marginBottom: '1rem' }}>
					<Button type='accent'>Back to Users</Button>
				</Link>
				<UserImage profilePicture={profilePicture} username={username} />
				{isEditing && (
					<form
						onSubmit={event =>
							updateUser(id, event.target, setUser, setIsEditing)
						}
					>
						<StyledInfoField>
							<label htmlFor='name'>Name</label>
							<input type='text' name='name' defaultValue={fullName} />
						</StyledInfoField>
						<StyledInfoField>
							<label htmlFor='email'>Email</label>
							<input type='text' name='email' defaultValue={email} />
						</StyledInfoField>
						<StyledButtons>
							<Button type='accent'>SAVE USER</Button>
							<Button type='delete' action={() => setIsEditing(false)}>
								CANCEL
							</Button>
						</StyledButtons>
					</form>
				)}
				{!isEditing && (
					<StyledUserInfo>
						<StyledCardHeader>
							<h2>{fullName}</h2>
							<StyledLightText>{email}</StyledLightText>
							<StyledLightText>@{username}</StyledLightText>
						</StyledCardHeader>
						<StyledLightText>User Profile</StyledLightText>
						<StyledInfoField>
							<StyledLightText>Gender:</StyledLightText>
							<StyledBoldText>{gender}</StyledBoldText>
						</StyledInfoField>
						<StyledInfoField>
							<StyledLightText>Date of Birth:</StyledLightText>
							<StyledBoldText>{dateOfBirth}</StyledBoldText>
						</StyledInfoField>
						<StyledInfoField>
							<StyledLightText>Phone Number:</StyledLightText>
							<StyledBoldText>{phoneNumber}</StyledBoldText>
						</StyledInfoField>
						<StyledButtons>
							<Button type='accent' action={() => setIsEditing(true)}>
								EDIT
							</Button>

							<Button
								type='delete'
								action={() => deleteUser(user.userId, navigate)}
							>
								DELETE
							</Button>
						</StyledButtons>
					</StyledUserInfo>
				)}
			</StyledUser>
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
		fullName: formInfo.name.value,
		email: formInfo.email.value
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

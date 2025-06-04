import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ActiveUser from '../../components/active-user/ActiveUser';
import Button from '../../components/button/Button';
import UserImage from '../../components/user-image/UserImage';
import { deleteDataById, getDataById, updateDataById } from '../../utils/api';
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
		active,
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
					<Button style='accent' type='button'>
						Back to Users
					</Button>
				</Link>
				<UserImage profilePicture={profilePicture} username={username} />
				{isEditing && (
					<form
						onSubmit={event => updateUser(id, event, setUser, setIsEditing)}
					>
						<StyledInfoField>
							<label htmlFor='active'>Active</label>
							<input type='checkbox' name='active' defaultChecked={active} />
						</StyledInfoField>
						<StyledInfoField>
							<label htmlFor='name'>Name</label>
							<input type='text' name='name' defaultValue={fullName} />
						</StyledInfoField>
						<StyledInfoField>
							<label htmlFor='email'>Email</label>
							<input type='text' name='email' defaultValue={email} />
						</StyledInfoField>
						<StyledInfoField>
							<label htmlFor='birth'>Date of Birth</label>
							<input type='date' name='birth' defaultValue={dateOfBirth} />
						</StyledInfoField>
						<StyledInfoField>
							<label htmlFor='phone'>Phone</label>
							<input type='phone' name='phone' defaultValue={phoneNumber} />
						</StyledInfoField>
						<StyledButtons>
							<Button style='accent'>SAVE USER</Button>
							<Button
								style='delete'
								type='button'
								action={() => setIsEditing(false)}
							>
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

						<ActiveUser active={active} />
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
							<Button style='accent' action={() => setIsEditing(true)}>
								EDIT
							</Button>

							<Button
								style='delete'
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
	setUser(user);
};

const updateUser = async (id, event, setUser, setIsEditing) => {
	event.preventDefault();
	const formInfo = event.target;
	const body = {
		fullName: formInfo.name.value,
		email: formInfo.email.value,
		dateOfBirth: formInfo.birth.value,
		phoneNumber: formInfo.phone.value,
		active: formInfo.active.checked
	};
	const userUpdated = await updateDataById(id, body);
	setUser(userUpdated);
	setIsEditing(false);
};

const deleteUser = async (id, navigate) => {
	await deleteDataById(id);
	navigate('/');
};

export default User;

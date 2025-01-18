import { Link } from 'react-router-dom';
import ActiveUser from '../active-user/ActiveUser';
import Button from '../button/Button';
import UserImage from '../user-image/UserImage';
import {
	StyledFooterCard,
	StyledUserCard,
	StyledUserInfo
} from './user-card.styles';

const UserCard = ({
	userId,
	active,
	profilePicture,
	fullName,
	email,
	username
}) => {
	return (
		<StyledUserCard>
			<UserImage profilePicture={profilePicture} username={username} />
			<StyledUserInfo>
				<h2>{fullName}</h2>
				<span>{email}</span>
				<span>@{username}</span>
			</StyledUserInfo>
			<StyledFooterCard>
				<ActiveUser active={active} />
				<Link to={`/user/${userId}`}>
					<Button style='accent'>Details</Button>
				</Link>
			</StyledFooterCard>
		</StyledUserCard>
	);
};

export default UserCard;

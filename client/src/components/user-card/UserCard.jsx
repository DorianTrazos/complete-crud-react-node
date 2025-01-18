import { Link } from 'react-router-dom';
import ActiveUser from '../active-user/ActiveUser';
import Button from '../button/Button';
import {
	StyledFooterCard,
	StyledUserCard,
	StyledUserImage,
	StyledUserInfo
} from './user-card.styles';

const UserCard = ({
	userId,
	active,
	profilePicture,
	fullName,
	emailAddress,
	username
}) => {
	return (
		<StyledUserCard>
			<StyledUserImage
				src={profilePicture}
				alt={`${username} profile picture`}
			/>
			<StyledUserInfo>
				<h2>{fullName}</h2>
				<span>{emailAddress}</span>
				<span>@{username}</span>
			</StyledUserInfo>
			<StyledFooterCard>
				<ActiveUser active={active} />
				<Link to={`/user/${userId}`}>
					<Button type='accent'>Details</Button>
				</Link>
			</StyledFooterCard>
		</StyledUserCard>
	);
};

export default UserCard;

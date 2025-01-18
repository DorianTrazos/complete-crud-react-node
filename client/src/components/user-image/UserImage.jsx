import { StyledUserImage } from './user-image.styles';

const UserImage = ({ profilePicture, username }) => {
	return (
		<StyledUserImage src={profilePicture} alt={`${username} profile picture`} />
	);
};

export default UserImage;

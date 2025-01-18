import { useState } from 'react';
import { StyledUserImage } from './user-image.styles';
const profileDefault = '/assets/images/profile-default.svg';
const UserImage = ({ profilePicture, username }) => {
	const [isLoaded, setIsLoaded] = useState(false);
	return (
		<StyledUserImage
			src={isLoaded ? profilePicture : profileDefault}
			alt={`${username} profile picture`}
			onLoad={() => setIsLoaded(true)}
			onError={() => setIsLoaded(false)}
		/>
	);
};

export default UserImage;

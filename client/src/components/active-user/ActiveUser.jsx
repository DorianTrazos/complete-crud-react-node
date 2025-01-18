import { StyledActiveUser } from './active-user.styles';

const ActiveUser = ({ active }) => {
	return (
		<StyledActiveUser $active={active}>
			{active ? 'Active' : 'Inactive'}
		</StyledActiveUser>
	);
};

export default ActiveUser;
